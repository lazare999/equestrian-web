import Slider from '../../slider/slider';
import eventsData from '../../../DUMMY_DATA.json'; // Adjust the path as needed

import classes from '../../../styles/showjumping/showjumping-events/showjumpingEvents.module.css';

export default function ShowjumpingEvents() {
    const OPTIONS = { dragFree: true };

    // Extract relevant fields
    const simplifiedEvents = eventsData.events.map(event => ({
        name: event.name,
        date: event.date,
        event_id: event.event_id,
        img: event.image,
    }));

    return (
        <div className={classes.container}>
            <h1 className={classes.title}>Showjumping Events</h1>
            {/* Pass simplifiedEvents to the Slider */}
            <Slider slides={simplifiedEvents} options={OPTIONS} />
        </div>
    );
}