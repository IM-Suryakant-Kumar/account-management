import {
	createBrowserRouter,
	createRoutesFromElements,
	Route,
	RouterProvider,
} from "react-router-dom";
import { Layout, HostLayout, AuthLayout } from "./components";
import { Home, Login, Signup, NotFound } from "./pages";
import "./App.css";

function App() {
	const router = createBrowserRouter(
		createRoutesFromElements(
			<Route element={<Layout />}>
				<Route element={<HostLayout />}>
					<Route path="/" element={<Home />} />
				</Route>
				<Route element={<AuthLayout />}>
					<Route path="login" element={<Login />} />
					<Route path="signup" element={<Signup />} />
				</Route>
				<Route path="*" element={<NotFound />} />
			</Route>
		)
	);

	return <RouterProvider router={router} />;
}

export default App;
