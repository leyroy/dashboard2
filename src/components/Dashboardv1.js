import { SlHandbag } from "react-icons/sl";
import {
	IoArrowForward,
	IoStatsChart,
	IoPieChartSharp,
} from "react-icons/io5";
import { FaUserPlus } from "react-icons/fa6";
import Carts from "./Carts";
import DirectChartContainer from "./DirectChartContainer";
import { TodoContainer } from "./TodoContainer";

export default function Dashboardv1() {
	return (
		<div className="px-2">
			<div className="flex items-center justify-between p">
				<h1 className="font-medium text-xl my-4">Dashboard</h1>
				<div className="text-sm text-bluecolor">
					home
					<span className="text-darkgray "> / dashbord</span>
				</div>
			</div>
			<section className=" text-center gap-5 grid md:grid-cols-4 grid-cols-2 w-full">
				<div className="relative h-auto min-h-24 ">
					<div className="peer h-auto f flex flex-col items-center md:items-start text-white absolute bg-lightblue inset-0">
						<span className="font-extrabold mx-3 py-1 text-xl mt-1">
							67
						</span>
						<span className="mx-3 text-sm">New oder</span>
						<div className="mt-auto text-sm w-full flex items-center cursor-pointer gap-1 justify-center bg-darkgray bg-opacity-10">
							More info
							<div className="p-0.5 rounded-full text-sm text-darkgray bg-white">
								<IoArrowForward />
							</div>
						</div>
					</div>
					<div className=" peer-hover:scale-105 duration-300 text-darkgray font-thin absolute -top-1 hover:scale-110 right-7">
						<SlHandbag className="w-12 h-16 opacity-20" />
					</div>
				</div>
				<div className="relative h-auto min-h-24 ">
					<div className="peer h-auto f flex flex-col items-center md:items-start text-white absolute bg-greencolor inset-0">
						<span className="font-extrabold mx-3 py-1 text-xl mt-1">
							67
						</span>
						<span className="mx-3 text-sm">New oder</span>
						<div className="mt-auto text-sm w-full flex items-center cursor-pointer gap-1 justify-center bg-darkgray bg-opacity-10">
							Bounce Rate
							<div className="p-0.5 rounded-full text-sm text-darkgray bg-white">
								<IoArrowForward />
							</div>
						</div>
					</div>
					<div className=" peer-hover:scale-105 duration-300 text-darkgray font-thin absolute -top-1 hover:scale-110 right-7">
						<IoStatsChart className="w-12 h-16 opacity-20" />
					</div>
				</div>
				<div className="relative h-auto min-h-24 ">
					<div className="peer h-auto f flex flex-col items-center md:items-start text-darkgray absolute bg-yelow inset-0">
						<span className="font-extrabold mx-3 py-1 text-xl mt-1">
							67
						</span>
						<span className="mx-3 text-sm">New oder</span>
						<div className="mt-auto text-sm w-full flex items-center cursor-pointer gap-1 justify-center bg-darkgray bg-opacity-10">
							More info
							<div className="p-0.5 rounded-full text-sm text-darkgray bg-white">
								<IoArrowForward />
							</div>
						</div>
					</div>
					<div className=" peer-hover:scale-105 duration-300 text-darkgray font-thin absolute -top-1 hover:scale-110 right-7">
						<FaUserPlus className="w-12 h-16 opacity-20" />
					</div>
				</div>
				<div className="relative h-auto min-h-24 ">
					<div className="peer h-auto f flex flex-col items-center md:items-start text-white absolute bg-lightred inset-0">
						<span className="font-extrabold mx-3 py-1 text-xl mt-1">
							67
						</span>
						<span className="mx-3 text-sm">Unique Visitors</span>
						<div className="mt-auto text-sm w-full flex items-center cursor-pointer gap-1 justify-center bg-darkgray bg-opacity-10">
							More info
							<div className="p-0.5 rounded-full text-sm text-darkgray bg-white">
								<IoArrowForward />
							</div>
						</div>
					</div>
					<div className=" peer-hover:scale-105 duration-300 text-darkgray font-thin absolute -top-1 hover:scale-110 rotate-3 right-7">
						<IoPieChartSharp className="w-12 h-16 opacity-20" />
					</div>
				</div>
			</section>
			<section className="flex flex-col md:flex-row gap-4 mt-4">
				<div className=" md:w-3/5 flex flex-col gap-4 w-full">
					<Carts />
					<DirectChartContainer />
					<TodoContainer />
				</div>

				<div className=" md:w-2/5 flex flex-col gap-4 w-full">
					<DirectChartContainer />

					<TodoContainer />
					<Carts />
					<DirectChartContainer />
				</div>
			</section>
		</div>
	);
}
