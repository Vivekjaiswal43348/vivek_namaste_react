import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
	name: "cart",
	initialState: {
		items: [],
	},
	reducers: {
		addItem: (state, action) => {
            /** we mutate the state over here */
			state.items.push(action.payload);
		},
		removeItem: (state, action) => {
            /** we mutate the state over here */
			state.items.pop();
		},
		clearCart: (state) => {
            /** we mutate the state over here */
			state.items.length = 0;
		},
	},
});

export const { addItem, removeItem, clearCart } = cartSlice.actions;
export default cartSlice.reducer;
