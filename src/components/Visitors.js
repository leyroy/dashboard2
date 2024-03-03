import React, { useState } from "react";
import { IoPieChartSharp } from "react-icons/io5";
import MapContainer from "./MapContainer";

export default function Visitors() {
	const [isOpen, setIsOpen] = useState(true);
	return (
		<div className="flex flex-col w-full shadow shadow-darkgray">
			<div className="flex items-center justify-between w-full py-3 mb-auto border-b h-9 border-b-darkgray">
				<p className="text-sm rounded-sm">Direct Chat</p>
				<div className="flex items-center justify-center gap-2 px-4 ">
					<span className="smallTex flex items-center justify-center rounded-sm font-normal  text-white px-0.5 bg-bluecolor">
						{" "}
						3
					</span>
					<p
						onClick={() => setIsOpen(!isOpen)}
						className="text-2xl font-medium cursor-pointer "
					>
						{isOpen ? "-" : "+"}
					</p>
					<p className="text-xl font-semibold cursor-pointer ">
						x
					</p>
					<IoPieChartSharp className="w-4 h-4" />
				</div>
			</div>
			<div
				className={` duration-300 transition-shadow overflow-y-scroll flex-col flex items-center justify-center ${
					isOpen ? "h-52 p-2 duration-500" : "h-0  duration-500"
				}`}
			>
				<MapContainer />
			</div>
		</div>
	);
}
