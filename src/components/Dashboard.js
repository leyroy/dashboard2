import React, { useState } from "react";
import SideBar from "./SideBar";
import DashHome from "./DashHome";

function Dashboard() {
	const [isOpen, setIsOpen] = useState(true);

	return (
		<div className="flex">
			<SideBar
				isOpen={isOpen}
				setIsOpen={setIsOpen}
			/>
			<DashHome
				setIsOpen={setIsOpen}
				isOpen={isOpen}
			/>
		</div>
	);
}

export default Dashboard;
