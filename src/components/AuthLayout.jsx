import { Navigate, Outlet, useLocation } from "react-router-dom";

export const AuthLayout = () => {
	const user = false;
  const pathname = useLocation().state?.redirectTo || "/"

	return user ? <Navigate to={pathname} replace /> : <Outlet />;
};
