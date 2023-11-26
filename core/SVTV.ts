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
}

const createElement = SVTV.createElement;
const createText = SVTV.createText;

export {createElement, createText};