"use client";

import Link from "next/link";
import Image from "next/image";
import queraIcon from "../../public/icon/logo-quera-header.svg";
import { useState } from "react";

export default function Header() {
	const [isOpenMenuBar, setIsOpenMenuBar] = useState(false);

	return (
		<>
			<header className="sticky top-0 h-12 z-50 flex justify-between items-center w-full bg-white shadow-[1px_1px_1px_rgba(0,0,0,0.2)]">
				<div className="max-md:hidden flex justify-center items-center">
					<div className="px-2">
						<Image
							src={queraIcon}
							alt="quera logo"
							width={120}
							height={120}
						/>
					</div>
					<nav className="w-fit h-fit">
						<ul className="flex justify-center items-center">
							<li>
								<Link
									href="/classes"
									className="text-[11px] px-[5px] py-2 text-[rgba(0,0,0,0.7)] hover:text-black"
								>
									Classes
								</Link>
							</li>
							<li>
								<Link
									href="/college"
									className="text-[11px] px-[5px] py-2 text-[rgba(0,0,0,0.7)] hover:text-black"
								>
									College
								</Link>
							</li>
							<li>
								<Link
									href="/questions"
									className="text-[11px] px-[5px] py-2 text-[rgba(0,0,0,0.7)] hover:text-black"
								>
									Questions Bank
								</Link>
							</li>
							<li>
								<Link
									href="/contest"
									className="text-[11px] px-[5px] py-2 text-[rgba(0,0,0,0.7)] hover:text-black"
								>
									Contests
								</Link>
							</li>
							<li>
								<Link
									href="/job-search"
									className="text-[11px] px-[5px] py-2 text-[rgba(0,0,0,0.7)] hover:text-black"
								>
									Job Search
								</Link>
							</li>
							<li>
								<Link
									href="https://juniora.org"
									className="text-[11px] px-[5px] py-2 text-[rgba(0,0,0,0.7)] hover:text-black"
								>
									Juniora
								</Link>
							</li>
							<li>
								<Link
									href="/bootcamp"
									className="text-[11px] px-[5px] py-2 text-[rgba(0,0,0,0.7)] hover:text-black"
								>
									Bootcamp
								</Link>
							</li>
						</ul>
					</nav>
				</div>
				<div className="md:hidden flex justify-center items-center h-full w-fit hover:bg-blue-50">
					<button
						className="px-2"
						onClick={() => setIsOpenMenuBar(!isOpenMenuBar)}
					>
						<svg
							className="w-5 h-5"
							fill="none"
							stroke="currentColor"
							viewBox="0 0 24 24"
							xmlns="http://www.w3.org/2000/svg"
						>
							<path
								strokeLinecap="round"
								strokeLinejoin="round"
								strokeWidth="2"
								d="M4 6h16M4 12h16M4 18h16"
							></path>
						</svg>
					</button>
				</div>
				<div className="md:hidden mx-auto">
					<Image
						src={queraIcon}
						alt="quera logo"
						width={80}
						height={80}
					/>
				</div>
				<div className="flex justify-center items-center">
					<Link href="/user/login">
						<button className="bg-blue-600 rounded border-[1px] border-blue-600 text-white text-[11px] p-[5px] mr-2 hover:bg-blue-700">
							Sign In
						</button>
					</Link>
					<Link href="/user/register" className="max-sm:hidden">
						<button className="bg-white text-blue-600 rounded border-blue-600 border-[1px] text-[11px] p-[5px] mr-2 hover:bg-cyan-50">
							Sign Up
						</button>
					</Link>
					<p className="max-lg:hidden text-[11px] px-[5px] py-2 text-[rgba(0,0,0,0.7)] hover:text-black">
						Enter the companies section
					</p>
				</div>
			</header>
			{isOpenMenuBar && (
				<div className="md:hidden flex flex-col bg-white shadow-[1px_1px_1px_rgba(0,0,0,0.2)] sticky top-12 z-50">
					<Link
						href="/classes"
						className="w-full text-[11px] pl-2 py-2 hover:bg-blue-50"
					>
						Classes
					</Link>

					<Link
						href="/college"
						className="w-full text-[11px] pl-2 py-2 hover:bg-blue-50"
					>
						College
					</Link>

					<Link
						href="/questions"
						className="w-full text-[11px] pl-2 py-2 hover:bg-blue-50"
					>
						Questions Bank
					</Link>

					<Link
						href="/contest"
						className="w-full text-[11px] pl-2 py-2 hover:bg-blue-50"
					>
						Contests
					</Link>

					<Link
						href="/job-search"
						className="w-full text-[11px] pl-2 py-2 hover:bg-blue-50"
					>
						Job Search
					</Link>

					<Link
						href="https://juniora.org"
						className="w-full text-[11px] pl-2 py-2 hover:bg-blue-50"
					>
						Juniora
					</Link>

					<Link
						href="/bootcamp"
						className="w-full text-[11px] pl-2 py-2 hover:bg-blue-50"
					>
						Bootcamp
					</Link>
				</div>
			)}
		</>
	);
}
