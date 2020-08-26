export const ADD_TO_CART = 'ADD_TO_CART';
export const REMOVE_FROM_CART = 'REMOVE_FROM_CART';
export const UPDATE_TOTAL = 'UPDATE_TOTAL';

export const addToCart = (item) => (dispatch) => {
	console.log(dispatch);
	dispatch({
		type: ADD_TO_CART,
		payload: item,
	});
};

export const removeFromCart = (itemID) => (dispatch) => {
	dispatch({
		type: REMOVE_FROM_CART,
		payload: itemID,
	});
};

export const updateTotal = (price) => (dispatch) => {
	dispatch({
		type: UPDATE_TOTAL,
		payload: price,
	});
};
