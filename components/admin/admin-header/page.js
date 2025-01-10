// /components/admin/AdminHeader.js

import React from "react";
import classes from "@/styles/admin/admin-header/adminHeader.module.css";

export default function AdminHeader() {
  return (
    <header className={classes.header}>
      <h1 className={classes.title}>Equestrian Admin</h1>
    </header>
  );
}
