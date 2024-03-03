import { useState } from "react";
import { IoPieChartSharp } from "react-icons/io5";
import TodoList from "./TodoList";
import { todoList } from "../Assets/chartData";

export const TodoContainer = () => {
	const [isOpen, setIsOpen] = useState(false);
	return (
		<div className="flex w-full flex-col shadow shadow-darkgray">
			<div className="w-full h-9 py-3 mb-auto flex items-center justify-between border-b border-b-darkgray">
				<IoPieChartSharp />
				<p className="text-sm rounded-sm">Todo List</p>
				<div className="flex px-4 gap-2 justify-center items-center ">
					<span className="smallTex flex items-center justify-center rounded-sm font-normal  text-white px-0.5 bg-bluecolor">
						{" "}
						3
					</span>
					<p
						onClick={() => setIsOpen(!isOpen)}
						className="text-2xl cursor-pointer font-medium "
					>
						{isOpen ? "-" : "+"}
					</p>
					<p className="text-xl cursor-pointer font-semibold ">
						x
					</p>
					<IoPieChartSharp className="h-4 w-4" />
				</div>
			</div>
			<div
				className={` duration-300 overflow-hidden transition-shadow flex-col flex items-center justify-center ${
					isOpen
						? "h-auto p-2 duration-500"
						: "h-0  duration-500"
				}`}
			>
				<div className="flex h-full justify-between flex-col mb-1 w-full">
					<div className=" mt-5">
						{todoList.map(
							({ todo, duration, durationColor, id }) => (
								<TodoList
									id={id}
									todo={todo}
									duration={duration}
									durationColor={durationColor}
								/>
							)
						)}
						<TodoList
							id={7}
							todo={"Learn for the mid-semister exam"}
							duration={"1 month"}
							durationColor={"textcolor"}
						/>
					</div>
					<button className="ml-auto mr-5 px-2 py-2  rounded bg-bluecolor text-white">
						+ Add task
					</button>
				</div>
			</div>
		</div>
	);
};
