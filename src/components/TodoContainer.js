import { useState } from "react";
import { RiFileList3Fill } from "react-icons/ri";
import TodoList from "./TodoList";
import { todoList } from "../Assets/chartData";

export const TodoContainer = () => {
	const [isOpen, setIsOpen] = useState(false);
	return (
		<div className="flex w-full flex-col rounded-sm shadow shadow-textcolor">
			<div className="w-full px-2 h-9 py-3 mb-auto flex items-center justify-between border-b border-b-textcolor opacity-85">
				<RiFileList3Fill />
				<p className="text-sm rounded-sm mr-auto ml-1">
					Todo List
				</p>
				<div className="flex smaller border border-textcolor text-bluecolor justify-center items-center ">
					<span className="border-r border-t-textcolor py-0.5 px-1">
						{"<"}
					</span>
					<span className="border-r border-t-textcolor py-0.5 px-1">
						1
					</span>
					<span className="border-r border-t-textcolor py-0.5 px-1">
						2
					</span>
					<span className="border-r border-t-textcolor py-0.5 px-1">
						3
					</span>
					<span className=" py-0.5 px-1">{">"}</span>
				</div>
			</div>
			<div
				className={` duration-300 overflow-hidden transition-shadow flex-col flex items-center justify-center "h-auto p-2 duration-500"
						`}
			>
				<div className="flex h-full justify-between flex-col mb-1 w-full">
					<div className=" mt-5">
						{todoList.map(
							({ todo, duration, durationColor, id }) => (
								<div>
								<TodoList
									id={id}
									todo={todo}
									duration={duration}
									durationColor={durationColor}
								/></div>
							)
						)}
					</div>
					<button className="ml-auto mr-5 px-2 py-2  rounded bg-bluecolor text-white">
						+ Add task
					</button>
				</div>
			</div>
		</div>
	);
};
