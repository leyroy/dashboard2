import React, { useState } from "react";
import { IoIosArrowBack } from "react-icons/io";
import { FaRegCircle } from "react-icons/fa6";
import { Link } from "react-router-dom";

export default function DropDown({
	isOpen,
	setIsOpen,
	data,
	title,
	Icon,
	tab,
	setTab,
	isColor,
}) {
	const [isDropOpen, setIsDropIsOpen] = useState(false);
	return (
		<div className={`${!isOpen && "px-2 "}`}>
			<div
				onClick={() => {
					setIsOpen(true);
					setIsDropIsOpen(!isDropOpen);
				}}
				className={`flex justify-start ${
					!isOpen ? "justify-center items-center" : "px-2"
				} rounded py-1 items-center  gap-1 ${
					isColor
						? "bg-bluecolor text-white"
						: "hover:bg-textcolor hover:bg-opacity-20 text-textcolor hover:text-white"
				} cursor-pointer`}
			>
				<div className={`w-5 h-5 ml-1`}>{Icon}</div>
				<h1
					className={`${
						isOpen ? "block whitespace-nowrap text-sm" : "hidden"
					}`}
				>
					{title}
				</h1>
				<div
					className={` transition-all duration-150 ${
						isDropOpen && "-rotate-90"
					} ${isOpen ? "block ml-auto" : "hidden"}`}
				>
					<IoIosArrowBack />
				</div>
			</div>
			<ul className="">
				{data.map((item, id) => (
					<Link
						to={`/?tab=${item.link}`}
						key={id}
						className={`px-2 ${
							isDropOpen && isOpen ? "block" : "hidden"
						} hover:bg-textcolor hover:bg-opacity-10 my-1 cursor-pointer hover:text-white ${
							tab === item?.link && "bg-textcolor bg-opacity-25"
						} rounded duration-300 flex items-center py-0.5 justify-start text-sm ease-linear transition-opacity gap-1`}
					>
						<FaRegCircle className="w-3 h-3" />
						<li className="text-sm whitespace-nowrap">
							{item.lable}
						</li>
					</Link>
				))}
			</ul>
		</div>
	);
}
