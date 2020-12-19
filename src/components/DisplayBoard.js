import React from "react";

export default function DisplayBoard({ items }) {
	return (
		<ul className="renderedList">
			{items.map((item, i) => (
				<li key={i}>{item}</li>
			))}
		</ul>
	);
}
