"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import Slider from "@/components/slider/slider";
import { getTours } from "@/admin-components/stables/actions/tours-actions/toursActions";
import classes from "@/styles/tours-slider/toursSlider.module.css";
import sliderClasses from "@/styles/slider/slider.module.css";

export default function ToursSlider() {
  const [tours, setTours] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const router = useRouter();
  const OPTIONS = { dragFree: true };

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
    return <p>Loading tours...</p>;
  }

  if (error) {
    return <p>{error}</p>;
  }

  return (
    <div className={classes.container}>
      <h1 className={classes.title}>Horse Tours</h1>
      <Slider options={OPTIONS}>
        {tours.map((tour) => (
          <div
            className={classes.slider}
            key={tour.tourKey} // Use Firebase-generated tour key for unique key
            onClick={() => handleTourClick(tour)} // Pass tour data to handleTourClick
            style={{ cursor: "pointer" }}
          >
            <div className={sliderClasses.embla__slide__number}>
              {/* <p className={sliderClasses.date}>{tour.tourLocation}</p> */}
              <img
                src={tour.tourImages[0]} // Display the first image from the tourImages array
                alt={tour.tourName}
                className={classes.img}
              />
              <h2 className={classes.eventTitle}>{tour.tourName}</h2>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
}
