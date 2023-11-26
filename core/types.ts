export type VirtualNodeElementAttributes = {name: string, value: string}[];
export type VirtualNodeElementHandlers = {name: string, value: object}[];

export type VirtualNodeElement = {
	tagName: string,
	attributes: VirtualNodeElementAttributes,
	handlers: VirtualNodeElementHandlers,
	children: (VirtualNodeElement | VirtualTextElement)[],
};

export type VirtualTextElement = {
	tagName: '#text',
	value: string,
};