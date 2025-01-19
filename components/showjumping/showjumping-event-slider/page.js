import React from "react";
import classes from "@/styles/slider/slider.module.css";

const formatDate = (dateString) => {
  const date = new Date(dateString);
  return new Intl.DateTimeFormat("en-GB", {
    day: "2-digit",
    month: "short",
    year: "numeric",
  }).format(date); // Formats as '25 Dec 2024'
};

const SlideContent = (props) => {
  const { slides } = props;
  console.log(slides);

  return (
    <>
      {slides.map((slide, index) => (
        <div className={classes.embla__slide} key={slide.event_id || index}>
          <div className={classes.embla__slide__number}>
            <p className={classes.date}>{formatDate(slide.date)}</p>
            <img src={slide.img} alt="event image" className={classes.img} />
            <h2 className={classes.title}>{slide.name}</h2>
          </div>
        </div>
      ))}
    </>
  );
};

export default SlideContent;
