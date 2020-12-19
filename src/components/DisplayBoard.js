import React from "react";

export default function DisplayBoard({ items, setTodoItems }) {
	const handleDoneBtn = (item) => {
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

	const handleRemoveBtn = (item) => {
		// console.log(item);
		setTodoItems(items.filter((val) => val.id !== item.id));
	};

	return (
		<ul className="renderedList">
			{items.map((item) => (
				<li key={item.id} className={item.completed ? "completed" : ""}>
					<button className="doneBtn" onClick={() => handleDoneBtn(item)}>
						{item.completed ? "↩" : "✔"}
					</button>
					{item.todoItem}
					<button className="removeBtn" onClick={() => handleRemoveBtn(item)}>
						x
					</button>
				</li>
			))}
		</ul>
	);
}
