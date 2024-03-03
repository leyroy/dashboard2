import { useState } from "react";
import { IoPieChartSharp } from "react-icons/io5";
import Message from "./Message";

export default function DirectChartContainer() {
	const [isOpen, setIsOpen] = useState(true);
	return (
		<div className="flex w-full flex-col shadow shadow-darkgray">
			<div className="w-full h-9 py-3 mb-auto flex items-center justify-between border-b border-b-darkgray">
				<p className="text-sm rounded-sm">Direct Chat</p>
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
				className={` duration-300 transition-shadow overflow-y-scroll flex-col flex items-center justify-center ${
					isOpen ? "h-52 p-2 duration-500" : "h-0  duration-500"
				}`}
			>
				<div
					className="flex flex-col mb-1 overflow-y-scroll w-full
         "
				>
					<Message flag="send" />
					<Message flag="recieved" />
					<Message flag="send" />
					<Message flag="recieved" />
				</div>
				<div className=" flex smallText w-full auto">
					<input
						type="text"
						className="border py-0.5 px-2 focus:outline-0 border-textcolor flex-1 rounded-l"
					/>
					<button className="py-0.5 px-2 text-white bg-bluecolor cursor-pointer">
						Send
					</button>
				</div>
			</div>
		</div>
	);
}
