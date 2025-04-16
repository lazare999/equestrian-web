"use client";

import { useState } from "react";
import { addTourWithImages } from "@/app/actions/tours-actions/toursActions";
import Dropzone from "@/admin-components/add-images/page";

export default function AddTours() {
  const [formData, setFormData] = useState({
    stableName: "",
    tourName: "",
    tourLocation: "",
    tourDescription: "",
    tourDuration: "",
    tourPrice: "",
    tourContact: "",
    tourImages: [],
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({ ...prevState, [name]: value }));
  };

  const handleImagesChange = (acceptedFiles) => {
    setFormData((prevState) => ({
      ...prevState,
      tourImages: acceptedFiles,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError(null);
    setSuccess(false);

    try {
      await addTourWithImages(formData);
      setSuccess(true);
      setFormData({
        stableName: "",
        tourName: "",
        tourLocation: "",
        tourDescription: "",
        tourDuration: "",
        tourPrice: "",
        tourContact: "",
        tourImages: [],
      });
    } catch (err) {
      setError(err.message || "An error occurred.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="stableName">Stable Name</label>
        <input
          type="text"
          name="stableName"
          value={formData.stableName}
          onChange={handleChange}
          required
        />

        <label htmlFor="tourName">Tour Name</label>
        <input
          type="text"
          name="tourName"
          value={formData.tourName}
          onChange={handleChange}
          required
        />

        <label htmlFor="tourLocation">Location</label>
        <input
          type="text"
          name="tourLocation"
          value={formData.tourLocation}
          onChange={handleChange}
          required
        />

        <label htmlFor="tourDescription">Description</label>
        <input
          type="text"
          name="tourDescription"
          value={formData.tourDescription}
          onChange={handleChange}
          required
        />
      </div>

      <div>
        <label htmlFor="tourDuration">Duration</label>
        <input
          type="text"
          name="tourDuration"
          value={formData.tourDuration}
          onChange={handleChange}
          required
        />

        <label htmlFor="tourPrice">Price</label>
        <input
          type="text"
          name="tourPrice"
          value={formData.tourPrice}
          onChange={handleChange}
          required
        />

        <label htmlFor="tourContact">Contact</label>
        <input
          type="text"
          name="tourContact"
          value={formData.tourContact}
          onChange={handleChange}
          required
        />
      </div>

      <Dropzone
        label="Choose Tour Images"
        name="tourImages"
        required={true}
        onDrop={handleImagesChange}
      />

      <button type="submit" disabled={isSubmitting}>
        {isSubmitting ? "Adding..." : "Add Tour"}
      </button>
    </form>
  );
}
