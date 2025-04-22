import { getShowjumpingEvents } from "@/app/actions/showumping-actions/showjumpingActions";
import classes from "@/styles/showjumping/event-description/eventDescription.module.css";
import MobileScreenCover from "./mobile-screen-cover/page";

export default async function EventDescription({ eventId }) {
  // Fetch events using eventId passed as prop
  const events = await getShowjumpingEvents();
  const event = events.find((s) => s.$id === eventId);

  if (!event) {
    // If event is not found, show a fallback message
    return <p>Event not found.</p>;
  }

  return (
    <div className={classes.container}>
      <div className={classes.imgAndDescription}>
        <img src={event.eventCover} alt={event.eventName} className={classes.image} />
        <p className={classes.description}>
          {event.eventDescription || "Event description not available."}
        </p>
      </div>
      <MobileScreenCover imageUrl={event.eventCover} eventDescription={event.eventDescription} />
      <table className={classes.table}>
        <tbody>
          <tr>
            <td>ბარიერების სიმაღლე: 140 სმ.</td>
            <td>დასაწყისი: 12:00</td>
            <td>დასწრება: თავისუფალია</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}
