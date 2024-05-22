import Login from "@/components/login";

export default function EmployerRegister() {
	const UserRegisterProps = [
		{
			loginStatusPage: "register",
			userStatus: "Employer",
			buttonText: "Sign up",
			questionText: "Do you have an account?",
			linkText: "Sign in to Quera",
		},
	];

	return (
		<main className="bg-blue-100 pt-14 min-h-screen">
			<Login {...UserRegisterProps[0]}/>
		</main>
	);
}
