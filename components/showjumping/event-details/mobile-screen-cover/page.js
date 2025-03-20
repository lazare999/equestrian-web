"use client";

import { useState } from "react";
import classes from "@/styles/showjumping/event-description/eventDescription.module.css";

export default function MobileScreenCover({ imageUrl, eventDescription }) {
  const [rotated, setRotated] = useState(false);
  const [touchStartX, setTouchStartX] = useState(0);
  const [touchEndX, setTouchEndX] = useState(0);

  // Minimum swipe distance to trigger rotation
  const minSwipeDistance = 50;

  const handleTouchStart = (e) => {
    setTouchStartX(e.touches[0].clientX);
  };

  const handleTouchEnd = (e) => {
    setTouchEndX(e.changedTouches[0].clientX);
    handleSwipe();
  };

  const handleSwipe = () => {
    const swipeDistance = touchStartX - touchEndX;
    if (swipeDistance > minSwipeDistance) {
      // Swiped left → Rotate
      setRotated(true);
    } else if (swipeDistance < -minSwipeDistance) {
      // Swiped right → Rotate back
      setRotated(false);
    }
  };

  return (
    <div
      className={classes.mobileScreenContainer}
      onTouchStart={handleTouchStart}
      onTouchEnd={handleTouchEnd}
    >
      <div
        className={`${classes.front}`}
        style={{
          backgroundImage: `url(${imageUrl})`,
          transform: rotated ? "rotateY(-180deg)" : "rotateY(0deg)",
        }}
      ></div>
      <div
        className={`${classes.back}`}
        style={{
          transform: rotated ? "rotateY(0deg)" : "rotateY(180deg)",
        }}
      >
        <div className={classes.inner}>
          <p className={classes.description}>{eventDescription}</p>
        </div>
      </div>
    </div>
  );
}
