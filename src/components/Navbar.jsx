import { Container, Navbar as BNavbar } from "react-bootstrap";

export const Navbar = () => {
	return (
		<BNavbar className="bg-body-tertiary bs-info">
			<Container>
				<BNavbar.Brand href="#home">AcM</BNavbar.Brand>
				<BNavbar.Toggle />
				<BNavbar.Collapse className="justify-content-end">
					<BNavbar.Text>
						Signed in as: <a href="#login">Mark Otto</a>
					</BNavbar.Text>
				</BNavbar.Collapse>
			</Container>
		</BNavbar>
	);
};
