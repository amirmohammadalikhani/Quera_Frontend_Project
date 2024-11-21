import Layout from "@/components/layout";

export default function DashboardLayout({children, hideHeaderAndFooter} : {children:React.ReactNode, hideHeaderAndFooter: boolean}) {
  return (
    <Layout hideHeaderAndFooter={false}>
        {children}
    </Layout>
  )
}
