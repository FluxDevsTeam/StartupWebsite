import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

import { ContextProvider } from "./Services/ContextProvider";

import AppLayout from "./Services/UI/AppLayout";
import Home from "./Pages/Home";
import About from "./Pages/About";
import Projects from "./Pages/Projects";
import Service from "./Pages/Service";

function App() {
	return (
		<>
			<ContextProvider>
				<BrowserRouter>
					<Routes>
						<Route element={<AppLayout />}>
							<Route
								index
								element={<Navigate to='/home' />}
							/>
							<Route
								path='/home'
								element={<Home />}
							/>
							<Route
								path='/about'
								element={<About />}
							/>
							<Route
								path='/projects'
								element={<Projects />}
							/>
							<Route
								path='/services'
								element={<Service />}
							/>
						</Route>
					</Routes>
				</BrowserRouter>
			</ContextProvider>
		</>
	);
}

export default App;
