import { useState } from "react";
import { TiMessages } from "react-icons/ti";
import Message from "./Message";

export default function DirectChartContainer() {
	const [isOpen, setIsOpen] = useState(true);
	return (
		<div className="flex w-full rounded-sm flex-col shadow shadow-textcolor">
			<div className="w-full px-2 h-9 py-3 mb-auto flex items-center justify-between border-b border-b-textcolor">
				<p className="text-sm rounded-sm">Direct Chat</p>
				<div className="flex gap-4 opacity-70 px-2 justify-center items-center ">
					<span className="smallTex flex items-center justify-center rounded-sm font-normal  text-white px-0.5 bg-bluecolor">
						{" "}
						3
					</span>
					<p
						onClick={() => setIsOpen(!isOpen)}
						className="text-xl cursor-pointer font-semibold "
					>
						{isOpen ? "-" : "+"}
					</p>

					<TiMessages className="h-4 w-4" />
					<span className="cursor-pointer font-medium">x</span>
				</div>
			</div>
			<div
				className={` duration-300 transition-shadow flex-col flex items-center justify-center ${
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
