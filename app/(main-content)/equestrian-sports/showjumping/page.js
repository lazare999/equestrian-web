import Image from "next/image";

import showjumpingImage from "../../../../public/showjumping-demo-image.jpg";
import ShowjumpingEvents from "@/components/showjumping/showjumping-events/page";

import classes from "../../../../styles/showjumping/showjumping.module.css";

export default function ShowjumpingPage() {
  return (
    <div className={classes.container}>
      <h1 className={classes.title}>Showjumping</h1>
      <div className={classes.introductionContainer}>
        <Image src={showjumpingImage} width={700} alt="demo showjumping image" />
        <p>
          Showjumping is a thrilling equestrian sport that tests the skill, speed, and teamwork
          between horse and rider. In this discipline, riders guide their horses through a course of
          carefully designed obstacles, including jumps of varying heights and widths. The aim is to
          complete the course without knocking down any poles, refusing jumps, or exceeding the time
          limit, as these result in penalties.
          <br />
          <br />
          Each course is unique, challenging the rider's ability to navigate tight turns, adjust the
          horse's pace, and maintain accuracy. Showjumping is enjoyed at all levels, from local
          events to prestigious international competitions, making it a sport for riders and
          spectators alike who love the combination of athleticism, strategy, and the bond between
          horse and rider.
        </p>
      </div>
      {/* Events */}
      <ShowjumpingEvents />
    </div>
  );
}
