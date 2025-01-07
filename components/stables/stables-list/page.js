'use client';

import { useEffect, useState } from 'react';
import { getStables } from '@/admin-components/stables/actions/stable-actions/stableActions';
import classes from '../../../styles/stables-list/stablesList.module.css';

export default function StablesList() {
    const [stables, setStables] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchStables = async () => {
            try {
                const fetchedStables = await getStables();
                setStables(fetchedStables);
            } catch (err) {
                setError('Failed to fetch stables.');
            } finally {
                setLoading(false);
            }
        };

        fetchStables();
    }, []);

    if (loading) {
        return <p>Loading stables...</p>;
    }

    if (error) {
        return <p>{error}</p>;
    }

    return (
        <div className={classes.container}>
            {stables.map((stable) => (
                <div key={stable.$id} className={classes.stableCard}>
                    <img
                        src={stable.stable_logo}
                        alt={`${stable.stableName} Thumbnail`}
                        className={classes.stableImage}
                    />
                    <h2 className={classes.stableName}>{stable.stableName}</h2>
                    <p className={classes.stableAddress}>{stable.address}</p>
                </div>
            ))}
        </div>
    );
}
