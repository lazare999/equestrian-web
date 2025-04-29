"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { getTours } from "@/app/actions/tours-actions/toursActions";
import classes from "@/styles/tours-list/toursList.module.css";
import SkeletonLoader from "../../skeleton-loader/loader";

export default function ToursList() {
  const [tours, setTours] = useState([]);
  const [imageUrls, setImageUrls] = useState([]);
  const [loadedImages, setLoadedImages] = useState([]);
  const [loading, setLoading] = useState(true);
  const [imageLoaded, setImageLoaded] = useState({});
  const [error, setError] = useState(null);
  const router = useRouter();
  console.log(imageUrls);
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
    router.push(`/tours/${tour.tourKey}`, {
      state: tour,
    });
  };

  const handleImageLoad = (tourKey) => {
    setImageLoaded((prevState) => ({
      ...prevState,
      [tourKey]: true,
    }));
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
        <div key={tour.tourKey} className={classes.tourCard} onClick={() => handleTourClick(tour)}>
          <div className={classes.imageContainer}>
            {!imageLoaded[tour.tourKey] && <SkeletonLoader count={1} showTextSkeleton={false} />}
            <img
              src={tour.tourImages[0]}
              alt={`${tour.stableName} Tour Thumbnail`}
              className={classes.tourImage}
              onLoad={() => handleImageLoad(tour.tourKey)}
              style={{ display: imageLoaded[tour.tourKey] ? "block" : "none" }}
            />
          </div>
          <h2 className={classes.tourName}>{tour.tourName}</h2>
          <p className={classes.tourLocation}>{tour.tourLocation}</p>
        </div>
      ))}
    </div>
  );
}
