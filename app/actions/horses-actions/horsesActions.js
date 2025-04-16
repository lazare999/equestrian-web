import { ref, push, set, get } from "firebase/database";
import { ref as storageRef, uploadBytes, getDownloadURL } from "firebase/storage";
import { database, storage } from "@/lib/firebase/firebase";

/**
 * Add horse data along with competition results to Firebase in one request
 */
export const addHorse = async (formData) => {
  try {
    const uploadedImageUrls = [];

    // Upload up to 5 images
    if (formData.images && formData.images.length > 0) {
      for (const file of formData.images.slice(0, 5)) {
        const fileRef = storageRef(storage, `horseImages/${file.name}`);
        await uploadBytes(fileRef, file);
        const url = await getDownloadURL(fileRef);
        uploadedImageUrls.push(url);
      }
    }

    // Prepare horse data
    const horseData = {
      name: formData.name,
      gender: formData.gender,
      dob: formData.dob,
      color: formData.color,
      sire: formData.sire,
      damsire: formData.damsire,
      images: uploadedImageUrls,
      competitionResults: formData.competitionResults || [], // Optional, can be filled later
    };

    // Save horse data to Firebase Realtime Database
    const horsesRef = ref(database, "horses");
    const newHorseRef = push(horsesRef);

    // Save the horseData in one request
    await set(newHorseRef, horseData);

    return { success: true, horseId: newHorseRef.key };
  } catch (error) {
    console.error("Error uploading horse info:", error);
    throw new Error(`Failed to upload horse info: ${error.message}`);
  }
};

/**
 * Fetch all horse entries along with their competition results
 */
export const getHorses = async () => {
  try {
    const horsesRef = ref(database, "horses");
    const snapshot = await get(horsesRef);

    if (snapshot.exists()) {
      const horses = snapshot.val();
      return Object.keys(horses).map((id) => ({
        $id: id,
        ...horses[id],
      }));
    } else {
      throw new Error("No horses found.");
    }
  } catch (error) {
    console.error("Error fetching horses:", error);
    throw new Error("Failed to fetch horses.");
  }
};
