"use client";

import { useState } from "react";
import AddHorseInfo from "@/admin-components/equestrian-sports/horses/add-horses/page";
import AddCompetitionResults from "@/admin-components/equestrian-sports/horses/add-competition-results/page";
import { addHorse } from "@/app/actions/horses-actions/horsesActions";

export default function Horses() {
  const [formData, setFormData] = useState({
    name: "",
    gender: "",
    dob: "",
    color: "",
    sire: "",
    damsire: "",
    images: [],
    competitionResults: [],
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  const handleSubmit = async () => {
    setIsSubmitting(true);
    setErrorMessage("");

    try {
      await addHorse(formData);
      setFormData({
        name: "",
        gender: "",
        dob: "",
        color: "",
        sire: "",
        damsire: "",
        images: [],
        competitionResults: [],
      });
    } catch (err) {
      console.error("Error uploading horse info:", err);
      setErrorMessage("Failed to upload horse info. Try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div>
      <h1>ცხენის დამატება</h1>
      <AddHorseInfo formData={formData} setFormData={setFormData} />
      <h1>შეჯიბრის შედეგები</h1>
      <AddCompetitionResults formData={formData} setFormData={setFormData} />
      <button onClick={handleSubmit} disabled={isSubmitting}>
        {isSubmitting ? "იტვირთება..." : "შენახვა"}
      </button>
      {errorMessage && <p>{errorMessage}</p>}
    </div>
  );
}
