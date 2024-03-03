import React, { useState } from "react";
import { Line, Doughnut } from "react-chartjs-2";
import { Chart as ChartJS } from "chart.js/auto";
import { IoPieChartSharp } from "react-icons/io5";
import { users, users1 } from "../Assets/chartData";

export default function Carts() {
	const [isOpen, setIsOpen] = useState(true);
	const [data, setData] = useState({
		labels: users.map((data) => data.month),
		labels: users1.map((data) => data.month),
		datasets: [
			{
				data: users.map((data) => data.rate),
				data: users1.map((data) => data.rate),
				fill: true,
				tension: 0.1,
			},
		],
	});
	return (
		<div className="flex flex-col shadow shadow-darkgray">
			<div className="w-full mb-auto flex items-center justify-between px-2 py-1 border-b border-b-darkgray">
				<div className=" flex items-center justify-center gap-1">
					<IoPieChartSharp />
					<p className="text-sm py-0.5 rounded-sm">user</p>
				</div>
				<div className="flex text-sm cursor-pointer items-center justify-center gap-1">
					<span
						onClick={() => setIsOpen((prev) => !prev)}
						className={`rounded px-2 py-0.5 ${
							isOpen && "bg-bluecolor"
						}`}
					>
						Area
					</span>
					<span
						onClick={() => setIsOpen((prev) => !prev)}
						className={`rounded px-2 py-0.5 ${
							!isOpen && "bg-bluecolor"
						}`}
					>
						Area
					</span>
				</div>
			</div>
			<div className="p-2 flex items-center justify-center h-60">
				{isOpen ? (
					<div className="w-full flex items-center justify-center h-full">
						<Line
							className=" flex-1 "
							data={data}
							options={{
								lineTension: 0.3,
							}}
						/>
					</div>
				) : (
					<div className="w-full">
						<Doughnut
							data={data}
							options={{
								maintainAspectRatio: false,
								aspectRatio: 2,
							}}
						/>
					</div>
				)}
			</div>
		</div>
	);
}

export const LineChart = () => {
	const [isOpen, setIsOpen] = useState();
	const [data, setData] = useState({
		labels: users.map((data) => data.month),
		labels: users1.map((data) => data.month),
		datasets: [
			{
				data: users.map((data) => data.rate),
				data: users1.map((data) => data.rate),
				fill: true,
				tension: 0.1,
			},
		],
	});
	return (
		<div className="flex flex-col shadow shadow-darkgray">
			<div className="w-full mb-auto flex items-center justify-between px-2 py-1 border-b border-b-darkgray">
				<div className=" flex items-center justify-center gap-1">
					<IoPieChartSharp />
					<p className="text-sm py-0.5 rounded-sm">
						Sales Graph
					</p>
				</div>
				<div>
					<span
						onClick={() => setIsOpen(!isOpen)}
						className="text-2xl font-medium cursor-pointer "
					>
						{isOpen ? "-" : "+"}
					</span>
					<span></span>
				</div>
			</div>
			<div
				className={` duration-300 transition-shadow overflow-y-scroll flex-col flex items-center justify-center ${
					isOpen ? "h-52 p-2 duration-500" : "h-0  duration-500"
				}`}
			>
				<Line
					data={data}
					type="line"
				/>
			</div>
		</div>
	);
};
