"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import queraIcon from "../../public/icon/logo-quera-login.svg";
import googleIcon from "../../public/icon/google.svg";
import githubIcon from "../../public/icon/github.svg";
import linkedinIcon from "../../public/icon/linkedin.svg";
import { usePathname } from "next/navigation";

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
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const [showPassword, setShowPassword] = useState(false);
	const pathname = usePathname();
	const userType: string = userStatus === "Developers" ? "user" : "employer";

	const passwordHiddenHandler = () => {
		setShowPassword(!showPassword);
	};

	const submitHandler = (event: React.FormEvent<HTMLFormElement>) => {
		event.preventDefault();
	};

	return (
		<>
			<div className="flex mx-auto flex-col min-w-[305px] max-w-[305px] h-[80vh] px-2">
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
					<div className="bg-white w-full h-[370px] px-5 pt-4 pb-10 shadow-[0_0_1px_1px_rgba(0,0,0,0.1)]">
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
								className="text-[10px] mb-2 h-8 outline-none border-gray-400 border-[1px] rounded-sm  box-border pl-2 focus:bg-[rgba(0,0,255,0.03)] focus:border-blue-600"
								onChange={(event) =>
									setEmail(event.target.value)
								}
							/>
							<input
								type={showPassword ? "text" : "password"}
								placeholder="Password"
								value={password}
								className="text-[10px] mb-2 h-8 outline-none border-gray-400 border-[1px] rounded-sm  box-border pl-2 focus:bg-[rgba(0,0,255,0.03)] focus:border-blue-600"
								onChange={(event) =>
									setPassword(event.target.value)
								}
							/>
							<div className="flex justify-between w-full h-fit">
								<div className="group flex items-center mb-2 cursor-pointer">
									<input
										type="checkbox"
										className="mr-1 cursor-pointer"
										onChange={passwordHiddenHandler}
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
							<button className="text-xs bg-blue-600 mt-2 w-full h-8 text-white rounded-[4px] hover:bg-blue-700">
								{buttonText}
							</button>
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
									alt="google icon"
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
									alt="google icon"
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
