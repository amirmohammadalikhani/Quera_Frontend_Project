import Header from "./header";
// import Footer from "./footer";

export default function Layout({
	children,
	hideHeaderAndFooter,
}: {
	children: React.ReactNode;
	hideHeaderAndFooter: boolean;
}) {
	return (
		<>
			{!hideHeaderAndFooter && <Header></Header>}
			{children}
			{/* {!hideHeaderAndFooter && <Footer></Footer>} */}
		</>
	);
}
