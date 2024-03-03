import React, { useEffect, useState } from "react";
import { FaBars } from "react-icons/fa6";
import { useLocation } from "react-router-dom";
import Dashboardv1 from "./Dashboardv1";
export default function DashHome({ setIsOpen }) {
	const [tab, setTab] = useState("");
	const location = useLocation();
	useEffect(() => {
		const params = new URLSearchParams(location.search);
		const url = params.get("tab");
		url && setTab(url);
		console.log(url);
	}, [location.search]);
	return (
		<div className="w-full h-screen flex flex-col justify-start overflow-y-scroll">
			<header className="flex  p-3 gap-4 shadow-md w-full shadow-textcolor">
				<div
					className="cursor-pointer"
					onClick={() => setIsOpen((pre) => !pre)}
				>
					<FaBars className="" />
				</div>
				<div className="flex items-center gap-3 text-sm text-textcolor">
					<button>Home</button>
					<button>Contact</button>
				</div>
				<div className="ml-auto text-sm">Icons</div>
			</header>
			<div>{tab === "dashboardv1" && <Dashboardv1 />}</div>
			<footer className="flex mt-auto justify-between items-center px-3 text-sm py-4 shadow shadow-darkgray">
				<div>
					Copyrigth &copy; 2020-2021{" "}
					<span className="text-bluecolor">AdminLTE.io</span> All
					rights reserved
				</div>
				<div>Vaersion 3.2.0</div>
			</footer>
		</div>
	);
}
