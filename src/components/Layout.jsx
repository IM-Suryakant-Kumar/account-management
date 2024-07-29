import { Fragment } from "react";
import { Outlet } from "react-router-dom";

export const Layout = () => {
	return (
		<Fragment>
			<Outlet />
		</Fragment>
	);
};
