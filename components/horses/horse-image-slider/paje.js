"use client";

import useEmblaCarousel from "embla-carousel-react";
import { useCallback } from "react";
import classes from "@/styles/horses/horse-image-slider/horseImageSlider.module.css"; // Your own styles

export default function HorseImageSlider({ children, options }) {
  const [emblaRef, emblaApi] = useEmblaCarousel(options);

  const scrollPrev = useCallback(() => emblaApi?.scrollPrev(), [emblaApi]);
  const scrollNext = useCallback(() => emblaApi?.scrollNext(), [emblaApi]);

  return (
    <div className={classes.embla}>
      <div className={classes.embla__viewport} ref={emblaRef}>
        <div className={classes.embla__container}>
          {children.map((child, index) => (
            <div className={classes.embla__slide} key={index}>
              {child}
            </div>
          ))}
        </div>
      </div>
      <div className={classes.embla__buttons}>
        <button onClick={scrollPrev} className={classes.embla__button}>
          ‹
        </button>
        <button onClick={scrollNext} className={classes.embla__button}>
          ›
        </button>
      </div>
    </div>
  );
}
