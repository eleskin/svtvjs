const virtualDOMExample = {
	tagName: 'div',
	attributes: [{name: 'name', value: 'value'}],
	handlers: [{name: 'name', value: () => ''}],
	children: [{
		tagName: 'button',
		attributes: [],
		handlers: [],
		children: [{
			tagName: '#text',
			value: 'Click me!',
		}],
	}],
};