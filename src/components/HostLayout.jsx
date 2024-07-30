import { Navigate, Outlet, useLocation } from "react-router-dom";
import { Navbar } from "./Navbar";

export const HostLayout = () => {
	const user = true;
	const pathname = useLocation().pathname;

	return user ? (
		<>
			<Navbar />
			<Outlet />
		</>
	) : (
		<Navigate
			to="/login"
			state={{ message: "You have to login first!", redirectTo: pathname }}
			replace
		/>
	);
};
