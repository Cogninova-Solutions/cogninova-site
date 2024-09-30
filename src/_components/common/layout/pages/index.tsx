import { Header } from "@/components/header";
import { Seo } from "@/components/common/seo";
import { PagesFooter } from "@/components/footer/pages";

export function PagesLayout({ children, seoTitle }: { seoTitle: string, children: React.ReactNode }) {
    return (
        <div>
            <Seo pageTitle={seoTitle} />
            <Header />
            {children}
            <PagesFooter />
        </div>
    );
}
