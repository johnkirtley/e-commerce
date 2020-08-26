import React from 'react';
import './App.css';

import { Route } from 'react-router-dom';

import Home from './components/Home';
import ProductGrid from './components/ProductGrid';
import Checkout from './components/Checkout';

const App = () => {
	return (
		<>
			<Route exact path='/'>
				<Home />
				<ProductGrid />
			</Route>
			<Route path='/checkout' component={Checkout} />
		</>
	);
};

export default App;
