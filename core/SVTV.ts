import {
	VirtualNodeElement,
	VirtualNodeElementAttributes,
	VirtualNodeElementHandlers,
	VirtualTextElement,
} from './types.ts';

class SVTV {
	static createElement(
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
}

const createElement = SVTV.createElement;
const createText = SVTV.createText;
const useState = SVTV.useState;

export {createElement, createText, useState};