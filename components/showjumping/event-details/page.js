import { getShowjumpingEvents } from "@/admin-components/stables/actions/showumping-actions/showjumpingActions";

import classes from "@/styles/showjumping/event-description/eventDescription.module.css";

export default async function EventDescription({ params }) {
  const { eventId } = params;
  const events = await getShowjumpingEvents();
  const event = events.find((s) => s.$id === eventId);

  return (
    <div className={classes.container}>
      <div>
        <img src={event.eventCover} alt={event.eventName} className={classes.image} />
        <div className={classes.mainDetailsContainer}>
          <p>
            ბარიერების სიმაღლე:<span>140 სმ.</span>
          </p>
          <p>
            დასაწყისი:<span>12:00</span>
          </p>
          <p>
            დასწრება:<span>თავისუფალია</span>
          </p>
        </div>
      </div>
      <p className={classes.description}>{event.eventDescription}</p>
    </div>
  );
}
