import {createElement, createText} from '../core/SVTV.ts';
import Button from './Button.ts';

const App = () => {
	return createElement(
		'div',
		[],
		[],
		[Button, createText.bind(null, '0')]
	);
};

export default App;