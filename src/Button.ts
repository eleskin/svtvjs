import {createElement, createText} from '../core/SVTV.ts';

const Button = () => {
	return createElement('button', [], [], [createText.bind(null, 'Click me!')]);
};

export default Button;