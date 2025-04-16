"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { getHorses } from "@/app/actions/horses-actions/horsesActions";
import classes from "@/styles/horses/horses-list/horsesList.module.css";
import SkeletonLoader from "../../skeleton-loader/loader";

export default function HorsesList() {
  const [horses, setHorses] = useState([]);
  const [loading, setLoading] = useState(true);
  const [imageLoaded, setImageLoaded] = useState({});
  const [error, setError] = useState(null);
  const router = useRouter();

  useEffect(() => {
    const fetchHorses = async () => {
      try {
        const fetchedHorses = await getHorses();
        setHorses(fetchedHorses);
      } catch (err) {
        setError("Failed to fetch horses.");
      } finally {
        setLoading(false);
      }
    };

    fetchHorses();
  }, []);

  const handleImageLoad = (horseKey) => {
    setImageLoaded((prev) => ({
      ...prev,
      [horseKey]: true,
    }));
  };

  const handleHorseClick = (horse) => {
    router.push(`/horses/${horse.horseKey}`, {
      state: horse,
    });
  };

  if (loading) return <SkeletonLoader count={2} />;
  if (error) return <p>{error}</p>;

  return (
    <div className={classes.container}>
      {horses.map((horse) => (
        <div
          key={horse.horseKey}
          className={classes.tourCard}
          onClick={() => handleHorseClick(horse)}
        >
          <div className={classes.imageContainer}>
            {!imageLoaded[horse.horseKey] && <SkeletonLoader count={1} showTextSkeleton={false} />}
            <img
              src={horse.images?.[0] || "/no-image.jpg"}
              alt={`${horse.name} thumbnail`}
              className={classes.tourImage}
              onLoad={() => handleImageLoad(horse.horseKey)}
              style={{ display: imageLoaded[horse.horseKey] ? "block" : "none" }}
            />
          </div>
          <h2 className={classes.tourName}>{horse.name}</h2>
          <p className={classes.tourLocation}>დაბ: {horse.dob}</p>
        </div>
      ))}
    </div>
  );
}
