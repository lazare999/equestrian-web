import { getHorseRaceEvents } from "@/app/actions/horse-race-actions/horseRaceActions";
import EventDescription from "@/components/horse-race/event-description/page";
import EventParticipants from "@/components/horse-race/event-participants/page";
import EventSponsors from "@/components/horse-race/event-sponsors/page";
import classes from "@/styles/horse-race/horse-race-event-details/horseRaceEventDetails.module.css";

export async function generateStaticParams() {
  const events = await getHorseRaceEvents();
  return events.map((event) => ({
    eventId: event.$id,
  }));
}

export default async function HorseRaceEventDetails({ params }) {
  const { eventId } = params;

  const events = await getHorseRaceEvents();
  const event = events.find((s) => s.$id === eventId);

  if (!event) {
    return <div>Event not found</div>;
  }

  return (
    <div className={classes.container}>
      <h1 className={classes.title}>{event.eventName}</h1>
      <EventDescription eventId={eventId} />
      <h1 className={classes.title}>მონაწილეები</h1>
      <EventParticipants eventId={eventId} />
      <h1 className={classes.title}>სპონსორები</h1>
      <EventSponsors eventId={eventId} />
    </div>
  );
}
