import React, { useState } from "react";
import { SlCalender } from "react-icons/sl";
import MapContainer from "./MapContainer";

export default function Visitors() {
	const [isOpen, setIsOpen] = useState(true);
	return (
		<div className="flex rounded-sm flex-col shadow shadow-textcolor text-white bg-bluecolor w-full ">
			<div className="flex items-center justify-between w-full py-5 mb-auto h-9 ">
				<p className="text-sm rounded-sm px-3">Visitors</p>
				<div className="flex items-center h-3 justify-center gap-2 px-4 ">
					<div className="p-0.5 hover:bg-darkgray hover:bg-opacity-30">
						<SlCalender className="cursor-pointer" />
					</div>
					<p
						onClick={() => setIsOpen(!isOpen)}
						className="text-2xl p-1 rounded-sm hover:bg-darkgray hover:bg-opacity-30 text-white font-medium cursor-pointer "
					>
						{isOpen ? "-" : "+"}
					</p>
				</div>
			</div>
			<div
				className={` transition-shadow flex-col flex items-center justify-center ${
					isOpen ? "h-72 duration-300 " : "h-0.5  duration-300"
				}`}
			>
				<MapContainer />
			</div>
		</div>
	);
}
