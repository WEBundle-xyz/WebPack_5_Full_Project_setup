import { render } from 'react-dom';
import App from './components/App';

import './styles/index.css';

render(<App />, document.getElementById('root'));

const carsFormula1 = {
	redbull: 23,
	mercedes: 12,
	haas: 3,
};

const carsNascar = {
	dodge: 23,
	haas: 3,
};

console.log(carsNascar);
console.log(carsFormula1);
