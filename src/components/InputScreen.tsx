import React, { useState, useEffect, FormEvent } from "react";
import DisplayBoard from "./DisplayBoard";

export type TodoItem = {
	todoItem: string;
	id: number;
	completed: boolean;
};

type LocalStorageItems = string | null;

export default function InputScreen() {
	const [todo, setTodo] = useState<string>("");
	const [todoItems, setTodoItems] = useState<TodoItem[]>([]);

	function handleSubmit(e: FormEvent<HTMLFormElement>) {
		// console.log("I was clicked");
		e.preventDefault();
		if (todo === "") return;
		setTodoItems([
			...todoItems,
			{ todoItem: todo, id: Date.now(), completed: false },
		]);

		setTodo("");
	}

	function setLocalItems(): void {
		localStorage.setItem("todoList", JSON.stringify(todoItems));
	}

	function getLocalItems(): void {
		let items: LocalStorageItems = localStorage.getItem("todoList");
		if (items !== null) {
			let savedList = JSON.parse(items);
			setTodoItems(savedList);
		}
	}

	useEffect(() => {
		let localData: LocalStorageItems = localStorage.getItem("todoList");
		if (localData === null) {
			setLocalItems();
			getLocalItems();
		} else {
			getLocalItems();
		}
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, []);

	useEffect(() => {
		setLocalItems();
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [todoItems]);
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
				<button className="add-button" type="submit">
					Add
				</button>
			</form>
			<DisplayBoard items={todoItems} setTodoItems={setTodoItems} />
		</div>
	);
}
