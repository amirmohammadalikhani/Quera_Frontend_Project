import Login from "@/components/login";

export default function EmployerLogin() {
	const EmployerLoginProps = [
		{
			loginStatusPage: "login",
			userStatus: "Employer",
			buttonText: "Sign in",
			questionText: "Don't have an account?",
			linkText: "Sign up in Quera",
		},
	];

	return (
		<main className="bg-blue-100 pt-14 min-h-screen">
			<Login {...EmployerLoginProps[0]} />
		</main>
	);
}
