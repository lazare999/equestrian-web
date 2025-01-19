"use client";

import { useState } from "react";
import Link from "next/link";
import NavLink from "../nav/nav-link";
import Image from "next/image";

import logo from "@/public/header-logo/logo1.jpg";

import classes from "@/styles/header/main-header/mainHeader.module.css";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen((prevState) => !prevState);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <header className={classes.header}>
      <div className={classes.logo}>
        <Link href="/">
          <Image
            src={logo}
            priority
            className={classes.logoImg}
            alt="საქართველოს ცხენოსნობა ლოგო"
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
          <li className={classes.navItem} onClick={closeMenu}>
            <NavLink href="/">დასაწყისი</NavLink>
          </li>
          <li className={classes.navItem} onClick={closeMenu}>
            <NavLink href="/equestrian-sports">სპორტი</NavLink>
          </li>
          <li className={classes.navItem} onClick={closeMenu}>
            <NavLink href="/tours">ტურები</NavLink>
          </li>
          <li className={classes.navItem} onClick={closeMenu}>
            <NavLink href="/stables">თავლები</NavLink>
          </li>
          <li className={classes.navItem} onClick={closeMenu}>
            <NavLink href="/about">ჩვენს შესახებ</NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
}
