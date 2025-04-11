import { getHorseRaceEvents } from "@/app/actions/horse-race-actions/horseRaceActions";

import classes from "@/styles/horse-race/event-description/eventDescription.module.css";
// import MobileScreenCover from "./mobile-screen-cover/page";

export default async function EventDescription({ params }) {
  const { eventId } = params;
  const events = await getHorseRaceEvents();
  const event = events.find((s) => s.$id === eventId);

  if (!event) {
    // Handle case where event is not found
    return <p>Event not found.</p>;
  }

  return (
    <div className={classes.container}>
      <div className={classes.imgAndDescription}>
        <img src={event.eventCover} alt={event.eventName} className={classes.image} />

        {/* Optional: if you later add a description field to the horse race event */}
        <p className={classes.description}>
          {event.eventDescription || "ღონისძიების აღწერა დროებით მიუწვდომელია."}
        </p>
      </div>

      {/* <MobileScreenCover imageUrl={event.eventCover} eventDescription={event.eventDescription} /> */}

      <table className={classes.table}>
        <tbody>
          <tr>
            <td>დასაწყისი: {event.startTime || "დასაზუსტებელია"}</td>
            <td>გარბენი: {event.verbalAddress || "არ არის მითითებული"}</td>
            <td>დასწრება: თავისუფალია</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}
