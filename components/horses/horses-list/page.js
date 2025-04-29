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

  const handleImageLoad = (key) => {
    setImageLoaded((prev) => ({
      ...prev,
      [key]: true,
    }));
  };

  const handleHorseClick = (horse) => {
    const horseId = horse.horseKey || horse.$id;
    if (!horseId) return alert("Horse ID missing!");
    router.push(`/horses/${horseId}`);
  };

  if (loading) return <SkeletonLoader count={4} />;
  if (error) return <p>{error}</p>;

  return (
    <div className={classes.container}>
      {horses.map((horse, index) => {
        const horseId = horse.horseKey || horse.$id || index;

        return (
          <div key={horseId} className={classes.tourCard} onClick={() => handleHorseClick(horse)}>
            <div className={classes.imageContainer}>
              {!imageLoaded[horseId] && <SkeletonLoader count={1} showTextSkeleton={false} />}
              <img
                src={horse.images?.[0] || "/no-image.jpg"}
                alt={`${horse.name} thumbnail`}
                className={classes.tourImage}
                onLoad={() => handleImageLoad(horseId)}
                style={{ display: imageLoaded[horseId] ? "block" : "none" }}
              />
            </div>
            <h2 className={classes.tourName}>{horse.name}</h2>
            <p className={classes.tourLocation}>დაბ: {horse.dob}</p>
          </div>
        );
      })}
    </div>
  );
}
