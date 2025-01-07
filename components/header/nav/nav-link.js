"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import classes from "../../../styles/header/main-header/mainHeader.module.css";

export default function NavLink({ href, children }) {
    const path = usePathname();
    const isActive = href === "/" ? path === href : path.startsWith(href);
    return (
        <Link href={href} className={isActive ? classes.active : undefined}>
            {children}
        </Link>
    );
}
