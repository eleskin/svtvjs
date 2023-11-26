import {createVirtualElement, createText} from '../core/SVTV.ts';

const Button = ({count, setCount}: { count: number, setCount: Function }) => {
	return createVirtualElement(
		'button',
		[],
		[{name: 'click', value: setCount.bind(null, count + 1)}],
		[createText.bind(null, 'Click me!')]
	);
};

export default Button;