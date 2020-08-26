import React from 'react';
import './App.css';

import Home from './components/Home';
import ProductGrid from './components/ProductGrid';
import Checkout from './components/Checkout';

const App = () => {
	return (
		<>
			<Home />
			<ProductGrid />
			<Checkout />
		</>
	);
};

export default App;
