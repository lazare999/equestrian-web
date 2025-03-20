import Link from "next/link";

import classes from "../../styles/footer/footer.module.css";

export default function Footer() {
  return (
    <footer className={classes.footer}>
      <div className={classes.content}>
        <p>© 2024 Equestrian Georgia. All Rights Reserved.</p>
        <ul className={classes.links}>
          <li>
            <Link href="/about">About Us</Link>
          </li>
          <li>
            <Link href="/contact">Contact</Link>
          </li>
          <li>
            <Link href="/privacy">Privacy Policy</Link>
          </li>
        </ul>
      </div>
    </footer>
  );
}
