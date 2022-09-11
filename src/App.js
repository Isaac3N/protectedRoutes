import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import LoginPage from "./pages/LoginPage";
import SecretPage from "./pages/SecretPage";
import ProtectedRoutes from "./protectedRoutes/ProtectedRoutes";

function App() {
	return (
		<div className="App">
			<Router>
				<Routes>
					<Route element={<HomePage />} path="/" exact />
					<Route element={<LoginPage />} path="/login" />
					<Route element={<ProtectedRoutes />}>
						<Route element={<SecretPage />} path="/secret" />
					</Route>
				</Routes>
			</Router>
		</div>
	);
}

export default App;
