import React, { Dispatch, SetStateAction } from "react";
import { TodoItem } from "./InputScreen";

type DisplayBoardProps = {
	items: TodoItem[];
	setTodoItems: Dispatch<SetStateAction<TodoItem[]>>;
};

export default function DisplayBoard({
	items,
	setTodoItems,
}: DisplayBoardProps) {
	const handleDoneBtn = (item: TodoItem) => {
		setTodoItems(
			items.map((val) => {
				if (val.id === item.id) {
					return {
						...val,
						completed: !val.completed,
					};
				}
				return val;
			})
		);
	};

	const handleRemoveBtn = (item: TodoItem) => {
		// console.log(item);
		setTodoItems(items.filter((val) => val.id !== item.id));
	};

	const saveAsPdf = () => {
		console.log("downloading pdf");

		const list: HTMLUListElement | null =
			document.querySelector(".renderedList");
		const myWindow: Window | null = window.open(
			"",
			"PRINT",
			"height=650,width=900,top=100,left=150"
		);
		if (list !== null && myWindow !== null) {
			myWindow.document.write(`<html><body>`);
			myWindow.document.write(list.innerHTML);
			myWindow.document.write(`</body></html> `);
			myWindow.document.close();
			myWindow.focus();
			myWindow.print();
			myWindow.close();
		}

		return true;
	};

	return (
		<>
			{items.length === 0 ? (
				"Add task to display"
			) : (
				<>
					<ul className="renderedList">
						{items.map((item) => (
							<li key={item.id} className={item.completed ? "completed" : ""}>
								<button className="doneBtn" onClick={() => handleDoneBtn(item)}>
									{item.completed ? "↩" : "✔"}
								</button>
								{item.todoItem}
								<button
									className="removeBtn"
									onClick={() => handleRemoveBtn(item)}
								>
									x
								</button>
							</li>
						))}
					</ul>
					<button className="add-button" onClick={() => saveAsPdf()}>
						Save as pdf
					</button>
				</>
			)}
		</>
	);
}
