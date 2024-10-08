import { useEffect, useState } from "react";
import Link from 'next/link'
import { MainMenu } from "@/components/main-menu"

export function Header() {
    const [ navbar, setNavbar ] = useState(false);

    const changeBackground = () => {
        if (window.scrollY >= 10) {
            setNavbar(true);
        } else {
            setNavbar(false);
        }
    };

    useEffect(() => {
        window.addEventListener("scroll", changeBackground);
        return () => {
            window.removeEventListener("scroll", changeBackground);
        };
    }, []);

    return (
        <header
            className={`theme-main-menu sticky-menu theme-menu-eight border-bottom ${navbar ? "fixed" : ""
                }`}
        >
            <div className="inner-content position-relative">
                <div className="d-flex align-items-center justify-content-between">
                    <div className="logo order-lg-0">
                        <Link href="/" className="d-block">
                            <img src="/images/logo/Cogninova_logo.png" width= '200px' height= '46px' alt="Cogninova Solutions Logo" />
                        </Link>
                    </div>{" "}
                    {/* /.right-widget */}
                    <MainMenu />
                </div>
            </div>
            {/* /.inner-content */}
        </header>
    );
}
