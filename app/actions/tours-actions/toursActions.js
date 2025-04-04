import { ref, uploadBytes, getDownloadURL } from "firebase/storage";
import { ref as dbRef, set, push, get } from "firebase/database";
import { database, storage } from "@/lib/firebase/firebase";

export async function addTourWithImages(formData) {
  try {
    // Upload tour images and get their URLs
    const tourImageUrls = await Promise.all(
      formData.tourImages.map((image) => uploadFile(image, "tour_images"))
    );
    console.log("Uploaded Tour Image URLs:", tourImageUrls);

    // Prepare tour data
    const tourData = {
      stableName: formData.stableName,
      tourName: formData.tourName,
      tourLocation: formData.tourLocation,
      tourDescription: formData.tourDescription,
      tourDuration: formData.tourDuration,
      tourPrice: formData.tourPrice,
      tourContact: formData.tourContact,
      tourImages: tourImageUrls,
      createdAt: new Date().toISOString(),
    };
    console.log(tourData);
    // Reference to Firebase Realtime Database
    const tourRef = push(dbRef(database, "tours"));

    // Save tour data
    await set(tourRef, tourData);

    return { success: true, id: tourRef.key };
  } catch (error) {
    console.error("Error adding tour:", error);
    throw new Error("Failed to add tour. Please try again.");
  }
}

// ✅ Function to upload file to Firebase Storage
async function uploadFile(file, folder) {
  try {
    const fileRef = ref(storage, `${folder}/${file.name}-${Date.now()}`);
    await uploadBytes(fileRef, file);
    const fileUrl = await getDownloadURL(fileRef);
    return fileUrl;
  } catch (err) {
    console.error("Error uploading file:", err);
    throw err;
  }
}

export async function getTours() {
  const toursRef = dbRef(database, "tours");
  try {
    const snapshot = await get(toursRef);
    if (snapshot.exists()) {
      const data = snapshot.val();
      const toursArray = Object.keys(data).map((key) => ({
        tourKey: key,
        ...data[key],
      }));
      console.log("Fetched Tours Data:", toursArray);
      return toursArray;
    } else {
      throw new Error("No tours found.");
    }
  } catch (error) {
    console.error("Error fetching tours:", error);
    throw new Error("Failed to fetch tours.");
  }
}
