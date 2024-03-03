import { MdSchool } from "react-icons/md";
import { FaCalendarAlt, FaSearch } from "react-icons/fa";
import { PiGridNineFill } from "react-icons/pi";
import { MdContactPage } from "react-icons/md";
import { IoMail } from "react-icons/io5";
import { PiKanbanDuotone } from "react-icons/pi";
import { GrGallery } from "react-icons/gr";
import { FaTable } from "react-icons/fa";
import { FiEdit } from "react-icons/fi";
import { TbChristmasTree } from "react-icons/tb";
import { IoPieChartSharp } from "react-icons/io5";
import DropDown from "./DropDown";
import { AiFillDashboard } from "react-icons/ai";
import { FaRegCopy } from "react-icons/fa";
import { FaRegPlusSquare } from "react-icons/fa";
import { BsThreeDots } from "react-icons/bs";
import { IoDocumentOutline } from "react-icons/io5";
import { WiMoonFull } from "react-icons/wi";

import {
	LayoutOptions,
	charts,
	dashboardV,
	forms,
	levels,
	loginRegisterV1,
	loginRegisterV2,
	pages,
	search,
	tables,
	uiElements,
} from "../Assets/sideBarDatat";
import SideBarItems from "./SideBarItems";
import ShowMoreDropDown from "./ShowMoreDropDown";
import { FaRegCircle } from "react-icons/fa6";
export default function SideBar({
	isOpen,
	setIsOpen,
	tab,
	setTab,
}) {
	return (
		<div
			className={`h-screen side__bar sticky bottom-0 ${
				isOpen
					? "w-60"
					: "w-16 flex items-center justify-start flex-col"
			} duration-300 overflow-hidden pl-1 scrollbar-thin bg-darkgray text-textcolor`}
		>
			<div className="w-full flex border-opacity-20 items-center justify-start text-lg font-normal border-b border-textcolor py-2 pl-2 gap-1">
				<MdSchool
					className="cursor-pointer h-6 w-6"
					onClick={() => setIsOpen(!isOpen)}
				/>{" "}
				<span
					className={`${isOpen ? "block" : "hidden"} text-sm`}
				>
					AdminLTE 3
				</span>
			</div>
			<div
				className={
					isOpen &&
					"h-full scrollbar-thin scrollbar-track-darkgray scrollbar-thumb-bluecolor overflow-scroll pb-10"
				}
			>
				<div className="w-full flex border-opacity-20 py-3 items-center justify-start text-lg font-normal border-b border-textcolor p-2 gap-1">
					<MdSchool
						className="cursor-pointer h-6 w-6"
						onClick={() => setIsOpen(!isOpen)}
					/>{" "}
					<span
						className={`${isOpen ? "block" : "hidden"} text-sm`}
					>
						AdminLTE 3
					</span>
				</div>

				<div className="m-2 flex justify-center items-center bg-opacity-20">
					<input
						placeholder="search..."
						type="text"
						className={`rounded-l border-textcolor border duration-300 text-white bg-opacity-10 px-3 border-opacity-20 bg-textcolor w-full focus:outline-0 ${
							isOpen ? "block" : "hidden"
						} `}
					/>
					<div className="flex items-center rounded-sm justify-center border border-textcolor h-full border-opacity-30 p-1 w-8">
						<FaSearch />
					</div>
				</div>

				<DropDown
					tab={tab}
					setTab={setTab}
					isOpen={isOpen}
					setIsOpen={setIsOpen}
					data={dashboardV}
					title={"Dashbord"}
					Icon={<AiFillDashboard />}
					isColor={true}
				/>
				<div className="px-2 my-1">
					<div className="flex rounded py-0.5 hover:bg-textcolor hover:bg-opacity-10 cursor-pointer px-1 items-center  gap-1  justify-start">
						<PiGridNineFill className="cursor-pointer h-5 w-5" />
						<div
							className={`text-sm ${isOpen ? "block" : "hidden"}`}
						>
							weidges
						</div>
						<span
							className={`px-2 text-[9px] py-0.5  ml-auto bg-redcolor rounded text-white ${
								isOpen ? "block" : "hidden"
							}`}
						>
							new
						</span>
					</div>
				</div>
				<DropDown
					tab={tab}
					setTab={setTab}
					isOpen={isOpen}
					setIsOpen={setIsOpen}
					data={LayoutOptions}
					title={"Layout Options"}
					Icon={<FaRegCopy />}
				/>
				<DropDown
					tab={tab}
					setTab={setTab}
					isOpen={isOpen}
					setIsOpen={setIsOpen}
					data={charts}
					title={"Charts"}
					Icon={<IoPieChartSharp />}
				/>
				<DropDown
					tab={tab}
					setTab={setTab}
					isOpen={isOpen}
					setIsOpen={setIsOpen}
					data={uiElements}
					title={"UI Elements"}
					Icon={<TbChristmasTree />}
				/>
				<DropDown
					tab={tab}
					setTab={setTab}
					isOpen={isOpen}
					setIsOpen={setIsOpen}
					data={forms}
					title={"Forms"}
					Icon={<FiEdit />}
				/>
				<DropDown
					tab={tab}
					setTab={setTab}
					isOpen={isOpen}
					setIsOpen={setIsOpen}
					data={tables}
					title={"Tables"}
					Icon={<FaTable />}
				/>
				<div className="">
					<h1 className={isOpen ? "my-0.5 px-1" : "hidden"}>
						Example
					</h1>
					<SideBarItems
						label={"Calender"}
						Icon={FaCalendarAlt}
						isOpen={isOpen}
					/>
					<SideBarItems
						label={"Gallery"}
						Icon={GrGallery}
						isOpen={isOpen}
					/>
					<SideBarItems
						label={"Kanband Board"}
						Icon={PiKanbanDuotone}
						isOpen={isOpen}
					/>
					<DropDown
						tab={tab}
						setTab={setTab}
						isOpen={isOpen}
						setIsOpen={setIsOpen}
						data={dashboardV}
						title={"Mailbox"}
						Icon={<IoMail />}
					/>
					<DropDown
						tab={tab}
						setTab={setTab}
						isOpen={isOpen}
						setIsOpen={setIsOpen}
						data={pages}
						title={"Pages"}
						Icon={<MdContactPage />}
					/>
					<ShowMoreDropDown
						tab={tab}
						setTab={setTab}
						Icon={<FaRegPlusSquare />}
						isOpen={isOpen}
						data1={loginRegisterV1}
						data2={loginRegisterV2}
						setIsOpen={setIsOpen}
						lable={"title"}
						label={"Extras"}
						title1={"Login & Register V1"}
						title2={"Login & Register V2"}
					/>
					<DropDown
						data={search}
						isOpen={isOpen}
						setIsOpen={setIsOpen}
						Icon={<FaSearch />}
						title={"Search"}
						tab={tab}
						setTab={setTab}
					/>
					<SideBarItems
						label={"Simple Search"}
						Icon={FaRegCircle}
						isOpen={isOpen}
					/>
					<SideBarItems
						label={"Enhance"}
						Icon={FaRegCircle}
						isOpen={isOpen}
					/>
				</div>
				<div className="">
					<h1
						className={isOpen ? "my-0.5 text-sm px-1" : "hidden"}
					>
						MISCELLANEOUS
					</h1>
					<SideBarItems
						label={"Tabbed Ifram Plugin"}
						Icon={BsThreeDots}
						isOpen={isOpen}
					/>
					<SideBarItems
						label={"Document"}
						Icon={IoDocumentOutline}
						isOpen={isOpen}
					/>
				</div>
				<div className="">
					<h1
						className={isOpen ? "text-sm my-0.5 px-1" : "hidden"}
					>
						MISCELLANEOUS
					</h1>
					<SideBarItems
						label={"Leve 1"}
						Icon={WiMoonFull}
						isOpen={isOpen}
					/>
					<DropDown
						tab={tab}
						setTab={setTab}
						isOpen={isOpen}
						setIsOpen={setIsOpen}
						data={levels}
						title={"Pages"}
						Icon={<WiMoonFull />}
					/>
					<SideBarItems
						label={"Leve 1"}
						Icon={WiMoonFull}
						isOpen={isOpen}
					/>
				</div>
			</div>
		</div>
	);
}
