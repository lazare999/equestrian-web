"use client";

import { useState } from "react";
import classes from "@/styles/admin/admin-add-horses/addHorses.module.css";
import Dropzone from "@/admin-components/add-images/page";

import { addHorses } from "@/app/actions/horses-actions/horsesActions";

export default function AddHorseInfo({ formData, setFormData }) {
  const [errorMessage, setErrorMessage] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleImagesChange = (acceptedFiles) => {
    if (acceptedFiles.length > 5) {
      return alert("You can upload a maximum of 5 images.");
    }
    setFormData((prev) => ({
      ...prev,
      images: acceptedFiles,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setErrorMessage("");

    try {
      await addHorses(formData);
      alert("ცხენი წარმატებით დაემატა!");
      // Optional: reset form after successful submission
      setFormData({
        name: "",
        gender: "",
        dob: "",
        color: "",
        sire: "",
        damsire: "",
        images: [],
      });
    } catch (err) {
      console.error("დამატების შეცდომა:", err);
      setErrorMessage("დამატება ვერ მოხერხდა. გთხოვ სცადე თავიდან.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className={classes.container}>
      <h2 className={classes.title}>ახალი ცხენის დამატება</h2>
      <form className={classes.form} onSubmit={handleSubmit}>
        {/* Horse Name */}
        <label className={classes.label}>ცხენის სახელი</label>
        <input
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}
          className={classes.input}
          required
        />

        {/* Gender */}
        <label className={classes.label}>სქესი</label>
        <select
          name="gender"
          value={formData.gender}
          onChange={handleChange}
          className={classes.input}
          required
        >
          <option value="">აირჩიეთ</option>
          <option value="stallion">კაცი (Stallion)</option>
          <option value="mare">ქალი (Mare)</option>
          <option value="gelding">კასტრატი (Gelding)</option>
        </select>

        {/* Date of Birth */}
        <label className={classes.label}>დაბადების თარიღი</label>
        <input
          type="date"
          name="dob"
          value={formData.dob}
          onChange={handleChange}
          className={classes.input}
          required
        />

        {/* Colour */}
        <label className={classes.label}>ფერი</label>
        <input
          type="text"
          name="color"
          value={formData.color}
          onChange={handleChange}
          className={classes.input}
          required
        />

        {/* Sire */}
        <label className={classes.label}>მამა (Sire)</label>
        <input
          type="text"
          name="sire"
          value={formData.sire}
          onChange={handleChange}
          className={classes.input}
        />

        {/* Damsire */}
        <label className={classes.label}>დედის მამა (Damsire)</label>
        <input
          type="text"
          name="damsire"
          value={formData.damsire}
          onChange={handleChange}
          className={classes.input}
        />

        {/* Image Upload */}
        <Dropzone
          label="აირჩიეთ ცხენის ფოტოები (მაქს 5)"
          name="images"
          required={true}
          onDrop={handleImagesChange}
        />

        {/* Submit Button */}
        <button type="submit" className={classes.submitButton} disabled={isSubmitting}>
          {isSubmitting ? "იტვირთება..." : "ცხენის დამატება"}
        </button>
      </form>

      {/* Error Message */}
      {errorMessage && <p className={classes.error}>{errorMessage}</p>}
    </div>
  );
}
