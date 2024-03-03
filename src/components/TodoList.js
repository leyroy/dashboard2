import React, { useState } from "react";
import { IoPieChartSharp } from "react-icons/io5";
import { FiEdit } from "react-icons/fi";

export default function TodoList({
	id,
	todo,
	durationColor,
	duration,
}) {
	const [isComplete, setIsComplete] = useState(false);
	return (
		<div
			key={id}
			className="flex my-1 px-4 group items-center justify-start gap-3"
		>
			<IoPieChartSharp className="h-4 w-4" />
			<input
				type="checkbox"
				onChange={() => setIsComplete(!isComplete)}
				name="1"
				checked={isComplete}
			/>
			<p
				className={`relative before:opacity-85 before:w-full ${
					isComplete &&
					"before:absolute duration-300 text-darkgray opacity-50 before:h-0.5 before:top-3 before:bg-darkgray"
				}`}
			>
				{todo}
			</p>
			<span
				className={`smaller duration-300 flex items-center justify-center text-white px-2 py-0.5 ${
					isComplete
						? "bg-darkgray bg-opacity-35 text-darkgray"
						: ` bg-${durationColor}`
				} p-0.5 rounded `}
			>
				{duration}
			</span>
			<div className="p-0.5 text-redcolor group-hover:flex hidden ml-auto">
				<FiEdit />
			</div>
		</div>
	);
}
