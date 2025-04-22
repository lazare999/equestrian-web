"use client";

import { useState, useTransition } from "react";
import Link from "next/link";
import NavLink from "../nav/nav-link";
import Image from "next/image";
import { useRouter } from "next/navigation";

import classes from "@/styles/header/main-header/mainHeader.module.css";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [, startTransition] = useTransition();
  const router = useRouter();

  const logoPath = "/header-logo/logo1.jpg"; // ✅ use public path

  const toggleMenu = () => {
    setIsMenuOpen((prevState) => !prevState);
  };

  const closeMenuAndNavigate = (href) => {
    setIsMenuOpen(false);
    startTransition(() => {
      router.push(href);
    });
  };

  return (
    <header className={classes.header}>
      <div className={classes.logo}>
        <Link href="/">
          <Image
            src={logoPath}
            alt="საქართველოს ცხენოსნობა ლოგო"
            width={200}
            height={100}
            className={classes.logoImg}
            priority
          />
        </Link>
      </div>
      <button className={classes.burger} onClick={toggleMenu}>
        <span className={classes.burgerLine}></span>
        <span className={classes.burgerLine}></span>
        <span className={classes.burgerLine}></span>
      </button>
      <nav className={`${classes.nav} ${isMenuOpen ? classes.open : ""}`}>
        <ul className={classes.navList}>
          <li className={classes.navItem} onClick={() => closeMenuAndNavigate("/")}>
            <NavLink href="/">დასაწყისი</NavLink>
          </li>
          <li
            className={classes.navItem}
            onClick={() => closeMenuAndNavigate("/equestrian-sports")}
          >
            <NavLink href="/equestrian-sports">სპორტი</NavLink>
          </li>
          <li className={classes.navItem} onClick={() => closeMenuAndNavigate("/tours")}>
            <NavLink href="/tours">ტურები</NavLink>
          </li>
          <li className={classes.navItem} onClick={() => closeMenuAndNavigate("/stables")}>
            <NavLink href="/stables">თავლები</NavLink>
          </li>
          <li className={classes.navItem} onClick={() => closeMenuAndNavigate("/about")}>
            <NavLink href="/about">ჩვენს შესახებ</NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
}
