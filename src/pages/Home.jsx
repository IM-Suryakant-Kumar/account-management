import { Button, Stack } from "react-bootstrap";

export const Home = () => {
	const handleModal = () => {};

	return (
		<main>
			<Stack gap={4} className="mt">
				<h2 className="title profile-heading">My Profile</h2>
				<Stack gap={3} as="ul" className="list-cont">
					<li className="lite-item">
						<span className="h6">Name:</span> Mark Otto
					</li>
					<li className="lite-item">
						<span className="h6">Email:</span> mark@mark.com
					</li>
					<li className="lite-item">
						<span className="h6">Gender:</span> N/A
					</li>
					<li className="lite-item">
						<span className="h6">Profession</span> Student
					</li>
					<li className="lite-item">
						<span className="h6">Favorite color:</span> N/A
					</li>
				</Stack>
				<Button onClick={handleModal} className="edit-button">
					Edit Account
				</Button>
			</Stack>
		</main>
	);
};
