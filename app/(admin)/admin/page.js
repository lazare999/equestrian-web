import React from 'react';
import Link from 'next/link';
import classes from '../../../styles/admin/admin-main/adminMain.module.css';

export default function AdminPage() {
    return (
        <div className={classes.container}>
            <h1 className={classes.heading}>Welcome to the Admin Dashboard</h1>
            <div className={classes.card}>
                <h2>Manage Stables</h2>
                <p>View and manage all stables.</p>
                <Link href="/admin/stables" className={classes.link}>Go to Stables</Link>
            </div>
            <div className={classes.card}>
                <h2>Manage Users</h2>
                <p>View and manage users.</p>
                <Link href="/admin/users" className={classes.link}>Go to Users</Link>
            </div>
        </div>
    );
}
