import React, { useState } from 'react';
import ItemData from '../data/items.json';

import { addToCart, updateTotal } from '../actions';
import { connect } from 'react-redux';

const ProductGrid = (props) => {
	const [items, setItems] = useState(ItemData);

	const updateCart = (item, price) => {
		props.addToCart(item);
		props.updateTotal(price);
	};

	return (
		<div className='product-grid'>
			{items.data.map((item) => (
				<div className='item'>
					<p>{item.name}</p>
					<img src={item.image} alt={item.name} />
					<button onClick={() => updateCart(item, item.price)}>
						Add To Cart
					</button>
				</div>
			))}
		</div>
	);
};

const mapStateToProps = (state) => {
	console.log(state);
	return {
		cart: [...state.cart],
		cartCount: state.cartCount,
	};
};

export default connect(mapStateToProps, { addToCart, updateTotal })(
	ProductGrid
);
