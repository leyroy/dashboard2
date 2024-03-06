import React, { useEffect, useState } from "react";
import SideBar from "./SideBar";
import DashHome from "./DashHome";
import { useLocation } from "react-router-dom";
import { Modal } from "./Modal";

function Dashboard() {
	const [isOpen, setIsOpen] = useState(true);
	const [tab, setTab] = useState();
	const location = useLocation();
	useEffect(() => {
		const params = new URLSearchParams(location.search);
		const url = params.get("tab");
		url && setTab(url);
	}, [location.search]);

	return (
		<div className="flex relative h-screen overflow-hidden">
			{isOpen && <Modal setIsOpen={setIsOpen} />}

			<SideBar
				tab={tab}
				setTab={setTab}
				isOpen={isOpen}
				setIsOpen={setIsOpen}
			/>
			<DashHome
				tab={tab}
				setTab={setTab}
				setIsOpen={setIsOpen}
				isOpen={isOpen}
			/>
		</div>
	);
}

export default Dashboard;
