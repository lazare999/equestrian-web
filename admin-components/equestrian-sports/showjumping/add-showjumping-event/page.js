"use client";

import { useState } from "react";
import classes from "@/styles/admin/admin-equestrian-sports/admin-showjumping/admin-add-showjumping-event/addShwjumpingEvent.module.css";
import { addShwjumpingEvent } from "@/admin-components/stables/actions/showumping-actions/showjumpingActions"; // Import the action
import Dropzone from "@/admin-components/stables/add-images/page";

export default function AddShowjumpingEvent() {
  const [formData, setFormData] = useState({
    eventName: "",
    eventDate: "",
    eventDescription: "",
    eventCover: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  // Handle input change
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleImagesChange = (acceptedFiles) => {
    console.log("Accepted images: ", acceptedFiles);
    setFormData((prevState) => ({
      ...prevState,
      eventCover: acceptedFiles,
    }));
  };

  // Handle form submit
  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true); // Disable the form while submitting
    setErrorMessage(""); // Reset any previous error messages

    try {
      const response = await addShwjumpingEvent(formData); // Call the add event function
      console.log("Event added:", response);
      setFormData({ eventName: "", eventDate: "", eventDescription: "" }); // Clear form after submission
    } catch (error) {
      console.error("Error adding event:", error);
      setErrorMessage("Failed to add the event. Please try again.");
    } finally {
      setIsSubmitting(false); // Re-enable the form
    }
  };

  console.log(formData);

  return (
    <div className={classes.container}>
      <h2 className={classes.title}>ახალი შეჯიბრის დამატება</h2>
      <form className={classes.form} onSubmit={handleSubmit}>
        {/* Event Name */}
        <label htmlFor="eventName" className={classes.label}>
          შეჯიბრის სახელი
        </label>
        <input
          type="text"
          name="eventName"
          value={formData.eventName}
          onChange={handleChange}
          className={classes.input}
          required
        />

        {/* Event Date */}
        <label htmlFor="eventDate" className={classes.label}>
          თარიღი
        </label>
        <input
          type="date"
          name="eventDate"
          value={formData.eventDate}
          onChange={handleChange}
          className={classes.input}
          required
        />

        {/* Event Description */}
        <label htmlFor="eventDescription" className={classes.label}>
          აღწერა
        </label>
        <input
          type="text"
          name="eventDescription"
          value={formData.eventDescription}
          onChange={handleChange}
          className={classes.input}
          required
        />
        <Dropzone
          label="Choose event cover"
          name="eventCover"
          required={true}
          onDrop={handleImagesChange}
        />
        {/* Submit Button */}
        <button type="submit" className={classes.submitButton} disabled={isSubmitting}>
          {isSubmitting ? "Submitting..." : "შეჯიბრის დამატება"}
        </button>
      </form>
      {errorMessage && <p className={classes.error}>{errorMessage}</p>} {/* Error Message */}
    </div>
  );
}
