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

const ShowSetingsNavs = ({ data, label, flag }) => {
	const [bg, setbg] = useState("white");
	return (
		<div className="flex flex-col gap-2 text-sm text-white ">
			<h1>{label}</h1>
			{flag ? (
				<select
					className="p-1 text-white border rounded bg-darkgray border-textcolor focus:outline-0"
					name=""
					id=""
				>
					{data.map((item) => (
						<option
							className={`border-0 p-0.5 bg-${`${item.color}`}`}
							key={item.id}
							value={data.lable}
						>
							{item.lable}
						</option>
					))}
				</select>
			) : (
				data.map((item) => <div key={item.id}> <ShowOptions item={item} /></div>)
			)}
		</div>
	);
};

const ShowOptions = ({ item }) => {
	const [enable, setEnable] = useState(false);
	return (
		<div
			key={item.id}
			className="flex items-start justify-start gap-2 text-sm cursor-pointer text-textcolor"
		>
			<input
				onChange={() => setEnable((prv) => !prv)}
				className="w-4 h-4 cursor-pointer"
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
				isShowSettings
					? "w-48 sticky overflow-hidden pl-7 top-0 h-screen"
					: "w-0"
			} duration-500 flex flex-col bottom-0 overflow-y-hidden bg-darkgray ml-auto`}
		>
			<div
				onClick={() => setIsShowSettings((prv) => !prv)}
				className="mt-3 ml-auto mr-3 text-2xl text-white cursor-pointer"
			>
				<IoCloseOutline />
			</div>
			<div
				className={` ${
					isShowSettings
						? "overflow-y-scroll scrollbar-thin scrollbar-corner-darkgray"
						: "overflow-y-hidden"
				} mt-3 pr-1 scrollbar-track-darkgray gap-4 pb-4 flex flex-col h-full`}
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
							flag={true}
						/>
					</>
				)}
			</div>
		</div>
	);
}

export default Settings;
