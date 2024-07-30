import { Button, Stack } from "react-bootstrap";
import { EditModal } from "../components";
import { useState } from "react";

export const Home = () => {
	const [showModal, setShowModal] = useState(false);

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
				<Button onClick={() => setShowModal(true)} className="edit-button">
					Edit Account
				</Button>
				{/* edit modal */}
				{showModal && <EditModal setShowModal={setShowModal} />}
			</Stack>
		</main>
	);
};
