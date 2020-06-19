import React, { useState } from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
 
function App() {
	// To get the state from reducer
  	const todos = useSelector(state => state);

  	// To dispatch the action to reducer
  	const dispatch = useDispatch();

  	// To manage the form input state
  	const [todo, updateTodo] = useState('');

  	// To handle the input value change and set the state
  	const handleChange = (event) => {
  		updateTodo(event.target.value);
  	}

  	// To handle form submit and dispatch the action
  	const handleFormSubmit = (event) => {
  		event.preventDefault();

  		dispatch({
  			type: 'ADD_TODO',
  			payload: todo
  		});

  		// Reset the state so that input also reset
  		updateTodo('');
  	}

  	// To delete the todo value
  	const handleDelete = (index) => {
  		dispatch({
  			type: 'DELETE_TODO',
  			payload: index
  		});
  	}
  
  	return (
    	<div style={{margin: 50}}>
    		<form onSubmit={handleFormSubmit} autoComplete="off">
    			<input type="text" name="todo" onChange={handleChange} value={todo} />
    			<button>Add</button>
    		</form>
    		<hr />
    		<ul>
    			{
    				( todos.length > 0 )
    				?
    				todos.map((todo, todoIndex) => <li key={todoIndex}>{todo} <button onClick={() => handleDelete(todoIndex)}>x</button></li>)
    				:
    				<li>Add new Todo list</li>
    			}
    		</ul>
    	</div>
  	);
}

export default App;