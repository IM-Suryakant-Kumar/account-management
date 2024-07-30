import { Button, Stack } from "react-bootstrap";
import PropTypes from "prop-types";

export const EditModal = ({ setShowModal }) => {
	const handleSubmit = (e) => {
		e.preventDefault();
		const formData = new FormData(e.currentTarget);
		console.log(Object.fromEntries(formData));
	};

	return (
		<Stack className="modal-cont">
			<form className="edit-form" onSubmit={handleSubmit}>
				<button className="close-btn" onClick={() => setShowModal(false)}>
					X
				</button>
				<label className="label">
					Full Name: <input type="text" name="name" defaultValue="Mark Otto" />
				</label>
				<label className="label">
					Email: <input type="email" name="email" defaultValue="mark@otto.com" />
				</label>
				<label className="label">
					Gender: <input type="text" name="gender" defaultValue="male" />
				</label>
				<label className="label">
					Profession: <input type="text" name="name" defaultValue="Student" />
				</label>
				<label className="label">
					Favorite color: <input type="text" name="color" defaultValue="orange" />
				</label>
				<Button type="submit" className="modal-btn">
					Save
				</Button>
			</form>
		</Stack>
	);
};

EditModal.propTypes = {
	setShowModal: PropTypes.func,
};
