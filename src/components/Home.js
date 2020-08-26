import React from 'react';
import { connect } from 'react-redux';

const Home = (props) => {
	return (
		<div className='header-container'>
			<div className='header-title'>
				<h1>E-Commerce Store</h1>
			</div>
			<div className='checkout-logo'>
				<img
					src='https://cdn1.iconfinder.com/data/icons/interface-elements-iii-1/512/Basket-512.png'
					alt='checkout cart'
				/>
				<span className={props.cartCount > 0 ? 'cart-count' : ''}>
					{props.cartCount > 0 ? props.cartCount : ''}
				</span>
			</div>
		</div>
	);
};

const mapStateToProps = (state) => {
	return {
		cartCount: state.cartCount,
	};
};

export default connect(mapStateToProps)(Home);
