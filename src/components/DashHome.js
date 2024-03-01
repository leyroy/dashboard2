import React from "react";
import { FaBars } from "react-icons/fa6";
export default function DashHome({ setIsOpen }) {
	return (
		<div className="w-full">
			<header className="flex p-3 cursor-pointer shadow-md w-full shadow-textcolor">
				<div
					className=""
					onClick={() => setIsOpen((pre) => !pre)}
				>
					<FaBars className="" />
				</div>
				<div></div>
			</header>
		</div>
	);
}
