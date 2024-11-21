"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import queraIcon from "../../public/icon/logo-quera-login.svg";
import googleIcon from "../../public/icon/google.svg";
import githubIcon from "../../public/icon/github.svg";
import linkedinIcon from "../../public/icon/linkedin.svg";
import { usePathname, useRouter } from "next/navigation";

export default function Login({
	loginStatusPage,
	userStatus,
	buttonText,
	questionText,
	linkText,
}: {
	loginStatusPage: string;
	userStatus: string;
	buttonText: string;
	questionText: string;
	linkText: string;
}) {
	const [id, setId] = useState<string>("1");
	const [email, setEmail] = useState<string>("");
	const [password, setPassword] = useState<string>("");
	const [isLogin, setIsLogin] = useState(false);

	const [users, setUsers] = useState<UserInfo[]>([]);
	const [showPassword, setShowPassword] = useState(false);
	const [validEmail, setValidEmail] = useState<boolean | null>(false);
	const [validPassword, setValidPassword] = useState<boolean | null>(false);
	const [submitCondition, setSubmitCondition] = useState<boolean | null>(
		false
	);
	const [
		showErrorMessageForSameEmailLogin,
		setShowErrorMessageForSameEmailLogin,
	] = useState<boolean>(false);
	const [
		showErrorMessageForIncorrectEmailOrPassword,
		setShowErrorMessageForIncorrectEmailOrPassword,
	] = useState<boolean>(false);

	const [loading, setLoading] = useState<boolean>(false);
	const [error, setError] = useState<string | null>(null);

	const pathname = usePathname();
	const router = useRouter();

	const userType: string = userStatus === "Developers" ? "user" : "employer";

	const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
	const passwordRegex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}$/;

	interface UserInfo {
		id: string;
		email: string;
		password: string;
		isLogin: boolean;
	}

	useEffect(() => {
		const componentDidMountFetch = async () => {
			try {
				await fetch(
					`https://quera-c7083-default-rtdb.firebaseio.com/users/${userStatus}.json`
				)
					.then((response) => response.json())
					.then((users) => setUsers(users));
				if (users !== null) {
					console.log("Ok");
					setId((users.length + 1).toString());
					console.log(users);
				}
			} catch (error) {
				if (error instanceof Error) {
					setError(error.message);
				} else {
					setError("An unknown error occurred!");
				}
			} finally {
				setLoading(false);
			}
		};
		componentDidMountFetch();
	}, []);

	useEffect(() => {
		setValidEmail(emailRegex.test(email));
		setSubmitCondition(validEmail && validPassword);
		if (loginStatusPage === "register") {
			for (const user in users) {
				if (users[user].email === email) {
					setShowErrorMessageForSameEmailLogin(true);
					break;
				} else setShowErrorMessageForSameEmailLogin(false);
			}
		}
	}, [email]);

	useEffect(() => {
		setValidPassword(passwordRegex.test(password));
		setSubmitCondition(validEmail && validPassword);
	}, [password]);

	const submitHandler = (event: React.FormEvent<HTMLFormElement>) => {
		event.preventDefault();
		setLoading(true);
		if (loginStatusPage === "login" && submitCondition) {
			for (const user in users) {
				if (
					users[user].email === email &&
					users[user].password === password
				) {
					users[user].isLogin = true;
					setIsLogin(true);
					setShowErrorMessageForIncorrectEmailOrPassword(false);
					router.push(`/dashboard/${userType}/${id}`);
					break;
				}
			}
			isLogin
				? setShowErrorMessageForIncorrectEmailOrPassword(false)
				: setShowErrorMessageForIncorrectEmailOrPassword(true);
		} else if (
			loginStatusPage === "register" &&
			submitCondition &&
			!showErrorMessageForSameEmailLogin
		) {
			const registerFetch = async () => {
				try {
					const response = await fetch(
						`https://quera-c7083-default-rtdb.firebaseio.com/users/${userStatus}.json`,
						{
							method: "POST",
							body: JSON.stringify({
								id,
								email,
								password,
								isLogin,
							}),
						}
					);
					if (!response.ok) {
						throw new Error("Network response was not ok!");
					}
					setIsLogin(true);
					router.push(`/dashboard/${userType}/${id}`);
				} catch (error) {
					if (error instanceof Error) {
						setError(error.message);
					} else {
						setError("An unknown error occurred!");
					}
				} finally {
					setLoading(false);
				}
			};
			registerFetch();
		}
	};

	return (
		<>
			<div className="flex mx-auto flex-col w-[305px] h-[80vh] px-2">
				<div className="flex justify-center items-center mb-7">
					<Image
						src={queraIcon}
						alt="quera logo"
						width={120}
						height={120}
					/>
				</div>
				<div>
					<div className="flex justify-around">
						{pathname === `/user/${loginStatusPage}` ? (
							<Link
								href={`/user/${loginStatusPage}`}
								className="flex justify-center items-center p-2 text-[14px] w-full bg-white shadow-[0_-1px_0_1px_rgba(0,0,0,0.1)]"
							>
								Developers
							</Link>
						) : (
							<Link
								href={`/user/${loginStatusPage}`}
								className="flex justify-center items-center p-2 text-[14px] w-full"
							>
								Developers
							</Link>
						)}
						{pathname === `/employer/${loginStatusPage}` ? (
							<Link
								href={`/employer/${loginStatusPage}`}
								className="flex justify-center items-center p-2 text-[14px] w-full bg-white shadow-[0_-1px_0_1px_rgba(0,0,0,0.1)]"
							>
								Employer
							</Link>
						) : (
							<Link
								href={`/employer/${loginStatusPage}`}
								className="flex justify-center items-center p-2 text-[14px] w-full"
							>
								Employer
							</Link>
						)}
					</div>
					<div className="bg-white w-full min-h-[370px] px-5 pt-4 pb-10 shadow-[0_0_1px_1px_rgba(0,0,0,0.1)]">
						<div className="text-xs mb-3">
							{buttonText}{" "}
							<span className="text-blue-600">{userStatus}</span>{" "}
							Section
						</div>
						<form
							action="submit"
							className="flex flex-col"
							onSubmit={(event) => submitHandler(event)}
						>
							<input
								type="email"
								placeholder="Email"
								value={email}
								required
								className={`text-[10px] mb-2 h-8 outline-none border-gray-400 border-[1px] rounded-sm  box-border px-2 focus:bg-[rgba(0,0,255,0.03)] focus:border-blue-600 ${
									(validEmail === null && email) ||
									showErrorMessageForSameEmailLogin
										? "border-red-600 bg-red-50"
										: ""
								} ${
									validEmail
										? "border-green-600 bg-green-50"
										: ""
								}`}
								onChange={(event) =>
									setEmail(event.target.value)
								}
								onBlur={() =>
									!validEmail ? setValidEmail(null) : true
								}
							/>
							{validEmail === null && email ? (
								<div className="flex justify-center items-center w-full h-6 bg-red-200 rounded-[4px] border-[2px] border-red-400 mb-2">
									<p className="px-2 py-1 text-xs text-red-600">
										Please enter valid email
									</p>
								</div>
							) : (
								<></>
							)}
							{validEmail && showErrorMessageForSameEmailLogin ? (
								<div className="flex justify-center items-center w-full h-6 bg-red-200 rounded-[4px] border-[2px] border-red-400 mb-2">
									<p className="px-2 py-1 text-xs text-red-600">
										This email has already been used
									</p>
								</div>
							) : (
								<></>
							)}
							<input
								type={showPassword ? "text" : "password"}
								placeholder="Password"
								value={password}
								required
								className={`text-[10px] mb-2 h-8 outline-none border-gray-400 border-[1px] rounded-sm  box-border px-2 focus:bg-[rgba(0,0,255,0.03)] focus:border-blue-600 ${
									validPassword === null && password
										? "border-red-600 bg-red-50"
										: ""
								} ${
									validPassword
										? "border-green-600 bg-green-50"
										: ""
								}`}
								onChange={(event) =>
									setPassword(event.target.value)
								}
								onBlur={() =>
									!validPassword
										? setValidPassword(null)
										: true
								}
							/>
							{validPassword === null && password ? (
								<>
									<div className="flex justify-center items-center w-full h-6 bg-red-200 rounded-[4px] border-[2px] border-red-400 mb-2">
										<p className="px-2 py-1 text-xs text-red-600">
											Please enter valid password
										</p>
									</div>
									<div className="flex justify-center items-center w-full h-fit bg-yellow-200 rounded-[4px] border-[2px] border-yellow-400 mb-2">
										<p className="px-2 py-1 text-xs text-yellow-600">
											* Passwords must have at least 8
											characters and contain each of the
											following: uppercase letters,
											lowercase letters and numbers.
										</p>
									</div>
								</>
							) : (
								<></>
							)}
							<div className="flex justify-between w-full h-fit">
								<div className="group flex items-center mb-2 cursor-pointer">
									<input
										type="checkbox"
										className="mr-1 cursor-pointer"
										onChange={() =>
											setShowPassword(!showPassword)
										}
									/>
									<div className="text-[11px]">
										show password
									</div>
								</div>
								{pathname === "/user/login" ||
								pathname === "/employer/login" ? (
									<Link
										href=""
										className="text-[10px] text-blue-600 hover:text-blue-800"
									>
										Forget Password?
									</Link>
								) : (
									<></>
								)}
							</div>
							{loginStatusPage === "register" &&
							(!submitCondition ||
								showErrorMessageForSameEmailLogin) ? (
								<button className="text-xs bg-blue-600 mt-2 w-full h-8 text-white rounded-[4px] opacity-50">
									{buttonText}
								</button>
							) : (
								<button className="text-xs bg-blue-600 mt-2 w-full h-8 text-white rounded-[4px] hover:bg-blue-700">
									{buttonText}
								</button>
							)}
							{showErrorMessageForIncorrectEmailOrPassword ? (
								<div className="flex justify-center items-center w-full h-8 bg-red-200 rounded-[4px] border-[2px] border-red-400 mt-3">
									<p className="px-2 py-1 text-xs text-red-600">
										Your email or password is incorrect
									</p>
								</div>
							) : (
								<></>
							)}
							<div className="mb-2 mt-1">
								<span className="text-[9px] mr-1">
									{questionText}
								</span>
								<Link
									href={`/${userType}/${
										loginStatusPage === "login"
											? "register"
											: "login"
									}`}
									className="text-[9px] text-blue-600 hover:text-blue-800"
								>
									{linkText}
								</Link>
							</div>
						</form>
						<div className="flex flex-col">
							<button className="group flex items-center border-[2px] border-gray-300 text-xs w-full h-9 rounded-[4px] mb-[6px] px-4 hover:border-gray-400">
								<Image
									src={googleIcon}
									alt="google icon"
									width={22}
									height={22}
								/>
								<span className="w-full text-center text-gray-600 group-hover:text-black">
									{buttonText} with Google
								</span>
							</button>
							<button className="group flex items-center border-[2px] border-gray-300 text-xs w-full h-9 rounded-[4px] mb-[6px] px-4 hover:border-gray-400">
								<Image
									src={githubIcon}
									alt="github icon"
									width={22}
									height={22}
								/>
								<span className="w-full text-center text-gray-600 group-hover:text-black">
									{buttonText} with Github
								</span>
							</button>
							<button className="group flex items-center border-[2px] border-gray-300 text-xs w-full h-9 rounded-[4px] mb-[6px] px-4 hover:border-gray-400">
								<Image
									src={linkedinIcon}
									alt="linkedin icon"
									width={22}
									height={22}
								/>
								<span className="w-full text-center text-gray-600 group-hover:text-black">
									{buttonText} with LinkedIn
								</span>
							</button>
						</div>
					</div>
				</div>
			</div>
		</>
	);
}
