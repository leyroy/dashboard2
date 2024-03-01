import { MdSchool } from "react-icons/md";
import { FaSearch } from "react-icons/fa";
import { PiGridNineFill } from "react-icons/pi";
import { FiEdit } from "react-icons/fi";
import { TbChristmasTree } from "react-icons/tb";
import { IoPieChartSharp } from "react-icons/io5";
import DropDown from "./DropDown";
import { AiFillDashboard } from "react-icons/ai";
import { FaRegCopy } from "react-icons/fa";
import SideBarItems from "./SideBarItems";
import {
	LayoutOptions,
	charts,
	dashboardV,
	forms,
	uiElements,
} from "../Assets/sideBarDatat";
export default function SideBar({ isOpen, setIsOpen }) {
	return (
		<div
			className={`h-screen ${
				isOpen
					? "w-60"
					: "w-16 flex items-center justify-start flex-col"
			} duration-300 overflow-hidden pl-1 scrollbar-thin bg-darkgray text-textcolor`}
		>
			<div className="w-full flex border-opacity-20 items-center justify-start text-lg font-normal border-b border-textcolor pl-2 gap-1">
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
					isOpen={isOpen}
					setIsOpen={setIsOpen}
					data={LayoutOptions}
					title={"Layout Options"}
					Icon={<FaRegCopy />}
				/>
				<DropDown
					isOpen={isOpen}
					setIsOpen={setIsOpen}
					data={charts}
					title={"Charts"}
					Icon={<IoPieChartSharp />}
				/>
				<DropDown
					isOpen={isOpen}
					setIsOpen={setIsOpen}
					data={uiElements}
					title={"UI Elements"}
					Icon={<TbChristmasTree />}
				/>
				<DropDown
					isOpen={isOpen}
					setIsOpen={setIsOpen}
					data={forms}
					title={"Forms"}
					Icon={<FiEdit />}
				/>
				<SideBarItems
					isOpen={isOpen}
					isDropDown={true}
					setIsOpen={setIsOpen}
					data={dashboardV}
					title={"Dashbord"}
				/>

				<DropDown
					isOpen={isOpen}
					setIsOpen={setIsOpen}
					data={dashboardV}
					title={"Dashbord"}
				/>
			</div>
		</div>
	);
}
