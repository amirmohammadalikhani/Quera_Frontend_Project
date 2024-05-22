import Link from "next/link";
import Image from "next/image";
import queraIcon from "../../public/icon/logo-quera-header.svg";

export default function Header() {
	return (
		<header className="h-12 flex justify-between items-center w-full relative t-0 z-999 shadow-[1px_1px_1px_rgba(0,0,0,0.2)]">
			<div className="flex justify-center items-center">
				<div className="px-2">
					<Image
						src={queraIcon}
						alt="quera logo"
						width={120}
						height={120}
					/>
				</div>
				<div className="w-fit h-fit">
					<ul className="flex justify-center items-center">
						<li>
							<Link
								href="/classes"
								className="text-xs px-[5px] py-2 text-[rgba(0,0,0,0.7)] hover:text-black"
							>
								Classes
							</Link>
						</li>
						<li>
							<Link
								href="/college"
								className="text-xs px-[5px] py-2 text-[rgba(0,0,0,0.7)] hover:text-black"
							>
								College
							</Link>
						</li>
						<li>
							<Link
								href="/questions"
								className="text-xs px-[5px] py-2 text-[rgba(0,0,0,0.7)] hover:text-black"
							>
								Questions Bank
							</Link>
						</li>
						<li>
							<Link
								href="/contest"
								className="text-xs px-[5px] py-2 text-[rgba(0,0,0,0.7)] hover:text-black"
							>
								Contests
							</Link>
						</li>
						<li>
							<Link
								href="/job-search"
								className="text-xs px-[5px] py-2 text-[rgba(0,0,0,0.7)] hover:text-black"
							>
								Job Search
							</Link>
						</li>
						<li>
							<Link
								href="https://juniora.org"
								className="text-xs px-[5px] py-2 text-[rgba(0,0,0,0.7)] hover:text-black"
							>
								Juniora
							</Link>
						</li>
						<li>
							<Link
								href="/bootcamp"
								className="text-xs px-[5px] py-2 text-[rgba(0,0,0,0.7)] hover:text-black"
							>
								Bootcamp
							</Link>
						</li>
					</ul>
				</div>
			</div>
			<div className="flex justify-center items-center">
				<Link href="/user/login">
					<button className="bg-blue-600 rounded border-[1px] border-blue-600 text-white text-xs p-[5px] mr-2 hover:bg-blue-700">
						Sign In
					</button>
				</Link>
				<Link href="/user/register">
					<button className="bg-white text-blue-600 rounded border-blue-600 border-[1px] text-xs p-[5px] mr-2 hover:bg-cyan-50">
						Sign Up
					</button>
				</Link>
				<p className="text-xs px-[5px] py-2 text-[rgba(0,0,0,0.7)] hover:text-black">
					Enter the companies section
				</p>
			</div>
		</header>
	);
}
