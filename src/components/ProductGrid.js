import React, { useState } from 'react';
import ItemData from '../data/items.json';

import { addToCart } from '../actions';
import { connect } from 'react-redux';

const ProductGrid = (props) => {
	const [items, setItems] = useState(ItemData);

	return (
		<div className='product-grid'>
			{items.shirts.map((shirt) => (
				<div>
					<p>{shirt.name}</p>
					<button onClick={() => props.addToCart(shirt.name)}>
						Add To Cart
					</button>
				</div>
			))}
			{items.pants.map((pant) => (
				<div>
					<p>{pant.name}</p>
					<button>Add To Cart</button>
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

export default connect(mapStateToProps, { addToCart })(ProductGrid);
