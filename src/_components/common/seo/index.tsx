import { Helmet, HelmetProvider } from "react-helmet-async";

export function Seo({ pageTitle }: { pageTitle: string }) {
    return (
        <HelmetProvider>
            <Helmet>
                <title>
                    {pageTitle &&
                        `${pageTitle}`}
                </title>
            </Helmet>
        </HelmetProvider>
    )
}
