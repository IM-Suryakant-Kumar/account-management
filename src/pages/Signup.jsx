import { Button, Form } from "react-bootstrap";

export const Signup = () => {
	const handleSubmit = (e) => {
		e.preventDefault();
		const formData = new FormData(e.currentTarget);

		console.log(Object.fromEntries(formData));
	};

	return (
		<main className="main-login">
			<Form className="login" onSubmit={handleSubmit}>
				<h1 className="title">SignUp</h1>
				<Form.Group className="mb-3" controlId="formPlaintextEmail">
					<Form.Control
						type="text"
						name="name"
						placeholder="Full Name :"
						required
						min="3"
					/>
				</Form.Group>
				<Form.Group className="mb-3" controlId="formPlaintextEmail">
					<Form.Control
						type="email"
						name="email"
						placeholder="Email :"
						required
						min="3"
					/>
				</Form.Group>

				<Form.Group className="mb-3" controlId="formPlaintextPassword">
					<Form.Control type="password" name="password" placeholder="Password :" required min="3" />
				</Form.Group>
				<Button type="submit" variant="primary" className="primary">
					Signup
				</Button>
			</Form>
		</main>
	);
};
