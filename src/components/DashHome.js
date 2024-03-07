import React, { useEffect, useState } from "react";
import { FaBars } from "react-icons/fa6";
import { useLocation } from "react-router-dom";
import { HiSquares2X2 } from "react-icons/hi2";
import { BsArrowsFullscreen } from "react-icons/bs";
import { IoNotificationsOutline } from "react-icons/io5";
import { IoChatbubblesOutline } from "react-icons/io5";
import { IoMdSearch } from "react-icons/io";
import Dashboardv1 from "./Dashboardv1";
import Settings from "./Settings";
export default function DashHome({ setIsOpen }) {
	const [tab, setTab] = useState("");
	const [isShowSettings, setIsShowSettings] =
		useState(false);
	const location = useLocation();
	useEffect(() => {
		const params = new URLSearchParams(location.search);
		const url = params.get("tab");
		url && setTab(url);
		console.log(url);
	}, [location.search]);
	return (
		<div className="w-full h-screen overflow-hidden flex flex-col justify-start overflow-y-scroll">
			<header className="flex z-20 p-3 bg-white gap-4 shadow-md w-full shadow-textcolor">
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
				<div className="ml-auto flex items-center justify-center gap-4 text-sm">
					<IoMdSearch className="h-6 w-6" />
					<div className="relative text-lg">
						<IoChatbubblesOutline />
						<span className="xsmaller -top-1 -right-1 bg-redcolor flex items-center justify-center h-4 w-4 rounded-full absolute p-0.5">
							1
						</span>
					</div>
					<div className="relative text-lg">
						<IoNotificationsOutline />
						<span className="xsmaller -top-1 -right-1 h-4 w-4 flex items-center justify-center bg-yelow rounded-full absolute p-0.5">
							20
						</span>
					</div>
					<BsArrowsFullscreen />
					<div
						onClick={() => setIsShowSettings((prv) => !prv)}
						className="cursor-pointer"
					>
						<HiSquares2X2 className="h-6 w-6" />
					</div>
				</div>
			</header>
			<div className="relative">
				{tab === "dashboardv1" && <Dashboardv1 />}
				<Settings
					isShowSettings={isShowSettings}
					setIsShowSettings={setIsShowSettings}
				/>
			</div>

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
