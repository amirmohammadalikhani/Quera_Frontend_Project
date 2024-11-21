import Layout from "@/components/layout";

export default function Home({
	hideHeaderAndFooter,
}: {
	hideHeaderAndFooter: boolean;
}) {
	return (
		<Layout hideHeaderAndFooter={false}>
			<main>
				<h1 className="absolute inset-0 pt-32 text-center text-4xl font-semibold max-md:text-3xl max-sm:text-2xl">
					Iranian Developers Community
				</h1>
			</main>
		</Layout>
	);
}
