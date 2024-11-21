import Layout from "@/components/layout";

export default function AuthLayout({
	children,
	hideHeaderAndFooter,
}: {
	children: React.ReactNode;
	hideHeaderAndFooter: boolean;
}) {
	return <Layout hideHeaderAndFooter={true}>{children}</Layout>;
}
