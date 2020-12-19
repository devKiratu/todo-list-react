import React from "react";

export default function DisplayBoard({ items, setTodoItems }) {
	const handleDoneBtn = (item, i) => {
		console.log(item, i);
	};

	const handleRemoveBtn = (item, i) => {
		console.log(item);
		setTodoItems(items.filter((val) => items.indexOf(val) !== i));
	};

	return (
		<ul className="renderedList">
			{items.map((item, i) => (
				<li key={i}>
					<button className="doneBtn" onClick={() => handleDoneBtn(item, i)}>
						✔
					</button>
					{item}
					<button
						className="removeBtn"
						onClick={() => handleRemoveBtn(item, i)}
					>
						x
					</button>
				</li>
			))}
		</ul>
	);
}
