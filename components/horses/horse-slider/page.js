"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { getHorses } from "@/app/actions/horses-actions/horsesActions";
import Slider from "@/components/slider/slider";

import classes from "@/styles/horses/horses-slider/horsesSlider.module.css";

export default function HorseSlider() {
  const [horses, setHorses] = useState([]);
  const [error, setError] = useState(null);
  const router = useRouter();
  const OPTIONS = { dragFree: true };

  useEffect(() => {
    const fetchHorses = async () => {
      try {
        const data = await getHorses();
        setHorses(data);
      } catch (err) {
        setError("Failed to fetch horses.");
      }
    };

    fetchHorses();
  }, []);

  const handleClick = (horseId) => {
    router.push(`/horses/${horseId}`);
  };

  return (
    <div className={classes.container}>
      {error && <p className={classes.error}>{error}</p>}
      <Slider options={OPTIONS}>
        {horses.map((horse) => (
          <div
            className={classes.embla__slide}
            key={horse.$id}
            onClick={() => handleClick(horse.$id)}
            style={{ cursor: "pointer" }}
          >
            <div className={classes.embla__slide__number}>
              <h2 className={classes.horseName}>{horse.name}</h2>
              {horse.images?.[0] && (
                <img src={horse.images[0]} alt={horse.name} className={classes.img} />
              )}
              <p className={classes.horseInfo}>
                Gender: {horse.gender} | DOB: {horse.dob}
              </p>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
}
