import React, { useState } from "react";
import DisplayBoard from "./DisplayBoard";

export default function InputScreen() {
	const [todo, setTodo] = useState("");
	const [todoItems, setTodoItems] = useState([]);
	function handleSubmit(e) {
		console.log("I was clicked");
		e.preventDefault();
		if (todo === "") return;
		setTodoItems([
			...todoItems,
			{ todoItem: todo, id: Date.now(), completed: false },
		]);

		setTodo("");
	}

	// console.log(todoItems);

	return (
		<div>
			<form className="input-form" onSubmit={handleSubmit}>
				<label htmlFor="todo-item">Enter your todo items below</label>
				<input
					type="text"
					name="todo-item"
					id="todo-item"
					placeholder="What do you want to do?"
					value={todo}
					onChange={(e) => setTodo(e.target.value)}
				/>
				<button type="submit">Add</button>
			</form>
			<DisplayBoard items={todoItems} setTodoItems={setTodoItems} />
		</div>
	);
}
