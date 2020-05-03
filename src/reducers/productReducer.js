import { FETCH_PRODUCTS, FILTER_PRODUCTS_BY_TYPE, ORDER_PRODUCTS_BY_PRICE } from '../acions/types';

//reducer is a function that evaluates current(initial) state and actions and returns new state
// hence productReducer is function that evaluates Product.component states and action related to product.component,
// and creates a brand new object which contains updated states using initialState's properties and returns the brand new object.
// NOTE: it doesn't update the initialState object rather it creates new object using initialState properties or content and returns it.

// initialState object stores the Prodcut.component's initial or default state to be returned in case of no state change in the Prodcut.component.
const initialState = { items: [], filteredItems: [], itemType: '' };

export default function(state = initialState, action) {
	switch (action.type) {
		case FETCH_PRODUCTS:
			// syntax, return any_object. here any_object is an object made up
			// of (all the properties of state including its items property which is being updated with the payload)
			return { ...state, filteredItems: action.payload, items: action.payload };

		case FILTER_PRODUCTS_BY_TYPE:
			return { ...state, filteredItems: action.payload.filteredItems, itemType: action.payload.type };

		case ORDER_PRODUCTS_BY_PRICE:
			return { ...state, filteredItems: action.payload.sortedItems, itemType: action.payload.sortBy };

		default:
			// returning the same old object or state.
			return state;
	}
}
