import React from 'react';
import ReactDOM from 'react-dom/client';
import "./App.css";
import {AnimatePresence} from "framer-motion"
import App from "./App";

const root = ReactDOM.createRoot(
	document.getElementById("root")
);
root.render(
	<React.StrictMode>
		<AnimatePresence>
			<App />
		</AnimatePresence>
	
	</React.StrictMode>
);

