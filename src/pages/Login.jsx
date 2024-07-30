import { Button, Form } from "react-bootstrap";

export const Login = () => {
	const handleSubmit = (e) => {
		e.preventDefault();
		const formData = new FormData(e.currentTarget);

		console.log(Object.fromEntries(formData));
	};

	return (
		<main className="main-login">
			<Form className="login" onSubmit={handleSubmit}>
				<h1 className="title">SignIn</h1>
				<Form.Group className="mb-3" controlId="formPlaintextEmail">
					<Form.Control
						type="email"
						name="email"
						placeholder="Email:"
						required
						min="3"
					/>
				</Form.Group>

				<Form.Group className="mb-3" controlId="formPlaintextPassword">
					<Form.Control type="password" name="password" placeholder="Password:" required min="3" />
				</Form.Group>
				<Button type="submit" variant="primary" className="primary">
					Login
				</Button>
			</Form>
		</main>
	);
};
