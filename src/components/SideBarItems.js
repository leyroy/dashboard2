import React from "react";
import DropDown from "./DropDown";
import { FaRegCircle } from "react-icons/fa6";

function SideBarItems({ isOpen, Icon, label }) {
	return (
		<div
			className={`flex  ${
				!isOpen && "mx-auto w-fit"
			} rounded hover:bg-textcolor hover:bg-opacity-20 py-1 cursor-pointer text-sm gap-1 px-3 items-center justify-start`}
		>
			<Icon className={" h-4 w-4 mr-0.5"} />
			<span className={`${isOpen ? "flex" : "hidden"}`}>
				{label}
			</span>
		</div>
	);
}

export const SidebarNave = ({
	data,
	isDropOpen,
	isOpen,
}) => {
	return (
		<ul>
			{data.map((item, id) => (
				<div
					key={id}
					className={`px-2
					} hover:bg-textcolor hover:bg-opacity-10 my-1 cursor-pointer hover:text-white rounded duration-300 flex items-center py-0.5 px-1 justify-start text-sm ease-linear transition-opacity gap-1`}
				>
					<FaRegCircle className="w-3 h-3" />
					<li className="text-sm whitespace-nowrap">
						{item.lable}
					</li>
				</div>
			))}
		</ul>
	);
};

export default SideBarItems;
