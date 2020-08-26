import { ADD_TO_CART, REMOVE_FROM_CART } from '../actions';

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

		case REMOVE_FROM_CART:
			const updatedCart = state.cart.filter((item) => {
				return item.id != action.payload;
			});

			return updatedCart;

		default:
			return {
				...state,
			};
	}
};
