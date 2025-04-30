"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import Slider from "@/components/slider/slider";
import { getStables } from "@/app/actions/stable-actions/stableActions"; // 🔁 You should create this
import classes from "@/styles/stable-slider/stableSlider.module.css";
import sliderClasses from "@/styles/slider/slider.module.css";

export default function StableSlider() {
  const [stables, setStables] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const router = useRouter();
  const OPTIONS = { dragFree: true };

  useEffect(() => {
    const fetchStables = async () => {
      try {
        const fetchedStables = await getStables();
        setStables(fetchedStables);
      } catch (err) {
        setError("Failed to fetch stables.");
      } finally {
        setLoading(false);
      }
    };

    fetchStables();
  }, []);
  stables.forEach((stable) => {
    console.log("Stable image URL:", stable.stableImages?.[0]);
  });
  const handleStableClick = (stable) => {
    router.push(`/stables/${stable.stableKey}`, {
      state: stable,
    });
  };

  if (loading) return <p>Loading stables...</p>;
  if (error) return <p>{error}</p>;

  return (
    <div className={classes.container}>
      <Slider options={OPTIONS}>
        {stables.map((stable) => (
          <div
            className={classes.slider}
            key={stable.stableKey}
            onClick={() => handleStableClick(stable)}
            style={{ cursor: "pointer" }}
          >
            <div className={sliderClasses.embla__slide__number}>
              <img src={stable.stable_logo} alt={stable.stableName} className={classes.img} />
              <h2 className={classes.eventTitle}>{stable.stableName}</h2>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
}
