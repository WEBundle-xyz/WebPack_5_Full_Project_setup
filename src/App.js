import React from 'react';

import myImage from './boostimgtest.png';
import './index.css';

const App = () => {
	return (
		<div>
			<h1>This is React</h1>
			<img src={myImage} alt='this is a cool image'></img>
		</div>
	);
};

export default App;
