import Dashboard from "./components/Dashboard";
import {
	BrowserRouter as Router,
	Routes,
	Route,
	BrowserRouter,
} from "react-router-dom";

function App() {
	return (
		
		<Router basename="/dashboard">
			<Routes>
				<Route
					path="/"
					element={<Dashboard />}
				/>
			</Routes>
		</Router>
	);
}
export default App;
