// import { databases, storage } from "@/app/utils/appwrite";
// import { ID, Query } from "appwrite";

// export async function addShwjumpingEvent(formData) {
//   try {
//     const eventCoverUrl = await uploadFile(formData.eventCover[0], "eventCover");

//     const eventData = {
//       eventName: formData.eventName,
//       eventDate: formData.eventDate,
//       eventDescription: formData.eventDescription,
//       eventCover: eventCoverUrl,
//     };

//     const eventResponse = await databases.createDocument(
//       "equestrian-data",
//       "showjumping-events",
//       ID.unique(),
//       eventData
//     );

//     // Store participants in a separate collection
//     const eventId = eventResponse.$id;

//     for (const participant of formData.participants) {
//       await databases.createDocument("equestrian-data", "showjumping-participants", ID.unique(), {
//         riderName: participant.riderName,
//         horseName: participant.horseName,
//         equestrianClub: participant.equestrianClub, // ✅ Fix the field name
//         eventId,
//       });
//     }

//     return eventResponse;
//   } catch (error) {
//     console.error("Error adding event:", error);
//     throw new Error("Failed to add event. Please try again.");
//   }
// }

// export async function uploadFile(file, bucketId) {
//   try {
//     const response = await storage.createFile(bucketId, ID.unique(), file);
//     const fileUrl = storage.getFilePreview(bucketId, response.$id); // Get the file URL
//     return fileUrl;
//   } catch (error) {
//     console.error("Error uploading file:", error);
//     throw new Error("Failed to upload file. Please try again.");
//   }
// }

// export async function getShowjumpingEvents() {
//   try {
//     const response = await databases.listDocuments("equestrian-data", "showjumping-events");

//     // Use map to transform the data
//     const events = response.documents.map((event) => {
//       return {
//         ...event,
//         formattedDate: new Date(event.eventDate).toLocaleDateString(), // Format the event date
//       };
//     });

//     console.log(events); // Logs transformed documents
//     return events;
//   } catch (error) {
//     console.error("Error fetching events:", error);
//     throw new Error("Failed to fetch events. Please try again.");
//   }
// }

// export async function getEventParticipants(eventId) {
//   try {
//     const response = await databases.listDocuments(
//       "equestrian-data",
//       "showjumping-participants",
//       [Query.equal("eventId", eventId)] // Filter by eventId
//     );

//     return response.documents;
//   } catch (error) {
//     console.error("Error fetching participants:", error);
//     throw new Error("Failed to fetch participants. Please try again.");
//   }
// }

// showjumpingActions.js (or actions.js)
import { ref, push, set, get } from "firebase/database"; // Import necessary functions from Firebase Realtime Database
import { ref as storageRef, uploadBytes, getDownloadURL } from "firebase/storage"; // Import necessary functions from Firebase Storage
import { database, storage } from "@/lib/firebase/firebase"; // Import database and storage from firebase.js

export const addShwjumpingEvent = async (formData) => {
  try {
    let eventCoverUrl = "";

    // If there's an event cover image, upload it to Firebase Storage
    if (formData.eventCover && formData.eventCover[0]) {
      const coverImageFile = formData.eventCover[0]; // Assuming it's a single image file
      const imageRef = storageRef(storage, `eventCovers/${coverImageFile.name}`); // Path to store the image in Firebase Storage

      // Upload the image
      await uploadBytes(imageRef, coverImageFile);

      // Get the image URL after the upload
      eventCoverUrl = await getDownloadURL(imageRef);
    }

    // Prepare the event data to be saved
    const eventData = {
      eventName: formData.eventName,
      eventDate: formData.eventDate,
      eventDescription: formData.eventDescription,
      eventCover: eventCoverUrl, // Use the image URL if uploaded
      participants: formData.participants,
    };

    // Get a reference to the "showjumpingEvents" collection in Realtime Database
    const eventsRef = ref(database, "showjumpingEvents");

    // Push new event to Firebase Realtime Database
    const newEventRef = push(eventsRef); // Generates a unique key for each event

    // Save the event data at the generated key
    await set(newEventRef, eventData);

    return { success: true, eventId: newEventRef.key };
  } catch (error) {
    console.error("Error uploading event:", error);
    throw new Error(`Failed to upload event data to Firebase: ${error.message}`);
  }
};

export const getShowjumpingEvents = async () => {
  try {
    // Get a reference to the "showjumpingEvents" collection in Realtime Database
    const eventsRef = ref(database, "showjumpingEvents");

    // Get the data from Firebase
    const snapshot = await get(eventsRef);

    if (snapshot.exists()) {
      const events = snapshot.val();

      // Format the events data and return it
      return Object.keys(events).map((eventId) => ({
        $id: eventId,
        ...events[eventId],
        formattedDate: new Date(events[eventId].eventDate).toLocaleDateString(), // Format the date for display
      }));
    } else {
      throw new Error("No events found.");
    }
  } catch (error) {
    console.error("Error fetching events:", error);
    throw new Error("Failed to fetch events.");
  }
};
