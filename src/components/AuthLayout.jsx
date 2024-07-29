import { Navigate, Outlet } from "react-router-dom";

export const AuthLayout = () => {
	const user = true;
	return user ? <Navigate to="/" replace /> : <Outlet />;
};
