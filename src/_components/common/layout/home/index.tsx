import { Header } from "@/components/header";
import { Seo } from "@/components/common/seo";

export function Layout({ children, seoTitle }: { seoTitle: string, children: React.ReactNode }) {
    return (
        <div>
            <Seo pageTitle={seoTitle} />
            <Header />
            {children}
        </div>
    );
}
