import Dashboard from "./components/Dashboard";
import {
	BrowserRouter as Router,
	Routes,
	Route,
} from "react-router-dom";

function App() {
	return (
		
		<Router basename="/dashboard2">
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
