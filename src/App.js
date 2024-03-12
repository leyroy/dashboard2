import Dashboard from "./components/Dashboard";
import {
	BrowserRouter as Router,
	Routes,
	Route,
	BrowserRouter,
} from "react-router-dom";

function App() {
	return (
		<BrowserRouter basename="/dashboard2">
		<Router>
			<Routes>
				<Route
					path="/"
					element={<Dashboard />}
				/>
			</Routes>
		</Router>
		</BrowserRouter>
	);
}

export default App;
