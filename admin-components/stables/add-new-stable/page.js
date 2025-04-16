"use client";

import { useState } from "react";
import { addStableWithImages } from "@/app/actions/stable-actions/stableActions";
import Dropzone from "../../add-images/page";

import classes from "@/styles/admin/admin-add-new-stable/addNewStables.module.css";
import AddPrices from "./add-prices/page";
import AddContactInfo from "./add-contact-info/page";
import AddRegion from "./add-region/page";

export default function AddNewStable() {
  const [formData, setFormData] = useState({
    stableName: "",
    address: "",
    addressLink: "",
    regions: "",
    phoneNumber: "",
    facebook: "",
    email: "",
    description: "",
    stable_logo: "",
    stable_images: [],
    horseRide: "", // Price fields
    trainerSession: "",
    ponyRide: "",
    photoSession: "",
  });
  console.log(formData);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(false);
  console.log(formData);
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({ ...prevState, [name]: value }));
  };

  const handleLogoChange = (acceptedFiles) => {
    console.log("Accepted logo: ", acceptedFiles);
    setFormData((prevState) => ({
      ...prevState,
      stable_logo: acceptedFiles,
    }));
  };

  const handleCoverChange = (acceptedFiles) => {
    setFormData((prevState) => ({
      ...prevState,
      stable_cover: acceptedFiles, // Handle stable cover
    }));
  };

  const handleImagesChange = (acceptedFiles) => {
    console.log("Accepted images: ", acceptedFiles);
    setFormData((prevState) => ({
      ...prevState,
      stable_images: acceptedFiles,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError(null);
    setSuccess(false);

    try {
      await addStableWithImages(formData);
      setSuccess(true);
      setFormData({
        stableName: "",
        address: "",
        addressLink: "",
        region: "",
        phoneNumber: "",
        facebook: "",
        email: "",
        description: "",
        stable_logo: "",
        stable_images: [],
        horseRide: "", // Price fields
        trainerSession: "",
        ponyRide: "",
        photoSession: "",
      });
    } catch (err) {
      setError(err.message || "An error occurred.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className={classes.container}>
      <h1 className={classes.title}>დაამატე თავლა</h1>
      {error && <p className={classes.error}>{error}</p>}
      {success && <p className={classes.success}>Stable added successfully!</p>}
      <form className={classes.form} onSubmit={handleSubmit}>
        <div className={classes.formContainer}>
          <div className={classes.firsFormDiv}>
            <label htmlFor="stableName">თავლის სახელი</label>
            <input
              type="text"
              name="stableName"
              value={formData.stableName}
              onChange={handleChange}
              required
            />
            <label htmlFor="address">მისამართი</label>
            <input
              type="text"
              name="address"
              value={formData.address}
              onChange={handleChange}
              required
            />
            <label htmlFor="address">მისამართის ლინკი</label>
            <input
              type="text"
              name="address"
              value={formData.addressLink}
              onChange={handleChange}
              required
            />
            <AddRegion formData={formData} handleChange={handleChange} />
            <AddPrices formData={formData} handleChange={handleChange} />
            <AddContactInfo formData={formData} handleChange={handleChange} />
          </div>
          <div className={classes.secondFormDiv}>
            <label htmlFor="description">სრული აღწერა</label>
            <textarea
              name="description"
              value={formData.description}
              onChange={handleChange}
              required
            />
          </div>
        </div>
        <Dropzone
          label="Choose Stable Logo"
          name="stable_logo"
          required={true}
          onDrop={handleLogoChange}
        />
        <Dropzone
          label="Choose Stable Cover"
          name="stable_cover" // New Dropzone for stable cover
          required={true}
          onDrop={handleCoverChange}
        />
        <Dropzone
          label="Choose Stable Images"
          name="stable_images"
          required={true}
          onDrop={handleImagesChange}
        />
        <div className={classes.buttonContainer}>
          <button type="submit" className={classes.submitButton} disabled={isSubmitting}>
            {isSubmitting ? "Adding..." : "დამატება"}
          </button>
        </div>
      </form>
    </div>
  );
}
