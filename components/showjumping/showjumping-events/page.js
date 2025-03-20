"use client";

import { useRouter } from "next/navigation";
import Slider from "../../slider/slider";
import { useState, useEffect } from "react";
import { getShowjumpingEvents } from "@/admin-components/stables/actions/showumping-actions/showjumpingActions";

import classes from "@/styles/showjumping/showjumping-events/showjumpingEvents.module.css";
import sliderClasses from "@/styles/slider/slider.module.css";

export default function ShowjumpingEvents() {
  const [eventData, setEventData] = useState([]);
  const [error, setError] = useState(null);
  const router = useRouter();
  const OPTIONS = { dragFree: true };
  console.log(eventData);
  useEffect(() => {
    const fetchEvents = async () => {
      try {
        const fetchedEvents = await getShowjumpingEvents();

        // Format the date before setting the data
        const formattedEvents = fetchedEvents.map((event) => ({
          ...event,
          formattedDate: formatDate(event.eventDate), // Ensure 'eventDate' matches your DB field
        }));

        setEventData(formattedEvents);
      } catch (err) {
        setError("Failed to fetch events.");
      }
    };

    fetchEvents();
  }, []);

  const formatDate = (dateString) => {
    const date = new Date(dateString); // Convert string to Date object
    const day = date.getDate().toString().padStart(2, "0"); // Ensure two-digit day (e.g., 01, 02, etc.)
    const month = date.toLocaleString("en-US", { month: "short" }); // Get short month name (e.g., "Feb")
    const year = date.getFullYear(); // Get full year (e.g., "2025")
    return `${day} ${month} ${year}`; // Format as "28 Feb 2025"
  };

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
