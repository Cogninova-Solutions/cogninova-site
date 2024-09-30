import { useEffect } from 'react'
import { AppPropsWithLayout } from "@/types/index";
import "@/styles/globals.scss";
import AOS from 'aos';

export default function MyApp({ Component, pageProps }: AppPropsWithLayout) {
    useEffect(() => {
        AOS.init();
        if (typeof window !== "undefined") {
            require("bootstrap/dist/js/bootstrap");
        }

    }, [])
    // Use the layout defined at the page level, if available
    const getLayout = Component.getLayout ?? ((page) => page)

    return getLayout(<Component {...pageProps} />)
}
