import { ADD_TO_CART, UPDATE_TOTAL, REMOVE_FROM_CART } from '../actions';

export const initialState = {
	cart: [],
	cartTotal: 0,
	cartCount: 0,
	adding: false,
	added: false,
};

export const cartReducer = (state = initialState, action) => {
	console.log(action);
	switch (action.type) {
		case ADD_TO_CART:
			console.log(state.cart);

			return {
				...state,
				cart: [...state.cart, action.payload],
				cartCount: state.cartCount + 1,
			};

		case UPDATE_TOTAL:
			return {
				...state,
				cartTotal: state.cartTotal + action.payload,
			};

		case REMOVE_FROM_CART:
			const item = state.cart.splice(action.payload, 1);
			console.log('item', item);
			return {
				...state,
				cart: [...state.cart],
				cartCount: state.cartCount - 1,
				cartTotal: state.cartTotal - item[0].price,
			};

		default:
			return {
				...state,
			};
	}
};
