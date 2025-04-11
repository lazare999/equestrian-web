"use client";

import { useRouter } from "next/navigation";
import Slider from "../../slider/slider";
import { useState, useEffect } from "react";
import { getHorseRaceEvents } from "@/app/actions/horse-race-actions/horseRaceActions";

import classes from "@/styles/horse-race/horse-race-events/horseRaceEvents.module.css";
import sliderClasses from "@/styles/slider/slider.module.css";

export default function HorseRaceEvents() {
  const [eventData, setEventData] = useState([]);
  const [error, setError] = useState(null);
  const router = useRouter();
  const OPTIONS = { dragFree: true };

  useEffect(() => {
    const fetchEvents = async () => {
      try {
        const fetchedEvents = await getHorseRaceEvents();

        // Format the date before setting the data
        const formattedEvents = fetchedEvents.map((event) => ({
          ...event,
          formattedDate: formatDate(event.eventDate),
        }));

        setEventData(formattedEvents);
      } catch (err) {
        setError("Failed to fetch horse race events.");
      }
    };

    fetchEvents();
  }, []);

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    const day = date.getDate().toString().padStart(2, "0");
    const month = date.toLocaleString("en-US", { month: "short" });
    const year = date.getFullYear();
    return `${day} ${month} ${year}`;
  };

  const handleClick = (eventId) => {
    router.push(`/equestrian-sports/horse-race/${eventId}`);
  };

  return (
    <div className={classes.container}>
      <h1 className={classes.title}>Horse Race Events</h1>
      {error && <p className={classes.error}>{error}</p>}
      <Slider options={OPTIONS}>
        {eventData.map((event) => (
          <div
            className={classes.embla__slide}
            key={event.$id}
            onClick={() => handleClick(event.$id)}
            style={{ cursor: "pointer" }}
          >
            <div className={classes.embla__slide__number}>
              <p className={classes.date}>{event.formattedDate}</p>
              <h2 className={classes.eventTitle}>{event.eventName}</h2>
              <img src={event.eventCover} alt={event.eventName} className={classes.img} />
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
}
