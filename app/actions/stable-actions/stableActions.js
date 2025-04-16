import { ref, uploadBytes, getDownloadURL } from "firebase/storage";
import { ref as dbRef, set, push, get } from "firebase/database";
import { database, storage } from "@/lib/firebase/firebase";

export async function addStableWithImages(formData) {
  try {
    // Upload stable logo and get its URL
    const stableLogoUrl = await uploadFile(formData.stable_logo[0], "stable_logos");

    // Upload stable cover and get its URL
    const stableCoverUrl = await uploadFile(formData.stable_cover[0], "stable_covers");

    // Upload stable images and get their URLs
    const stableImageUrls = await Promise.all(
      formData.stable_images.map((image) => uploadFile(image, "stable_images"))
    );
    console.log("Uploaded Image URLs:", stableImageUrls);

    // Prepare the stable data with URLs for images
    const stableData = {
      stableName: formData.stableName,
      address: formData.address,
      addressLink: formData.addressLink,
      regions: formData.regions,
      phoneNumber: formData.phoneNumber,
      facebook: formData.facebook,
      email: formData.email,
      description: formData.description,
      horseRide: formData.horseRide,
      trainerSession: formData.trainerSession,
      photoSession: formData.photoSession,
      ponyRide: formData.ponyRide,
      stable_logo: stableLogoUrl,
      stable_cover: stableCoverUrl,
      stable_images: stableImageUrls,
      createdAt: new Date().toISOString(), // Timestamp for when it was created
    };

    // Reference to Firebase Realtime Database (create a new entry)
    const stableRef = push(dbRef(database, "stables"));

    // Save stable data to Realtime Database
    await set(stableRef, stableData);

    return { success: true, id: stableRef.key }; // Returning success response with ID
  } catch (error) {
    console.error("Error adding stable:", error);
    throw new Error("Failed to add stable. Please try again.");
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

export async function getStables() {
  const stablesRef = dbRef(database, "stables");
  try {
    const snapshot = await get(stablesRef);
    if (snapshot.exists()) {
      const data = snapshot.val();
      // Attach the stable key (from Firebase) to each stable object
      const stablesArray = Object.keys(data).map((key) => ({
        stableKey: key, // Firebase key for each stable
        ...data[key], // Spread the stable data
      }));
      console.log("Fetched Stables Data:", stablesArray); // Log the data for debugging
      return stablesArray;
    } else {
      throw new Error("No stables found.");
    }
  } catch (error) {
    console.error("Error fetching stables:", error);
    throw new Error("Failed to fetch stables.");
  }
}
