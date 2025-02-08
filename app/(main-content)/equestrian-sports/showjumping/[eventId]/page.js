import { notFound } from "next/navigation";
import { getShowjumpingEvents } from "@/admin-components/stables/actions/showumping-actions/showjumpingActions";

import EventDescription from "@/components/showjumping/event-details/page";
import EventParticipants from "@/components/showjumping/event-participants/page";
import EventSponsors from "@/components/showjumping/event-sponsors/page";

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
      <EventDescription params={params} />
      <h1 className={classes.title}>მონაწილეები</h1>
      <EventParticipants eventId={eventId} />
      <h1 className={classes.title}>სპონსორები</h1>
      <EventSponsors />
    </div>
  );
}
