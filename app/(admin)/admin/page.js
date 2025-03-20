import React from "react";
import Link from "next/link";
import classes from "../../../styles/admin/admin-main/adminMain.module.css";

export default function AdminPage() {
  return (
    <div className={classes.container}>
      <h1 className={classes.heading}>Welcome to the Admin Dashboard</h1>
      <div className={classes.card}>
        <h2>Manage Stables</h2>
        <p>View and manage all stables.</p>
        <Link href="/admin/stables" className={classes.link}>
          Go to Stables
        </Link>
      </div>
      <div className={classes.card}>
        <h2>Manage Showjumping Events</h2>
        <p>View and manage users.</p>
        <Link href="/admin/showjumping-events" className={classes.link}>
          Go to showjumping events
        </Link>
      </div>
      <div className={classes.card}>
        <h2>Manage Tours</h2>
        <p>View and manage tours.</p>
        <Link href="/admin/tours" className={classes.link}>
          Go to tours.
        </Link>
      </div>
    </div>
  );
}
