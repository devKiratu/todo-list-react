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

	const saveAsPdf = () => {
		console.log("downloading pdf");
		const list = document.querySelector(".renderedList");
		const myWindow = window.open(
			"",
			"PRINT",
			"height=650,width=900,top=100,left=150"
		);
		myWindow.document.write(`<html><body>`);
		myWindow.document.write(list.innerHTML);
		myWindow.document.write(`</body></html> `);
		myWindow.document.close();
		myWindow.focus();
		myWindow.print();
		myWindow.close();

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
