"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { getTours } from "@/admin-components/stables/actions/tours-actions/toursActions";
import classes from "@/styles/tours-list/toursList.module.css";
import SkeletonLoader from "../../skeleton-loader/loader";

export default function ToursList() {
  const [tours, setTours] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const router = useRouter();

  useEffect(() => {
    const fetchTours = async () => {
      try {
        const fetchedTours = await getTours();
        setTours(fetchedTours);
      } catch (err) {
        setError("Failed to fetch tours.");
      } finally {
        setLoading(false);
      }
    };

    fetchTours();
  }, []);

  const handleTourClick = (tour) => {
    // Navigate using Firebase-generated tour ID (tourKey)
    router.push(`/tours/${tour.tourKey}`, {
      state: tour, // Pass tour data as state
    });
  };

  if (loading) {
    return <SkeletonLoader count={2} />;
  }

  if (error) {
    return <p>{error}</p>;
  }

  return (
    <div className={classes.container}>
      {tours.map((tour) => (
        <div
          key={tour.tourKey} // Use Firebase-generated tour key for unique key
          className={classes.tourCard}
          onClick={() => handleTourClick(tour)} // Pass tour data to handleTourClick
        >
          <img
            src={tour.tourImages[0]} // Display the first image from the tourImages array
            alt={`${tour.stableName} Tour Thumbnail`}
            className={classes.tourImage}
          />
          <h2 className={classes.tourName}>{tour.tourName}</h2>
          <p className={classes.tourLocation}>{tour.tourLocation}</p>
        </div>
      ))}
    </div>
  );
}
