import { getHorseRaceEvents } from "@/app/actions/horse-race-actions/horseRaceActions";
import EventDescription from "@/components/horse-race/event-description/page";

export default async function HorseRaceEventDetails({ params }) {
  const { eventId } = params;

  // Fetch stable details using the ID
  const events = await getHorseRaceEvents();
  const event = events.find((s) => s.$id === eventId);
  return (
    <div>
      <h1>{event.eventName}</h1>
      <EventDescription params={params} />
    </div>
  );
}
