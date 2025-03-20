"use client";

import { useState, useRef } from "react";
import Image from "next/image";
import arrow1 from "@/public/arrow-images/arrow1.png";
import arrow2 from "@/public/arrow-images/arrow2.png";

import classes from "@/styles/stables-welcome-letter/stablesWelcomeLetter.module.css";

export default function ToursWelcomeLetter() {
  const [isCollapsed, setIsCollapsed] = useState(true);
  const contentRef = useRef(null);

  const toggleContent = () => {
    const content = contentRef.current;
    if (content) {
      if (isCollapsed) {
        content.style.height = `${content.scrollHeight}px`;
        setTimeout(() => {
          content.style.height = "auto";
        }, 700);
      } else {
        content.style.height = `${content.scrollHeight}px`;
        setTimeout(() => {
          content.style.height = "0";
        }, 0);
      }
    }
    setIsCollapsed(!isCollapsed);
  };

  return (
    <div className={classes.container}>
      <div className={classes.popContainer}>
        <h2>
          აღმოაჩინეთ თავგადასავლებით სავსე ტურები -<br /> დაგეგმე დაუვიწყარი დღე სახლიდანვე
          საქართველოს სხვადასხვა მხარეში.
        </h2>
        <Image
          src={isCollapsed ? arrow2 : arrow1}
          alt="toggle content"
          width={30}
          className={classes.arrow}
          onClick={toggleContent}
        />
      </div>
      <div
        ref={contentRef}
        className={`${classes.collapsibleContent} ${isCollapsed ? classes.collapsed : ""}`}
      >
        <p>
          ამ გვერდზე თქვენ ნახავთ საქართველოში არსებულ სხვადასხვა თავლებს, რომლებიც გთავაზობენ
          უმაღლესი ხარისხის სერვისს და უნიკალურ გამოცდილებას ცხენოსნობაში.
        </p>
        <p>
          ჩვენი პლატფორმა გაძლევთ შესაძლებლობას, ადგილზე მისვლის გარეშე მიიღოთ დეტალური ინფორმაცია:
        </p>
        <div className={classes.listContainer}>
          <ul className={classes.ul}>
            <li>ტურების ადგილმდებარეობა და ხანგრძლივობა</li>
            <li>დაგეგმილი დღის აღწერა</li>
            <li>ინფორმაცია დამატებით აქტივობებთან დაკავშირებით</li>
          </ul>
        </div>
        <p>
          ეს ყველაფერი დაგეხმარებათ შეარჩიოთ საუკეთესო გასეირნება ცხენებთან ერთად თქვენზე მორგებული
          პიროებით, დაზოგოთ დრო და მიიღოთ ზუსტად ის გამოცდილება, რასაც ეძებთ.
        </p>
        <p>
          შეარჩიეთ ტური მარტივად, დაგეგმეთ თქვენი ვიზიტი და დატკბით ცხენოსნობის დაუვიწყარი
          მომენტებით!
        </p>
      </div>
    </div>
  );
}
