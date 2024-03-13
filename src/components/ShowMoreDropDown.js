import React, { useState } from "react";
import { IoIosArrowBack } from "react-icons/io";
import DropDown from "./DropDown";
import { FaRegCircle } from "react-icons/fa6";
import { extralData } from "../Assets/sideBarDatat";
import { SidebarNave } from "./SideBarItems";

export default function ShowMoreDropDown({
	tab,
	setTab,
	isOpen,
	setIsOpen,
	title1,
	title2,
	data1,
	data2,
	label,
	Icon,
	isColor,
}) {
	const [isDropOpen, setIsDropIsOpen] = useState(false);
	return (
		<div className={`${!isOpen && "px-2"}`}>
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
				<div className="w-6 text-2xl font-semibold h-6">{Icon}</div>
				<h1
					className={`${
						isOpen ? "block whitespace-nowrap text-sm" : "hidden"
					}`}
				>
					{label}
				</h1>
				<div
					className={` transition-all duration-150 ${
						isDropOpen && "-rotate-90"
					} ${isOpen ? "block ml-auto" : "hidden"}`}
				>
					<IoIosArrowBack />
				</div>
			</div>
			<div className={`block ${!isDropOpen && "hidden"}`}>
				<DropDown
					tab={tab}
					setTab={setTab}
					Icon={<FaRegCircle />}
					isOpen={isOpen}
					setIsOpen={setIsOpen}
					data={data1}
					title={title1}
				/>
				<DropDown
					tab={tab}
					setTab={setTab}
					Icon={<FaRegCircle />}
					isOpen={isOpen}
					setIsOpen={setIsOpen}
					data={data2}
					title={title2}
				/>
				<SidebarNave
					tab={tab}
					setTab={setTab}
					isOpen={isOpen}
					setIsOpen={setIsOpen}
					data={extralData}
				/>
			</div>
		</div>
	);
}
