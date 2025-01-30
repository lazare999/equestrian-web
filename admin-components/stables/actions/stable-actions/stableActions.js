import { databases, storage } from "@/app/utils/appwrite";
import { ID } from "appwrite";

export async function addStableWithImages(formData) {
  try {
    // Upload stable logo and get its URL
    const stableLogoUrl = await uploadFile(formData.stable_logo[0], "stable_logo");

    // Upload stable cover and get its URL
    const stableCoverUrl = await uploadFile(formData.stable_cover[0], "stable_cover");

    // Upload stable images and get their URLs
    const stableImageUrls = await Promise.all(
      formData.stable_images.map((image) => uploadFile(image, "stable_images"))
    );

    const stableImageUrlsString = JSON.stringify(stableImageUrls);

    // Prepare the stable data
    const stableData = {
      stableName: formData.stableName,
      address: formData.address,
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
      stable_images: stableImageUrlsString,
    };

    // Create the stable document
    const response = await databases.createDocument(
      "equestrian-data",
      "stables",
      ID.unique(),
      stableData
    );

    return response;
  } catch (error) {
    console.error("Error adding stable:", error);
    throw new Error("Failed to add stable. Please try again.");
  }
}

// Upload files to Appwrite storage and return their URLs
async function uploadFile(file, bucketId) {
  try {
    const response = await storage.createFile(
      bucketId, // Bucket ID where the file will be uploaded
      ID.unique(), // Unique file ID
      file // The file to upload
    );
    console.log("File uploaded successfully:", response);

    // Ensure the response contains the expected file ID
    const fileId = response.$id;
    if (!fileId) {
      throw new Error("Missing file ID in upload response.");
    }

    // Get the file view URL using the bucket ID and file ID
    const fileUrl = await storage.getFileView(bucketId, fileId); // Use both bucket ID and file ID
    console.log("File URL:", fileUrl);

    return fileUrl; // Return the file URL instead of the full response
  } catch (err) {
    console.error("Error uploading file:", err);
    throw err;
  }
}

export async function getStables() {
  const response = await databases.listDocuments("equestrian-data", "stables");

  // Use map to transform the data
  const stables = response.documents.map((stable) => {
    return {
      ...stable,
      stable_images: JSON.parse(stable.stable_images), // Parse the JSON string back to an array
      formattedDate: new Date(stable.$createdAt).toLocaleDateString(),
    };
  });
  console.log(stables); // Logs transformed documents
  return stables;
}
