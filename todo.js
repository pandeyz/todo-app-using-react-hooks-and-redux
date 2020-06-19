import React from 'react';	
 
function reducer(state = [], action){
	
	switch (action.type) {
		case "ADD_TODO":
			// Merge the state and return it
			return [...state, action.payload];

		case "DELETE_TODO":
			let index = action.payload;

			// Get the existing state
			let todos = [...state];

			// Splice the element
			todos.splice(index, 1);

			// Return the updated state
			return todos;
		
		default:
			return state;
	}
}
 
export default reducer;