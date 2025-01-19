import Slider from "../../slider/slider";
import eventsData from "../../../DUMMY_DATA.json"; // Adjust the path as needed

import classes from "../../../styles/showjumping/showjumping-events/showjumpingEvents.module.css";

import sliderClasses from "../../../styles/slider/slider.module.css";

export default function ShowjumpingEvents() {
  const OPTIONS = { dragFree: true };

  // Extract relevant fields
  const simplifiedEvents = eventsData.events.map((event) => ({
    name: event.name,
    date: event.date,
    event_id: event.event_id,
    img: event.image,
  }));

  console.log(classes.embla__slide);

  return (
    <div className={classes.container}>
      <h1 className={classes.title}>Showjumping Events</h1>
      {/* Pass simplifiedEvents to the Slider */}
      <Slider options={OPTIONS}>
        {simplifiedEvents.map((slide, index) => (
          <div className={sliderClasses.embla__slide} key={slide.event_id || index}>
            <div className={sliderClasses.embla__slide__number}>
              <p className={sliderClasses.date}>{slide.date}</p>
              <img src={slide.img} alt="event image" className={sliderClasses.img} />
              <h2 className={sliderClasses.eventTitle}>{slide.name}</h2>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
}
