import { notFound } from "next/navigation";
import { getShowjumpingEvents } from "@/app/actions/showumping-actions/showjumpingActions";

import EventDescription from "@/components/showjumping/event-details/page";
import EventParticipants from "@/components/showjumping/event-participants/page";
import EventSponsors from "@/components/showjumping/event-sponsors/page";

import classes from "@/styles/showjumping/showjumping-event-details/showjumpingEventDetails.module.css";

// 👇 This is what Next.js needs to export static pages for dynamic routes
export async function generateStaticParams() {
  const events = await getShowjumpingEvents();

  return events.map((event) => ({
    eventId: event.$id,
  }));
}

export default async function ShowjumpingEventDetails({ params }) {
  const { eventId } = await params;

  const events = await getShowjumpingEvents();
  const event = events.find((s) => s.$id === eventId);

  console.log("Fetching event with ID:", eventId);

  if (!event) {
    return notFound();
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
