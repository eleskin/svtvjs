import {
	VirtualNodeElement,
	VirtualNodeElementAttributes,
	VirtualNodeElementHandlers,
	VirtualTextElement,
} from './types.ts';

class SVTV {
	static createVirtualElement(
		tagName: string,
		attributes: VirtualNodeElementAttributes = [],
		handlers: VirtualNodeElementHandlers = [],
		children: (() => VirtualNodeElement | VirtualTextElement)[] = [],
	): VirtualNodeElement {
		return {
			tagName,
			attributes,
			handlers,
			children: children.map(child => child()),
		};
	}
	
	static createText(value: string): VirtualTextElement {
		return {
			tagName: '#text',
			value,
		};
	}
	
	static useState<T>(initialState: T): [state: () => T, setState: (newState: T) => void] {
		let state: T = initialState;
		const setState = (newState: T): void => {
			state = newState;
		};
		
		return [() => state, setState];
	}
	
	static createElement(virtualDOM: VirtualNodeElement | VirtualTextElement) {
		if (virtualDOM.tagName === '#text') {
			return document.createTextNode((virtualDOM as VirtualTextElement).value);
		} else {
			return document.createElement((virtualDOM as VirtualNodeElement).tagName);
		}
	}
	
	static buildDOM(virtualDOM: VirtualNodeElement | VirtualTextElement) {
		const root = SVTV.createElement(virtualDOM);
		
		if (virtualDOM.tagName === '#text') return root;
		
		(virtualDOM as VirtualNodeElement).attributes?.forEach(({name, value}) => {
			(root as HTMLElement).setAttribute(name, value);
		});
		(virtualDOM as VirtualNodeElement).handlers?.forEach(({name, value}) => {
			root.addEventListener(name, (event) => value(event));
		});
		(virtualDOM as VirtualNodeElement).children.forEach((child) => {
			(root as HTMLElement).append(SVTV.buildDOM(child));
		});
		
		return root;
	}
	
	static renderDOM(selector: string, virtualDOMFunction: () => VirtualNodeElement) {
		const app = document.querySelector(selector);
		const virtualDOM = virtualDOMFunction();
		const DOM = SVTV.buildDOM(virtualDOM);
		
		console.log(DOM);
		app?.append(DOM);
	}
}

const createVirtualElement = SVTV.createVirtualElement;
const createText = SVTV.createText;
const useState = SVTV.useState;
const renderDOM = SVTV.renderDOM;

export {createVirtualElement, createText, useState, renderDOM};