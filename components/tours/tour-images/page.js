"use client"; // Ensure React hooks work in Next.js App Router
import { useState } from "react";
import classes from "../../../styles/tour-images/tourImages.module.css";

export default function TourImages({ tour }) {
  const [selectedImage, setSelectedImage] = useState(tour.tourImages?.[0]); // Default to the first image

  const handleImageClick = (image) => {
    setSelectedImage(image); // Change image on click
  };

  return (
    <div className={classes.toursContainer}>
      {/* Sidebar for Vertical Thumbnails */}
      <div className={classes.sidebar}>
        {tour.tourImages?.map((image, index) => (
          <img
            key={index}
            src={image}
            alt={`Tour Image ${index + 1}`}
            className={`${classes.thumbnail} ${selectedImage === image ? classes.activeThumbnail : ""}`}
            onClick={() => handleImageClick(image)} // Only change on click
          />
        ))}
      </div>

      {/* Main Display Image */}
      <div className={classes.mainImageContainer}>
        <img src={selectedImage} alt="Main Tour Image" className={classes.mainImage} />
      </div>
    </div>
  );
}
