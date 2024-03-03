import { SlHandbag } from "react-icons/sl";
import {
	IoArrowForward,
	IoStatsChart,
	IoPieChartSharp,
} from "react-icons/io5";
import { FaUserPlus } from "react-icons/fa6";
import Carts, { LineChart } from "./Carts";
import DirectChartContainer from "./DirectChartContainer";
import { TodoContainer } from "./TodoContainer";
import Visitors from "./Visitors";

export default function Dashboardv1() {
	return (
		<div className="px-2">
			<div className="flex items-center justify-between p">
				<h1 className="my-4 text-xl font-medium">Dashboard</h1>
				<div className="text-sm text-bluecolor">
					home
					<span className="text-darkgray "> / dashbord</span>
				</div>
			</div>
			<section className="grid w-full grid-cols-2 gap-5 text-center  md:grid-cols-4">
				<div className="relative h-auto min-h-24 ">
					<div className="absolute inset-0 flex flex-col items-center h-auto text-white peer f md:items-start bg-lightblue">
						<span className="py-1 mx-3 mt-1 text-xl font-extrabold">
							67
						</span>
						<span className="mx-3 text-sm">New oder</span>
						<div className="flex items-center justify-center w-full gap-1 mt-auto text-sm cursor-pointer bg-darkgray bg-opacity-10">
							More info
							<div className="p-0.5 rounded-full text-sm text-darkgray bg-white">
								<IoArrowForward />
							</div>
						</div>
					</div>
					<div className="absolute font-thin duration-300  peer-hover:scale-105 text-darkgray -top-1 hover:scale-110 right-7">
						<SlHandbag className="w-12 h-16 opacity-20" />
					</div>
				</div>
				<div className="relative h-auto min-h-24 ">
					<div className="absolute inset-0 flex flex-col items-center h-auto text-white peer f md:items-start bg-greencolor">
						<span className="py-1 mx-3 mt-1 text-xl font-extrabold">
							67
						</span>
						<span className="mx-3 text-sm">New oder</span>
						<div className="flex items-center justify-center w-full gap-1 mt-auto text-sm cursor-pointer bg-darkgray bg-opacity-10">
							Bounce Rate
							<div className="p-0.5 rounded-full text-sm text-darkgray bg-white">
								<IoArrowForward />
							</div>
						</div>
					</div>
					<div className="absolute font-thin duration-300  peer-hover:scale-105 text-darkgray -top-1 hover:scale-110 right-7">
						<IoStatsChart className="w-12 h-16 opacity-20" />
					</div>
				</div>
				<div className="relative h-auto min-h-24 ">
					<div className="absolute inset-0 flex flex-col items-center h-auto peer f md:items-start text-darkgray bg-yelow">
						<span className="py-1 mx-3 mt-1 text-xl font-extrabold">
							67
						</span>
						<span className="mx-3 text-sm">New oder</span>
						<div className="flex items-center justify-center w-full gap-1 mt-auto text-sm cursor-pointer bg-darkgray bg-opacity-10">
							More info
							<div className="p-0.5 rounded-full text-sm text-darkgray bg-white">
								<IoArrowForward />
							</div>
						</div>
					</div>
					<div className="absolute font-thin duration-300  peer-hover:scale-105 text-darkgray -top-1 hover:scale-110 right-7">
						<FaUserPlus className="w-12 h-16 opacity-20" />
					</div>
				</div>
				<div className="relative h-auto min-h-24 ">
					<div className="absolute inset-0 flex flex-col items-center h-auto text-white peer f md:items-start bg-lightred">
						<span className="py-1 mx-3 mt-1 text-xl font-extrabold">
							67
						</span>
						<span className="mx-3 text-sm">Unique Visitors</span>
						<div className="flex items-center justify-center w-full gap-1 mt-auto text-sm cursor-pointer bg-darkgray bg-opacity-10">
							More info
							<div className="p-0.5 rounded-full text-sm text-darkgray bg-white">
								<IoArrowForward />
							</div>
						</div>
					</div>
					<div className="absolute font-thin duration-300  peer-hover:scale-105 text-darkgray -top-1 hover:scale-110 rotate-3 right-7">
						<IoPieChartSharp className="w-12 h-16 opacity-20" />
					</div>
				</div>
			</section>
			<section className="flex flex-col gap-4 mt-4 md:flex-row">
				<div className="flex flex-col w-full gap-4  md:w-3/5">
					<Carts />
					<DirectChartContainer />
					<TodoContainer />
				</div>

				<div className="flex flex-col w-full gap-4  md:w-2/5">
					<Visitors />
					<LineChart />
					<DirectChartContainer />

					<TodoContainer />
					<Carts />
					<DirectChartContainer />
				</div>
			</section>
		</div>
	);
}
