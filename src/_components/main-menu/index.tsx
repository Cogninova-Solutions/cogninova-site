import { usePathname } from 'next/navigation';
import Link from 'next/link';
import { navItems } from '@/data/menu';

export function MainMenu() {
    const pathname = usePathname();

    const isActive = (link: string) => {
        return pathname.replace(/\/\d+$/, "") === link.replace(/\/\d+$/, "");
    };

    return (
        <nav className="navbar navbar-expand-lg order-lg-2">
            <button
                className="navbar-toggler d-block d-lg-none"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#navbarNav"
                aria-controls="navbarNav"
                aria-expanded="false"
                aria-label="Toggle navigation"
            >
                <span />
            </button>

            <div className="collapse navbar-collapse" id="navbarNav">
                <ul className="navbar-nav">
                    <li className="d-block d-lg-none">
                        <div className="logo">
                            <Link href="/" className="d-block">
                                <img src="/images/logo/logo_01.png" alt="logo" />
                            </Link>
                        </div>
                    </li>

                    {navItems.map((menu, index) => (
                        <li key={index} className={`nav-item ${menu.submenu ? 'dropdown' : ''}`}>
                            <Link
                                href={menu.link}
                                className={`nav-link ${menu.submenu ? 'dropdown-toggle' : ''} ${isActive(menu.link) ? 'active-menu' : ''}`}
                                role={menu.submenu ? 'button' : undefined}
                                data-bs-toggle={menu.submenu ? 'dropdown' : undefined}
                                aria-expanded={menu.submenu ? 'false' : undefined}
                            >
                                {menu.title}
                            </Link>
                            {menu.submenu && (
                                <ul className="dropdown-menu">
                                    {menu.submenu.map((subItem, subIndex) => (
                                        <li key={subIndex}>
                                            <Link href={subItem.link} className="dropdown-item">
                                                {subItem.title}
                                            </Link>
                                        </li>
                                    ))}
                                </ul>
                            )}
                        </li>
                    ))}
                </ul>

                <div className="mobile-content d-block d-lg-none">
                    <div className="d-flex flex-column align-items-center justify-content-center mt-70">
                        <Link
                            href="/contact/contact-v1"
                            className="btn-twentyOne fw-500 tran3s"
                        >
                            Contact us
                        </Link>
                    </div>
                </div>
            </div>
        </nav>
    );
}
