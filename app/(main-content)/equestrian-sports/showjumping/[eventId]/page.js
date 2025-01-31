import { notFound } from "next/navigation";
import { getShowjumpingEvents } from "@/admin-components/stables/actions/showumping-actions/showjumpingActions";
import classes from "@/styles/showjumping/showjumping-event-details/showjumpingEventDetails.module.css";

export default async function ShowjumpingEventDetails({ params }) {
  const { eventId } = params; // eventId should be the document ID from Appwrite

  // Fetch stable details using the ID
  const events = await getShowjumpingEvents();
  const event = events.find((s) => s.$id === eventId);
  console.log("Fetching event with ID:", eventId);

  if (!event) {
    return notFound(); // If event is not found, handle it gracefully
  }
  console.log(event);
  return (
    <div className={classes.container}>
      <h1 className={classes.title}>{event.eventName}</h1>
      <div className={classes.imgAndDescriptionContainer}>
        <img src={event.eventCover} alt={event.eventName} className={classes.image} />
        <p className={classes.description}>{event.eventDescription}</p>
      </div>
    </div>
  );
}
