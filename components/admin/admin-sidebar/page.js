// /components/admin/Sidebar.js

import React from 'react';
import Link from 'next/link';
import classes from '../../../styles/admin/admin-sidebar/adminSidebar.module.css';

export default function Sidebar() {
    return (
        <nav className={classes.sidebar}>
            <ul>
                <li><Link href="/admin/stables">Stables</Link></li>
                <li><Link href="/admin/users">Users</Link></li>
            </ul>
        </nav>
    );
}
