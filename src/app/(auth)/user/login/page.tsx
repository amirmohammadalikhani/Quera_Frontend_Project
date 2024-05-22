import Login from "@/components/login";

export default function UserLogin() {
	const UserLoginProps = [
		{
			loginStatusPage: "login",
			userStatus: "Developers",
			buttonText: "Sign in",
			questionText: "Don't have an account?",
			linkText: "Sign up in Quera",
		},
	];

	return (
		<main className="bg-blue-100 pt-14 min-h-screen">
			<Login {...UserLoginProps[0]}/>
		</main>
	);
}