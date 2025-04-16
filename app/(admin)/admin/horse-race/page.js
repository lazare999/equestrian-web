"use client";

import { useState } from "react";
import { addHorseRaceEvent } from "@/app/actions/horse-race-actions/horseRaceActions";
import AddHorseRaceMainInfo from "@/admin-components/equestrian-sports/horse-race/add-main-info/page";
import AddHorseRaceParticipants from "@/admin-components/equestrian-sports/horse-race/add-participants/page";
import Dropzone from "@/admin-components/add-images/page";

export default function HorseRace() {
  const [formData, setFormData] = useState({
    eventName: "",
    eventDescription: "",
    eventDate: "",
    startTime: "",
    locationLink: "",
    verbalAddress: "",
    participants: [], // მონაწილის მონაცემები აქ ინახება
    eventCover: "",
  });
  console.log(formData);

  // Handle event cover image change
  const handleImagesChange = (acceptedFiles) => {
    console.log("Accepted event cover image: ", acceptedFiles);
    setFormData((prevState) => ({
      ...prevState,
      eventCover: acceptedFiles[0], // Assuming only one image is uploaded
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await addHorseRaceEvent(formData);
      console.log("Horse race event added:", response);
      // Optionally reset form here
    } catch (error) {
      console.error("Error submitting horse race event:", error);
    }
  };

  return (
    <div>
      <h1>შეჯიბრის ატვირთვა</h1>
      <form onSubmit={handleSubmit}>
        <AddHorseRaceMainInfo formData={formData} setFormData={setFormData} />
        <AddHorseRaceParticipants formData={formData} setFormData={setFormData} />
        <Dropzone
          label="Choose event cover"
          name="eventCover"
          required={true}
          onDrop={handleImagesChange}
        />
        <button type="submit">დამატება</button>
      </form>
    </div>
  );
}
