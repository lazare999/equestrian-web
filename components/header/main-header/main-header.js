"use client";

import Link from "next/link";
import NavLink from "../nav/nav-link";
import Image from "next/image";

import logo from "@/public/logo1.jpg";

import classes from "@/styles/header/main-header/mainHeader.module.css";

export default function Header() {
  return (
    <header className={classes.header}>
      <div className={classes.logo}>
        <Link href="/">
          <Image
            src={logo}
            width={80}
            priority
            className={classes.logoImg}
            alt="საქართველოს ცხენოსნობა ლოგო"
          />
        </Link>
      </div>
      <nav>
        <ul className={classes.nav}>
          <li className={classes.navItem}>
            <NavLink href="/">დასაწყისი</NavLink>
          </li>
          <li className={classes.navItem}>
            <NavLink href="/equestrian-sports">სპორტი</NavLink>
          </li>
          <li className={classes.navItem}>
            <NavLink href="/tours">ტურები</NavLink>
          </li>
          <li className={classes.navItem}>
            <NavLink href="/stables">თავლები</NavLink>
          </li>
          <li className={classes.navItem}>
            <NavLink href="/about">ჩვენს შესახებ</NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
}
