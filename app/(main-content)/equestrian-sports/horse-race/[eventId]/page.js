import { getHorseRaceEvents } from "@/app/actions/horse-race-actions/horseRaceActions";
import EventDescription from "@/components/horse-race/event-description/page";
import EventParticipants from "@/components/horse-race/event-participants/page";
import EventSponsors from "@/components/horse-race/event-sponsors/page";

import classes from "@/styles/horse-race/horse-race-event-details/horseRaceEventDetails.module.css";

export default async function HorseRaceEventDetails({ params }) {
  const { eventId } = params;

  // Fetch stable details using the ID
  const events = await getHorseRaceEvents();
  const event = events.find((s) => s.$id === eventId);
  return (
    <div className={classes.container}>
      <h1 className={classes.title}>{event.eventName}</h1>
      <EventDescription params={params} />
      <h1 className={classes.title}>მონაწილეები</h1>
      <EventParticipants eventId={eventId} />
      <h1 className={classes.title}>სპონსორები</h1>
      <EventSponsors />
    </div>
  );
}
