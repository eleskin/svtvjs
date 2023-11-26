import {createElement, createText, useState} from '../core/SVTV.ts';
import Button from './Button.ts';

const App = () => {
	const [getCount, setCount] = useState<number>(0);
	
	return createElement(
		'div',
		[],
		[],
		[
			Button.bind(null, {count: getCount(), setCount}), createText.bind(null, String(getCount()))
		],
	);
};

export default App;