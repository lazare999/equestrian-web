"use client";

import { useState, useEffect } from "react";
import classes from "@/styles/tour-description/tourDescription.module.css";

export default function TourDescription({ tour }) {
  const [showModal, setShowModal] = useState(false);
  const [showFullText, setShowFullText] = useState(false);

  // Effect to monitor screen size and adjust the showFullText state
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 480) {
        setShowFullText(true); // Show full text on larger screens
      } else {
        setShowFullText(false); // Collapse text on smaller screens
      }
    };

    // Add event listener on mount
    window.addEventListener("resize", handleResize);

    // Call handleResize to set initial state based on screen size
    handleResize();

    // Cleanup event listener on unmount
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div className={classes.container}>
      <h1 className={classes.stableName}>{tour.stableName}</h1>
      <h3 className={classes.tourPrice}>{`ფასი: $${tour.tourPrice}`}</h3>
      <h3 className={classes.tourDuration}>{`ხანგრძლივობა: ${tour.tourDuration}hr`}</h3>
      <h3 className={classes.tourLocation}>{`მდებარეობა: ${tour.tourLocation}`}</h3>
      {/* <p className={classes.tourDescription}>{tour.tourDescription}</p> */}
      <p className={`${classes.tourDescription} ${showFullText ? classes.expanded : ""}`}>
        {showFullText ? tour.tourDescription : `${tour.tourDescription.slice(0, 500)}... `}
        <button className={classes.showMoreButton} onClick={() => setShowFullText((prev) => !prev)}>
          {showFullText ? "ნაკლების ჩვენება" : "მეტის ჩვენება"}
        </button>
      </p>

      <button className={classes.button} onClick={() => setShowModal(true)}>
        საკონტაქტო ინფორმაცია
      </button>

      {showModal && (
        <div className={classes.modalOverlay} onClick={() => setShowModal(false)}>
          <div className={classes.modal} onClick={(e) => e.stopPropagation()}>
            <h3>Contact Information</h3>
            <p>📞 {tour.tourContact}</p>
            <button className={classes.closeButton} onClick={() => setShowModal(false)}>
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
