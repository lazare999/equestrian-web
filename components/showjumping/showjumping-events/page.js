"use client";

import { useRouter } from "next/navigation";
import Slider from "../../slider/slider";
import sliderClasses from "@/styles/slider/slider.module.css";
import { useState, useEffect } from "react";
import { getShowjumpingEvents } from "@/admin-components/stables/actions/showumping-actions/showjumpingActions";

import classes from "@/styles/showjumping/showjumping-events/showjumpingEvents.module.css";

export default function ShowjumpingEvents() {
  const [eventData, setEventData] = useState([]);
  const [error, setError] = useState(null);
  const router = useRouter();
  const OPTIONS = { dragFree: true };

  useEffect(() => {
    const fetchEvents = async () => {
      try {
        const fetchedEvents = await getShowjumpingEvents();
        setEventData(fetchedEvents);
      } catch (err) {
        setError("Failed to fetch events.");
      }
    };

    fetchEvents();
  }, []);

  const handleClick = (eventId) => {
    router.push(`/equestrian-sports/showjumping/${eventId}`);
  };

  return (
    <div className={classes.container}>
      <h1 className={classes.title}>Showjumping Events</h1>
      {error && <p className={classes.error}>{error}</p>}
      <Slider options={OPTIONS}>
        {eventData.map((event) => (
          <div
            className={sliderClasses.embla__slide}
            key={event.$id}
            onClick={() => handleClick(event.$id)}
            style={{ cursor: "pointer" }}
          >
            <div className={sliderClasses.embla__slide__number}>
              <p className={sliderClasses.date}>{event.formattedDate}</p>
              <img src={event.eventCover} alt={event.eventName} className={sliderClasses.img} />
              <h2 className={sliderClasses.eventTitle}>{event.eventName}</h2>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
}
