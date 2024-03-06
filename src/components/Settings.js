import React, { useState } from "react";
import {
	SmallTextOptions,
	footerOptions,
	headerOptions,
	modes,
	navbarVariants,
	sideBarOptions,
} from "../Assets/dashHomeSidebarIcons";
import { IoCloseOutline } from "react-icons/io5";

const ShowSetingsNavs = ({ data, label }) => {
	return (
		<div className=" gap-2 flex flex-col text-sm text-white">
			<h1>{label}</h1>
			{data.map((item) => (
				<ShowOptions item={item} />
			))}
		</div>
	);
};

const ShowOptions = ({ item }) => {
	const [enable, setEnable] = useState(false);
	return (
		<div
			key={item.id}
			className="flex text-textcolor text-sm cursor-pointer items-start justify-start gap-2"
		>
			<input
				onChange={() => setEnable((prv) => !prv)}
				className="cursor-pointer h-4 w-4"
				type="checkbox"
				checked={enable}
				id=""
			/>
			<span htmlFor="">{item.lable}</span>
		</div>
	);
};

function Settings({ isShowSettings, setIsShowSettings }) {
	return (
		<div
			className={`-10 ${
				isShowSettings ? "w-48 pl-2 pt-12" : "w-0"
			} duration-500 top-0 fixed flex flex-col bottom-0 pb-7 h-screen overflow-hidden bg-darkgray right-6`}
		>
			<div
				onClick={() => setIsShowSettings((prv) => !prv)}
				className="cursor-pointer text-2xl mt-3 text-white ml-auto mr-3"
			>
				<IoCloseOutline />
			</div>
			<div
				className={` ${
					isShowSettings
						? "overflow-y-scroll scrollbar-thin scrollbar-corner-darkgray"
						: "overflow-y-hidden"
				} mt-3 scrollbar-track-white  gap-4 pb-4 flex flex-col h-full`}
			>
				{isShowSettings && (
					<>
						<ShowSetingsNavs
							data={modes}
							label={"Theme"}
						/>
						<ShowSetingsNavs
							data={headerOptions}
							label={"Header Options"}
						/>
						<ShowSetingsNavs
							data={sideBarOptions}
							label={"Sidebar Options"}
						/>
						<ShowSetingsNavs
							data={footerOptions}
							label={"Footer Options"}
						/>
						<ShowSetingsNavs
							data={SmallTextOptions}
							label={"Small Text Options"}
						/>
						<ShowSetingsNavs
							data={navbarVariants}
							label={"Navebar Variants"}
						/>
					</>
				)}
			</div>
		</div>
	);
}

export default Settings;
