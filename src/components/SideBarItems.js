import React from "react";
import { FaSearch } from "react-icons/fa";
import DropDown from "./DropDown";
import { dashboardV } from "../Assets/sideBarDatat";

function SideBarItems({ isOpen, isDropDown, setIsOpen }) {
	return (
		<div className="my-1 flex flex-col">
			<h2
				className={`${isOpen ? "block px-2 ml-2" : "hidden"}`}
			>
				examples
			</h2>
			<div
				className={`flex ${
					!isOpen && "mx-auto"
				} items-center ml-2 px-1 justify-start py-0.5 my-0.5 gap-1 text-textcolor hover:bg-textcolor hover:bg-opacity-10 cursor-pointer`}
			>
				<FaSearch />
				<span
					className={`text-sm hover:bg-textcolor hover:bg-opacity-10 ${
						isOpen ? "block" : "hidden"
					}`}
				>
					{" "}
					Example@
				</span>
			</div>
			{isDropDown && (
				<DropDown
					isOpen={isOpen}
					setIsOpen={setIsOpen}
					data={dashboardV}
					title={"Dashbord"}
				/>
			)}
		</div>
	);
}

export default SideBarItems;
