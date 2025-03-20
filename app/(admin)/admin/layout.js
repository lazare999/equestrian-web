import React from "react";

import Sidebar from "@/components/admin/admin-sidebar/page";
import AdminHeader from "@/components/admin/admin-header/page";

import classes from "../../../styles/admin/admin-layout/adminLayout.module.css";

export default function AdminLayout({ children }) {
  return (
    <>
      <html lang="en">
        <body>
          <div className={classes.layout}>
            <AdminHeader />
            <div className={classes.mainContent}>
              <Sidebar />
              <main className={classes.content}>{children}</main>
            </div>
          </div>
        </body>
      </html>
    </>
  );
}
