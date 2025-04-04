import { ref, push, set } from "firebase/database";
import { ref as storageRef, uploadBytes, getDownloadURL } from "firebase/storage";
import { database, storage } from "@/lib/firebase/firebase";

// 🐎 Add new horse race event
export const addHorseRaceEvent = async (formData) => {
  try {
    let eventCoverUrl = "";

    // Upload the event cover image if available
    if (formData.eventCover) {
      const coverImageFile = formData.eventCover;
      const imageRef = storageRef(storage, `horseRaceEventCovers/${coverImageFile.name}`);

      await uploadBytes(imageRef, coverImageFile);
      eventCoverUrl = await getDownloadURL(imageRef);
    }

    // Prepare horse race event data
    const eventData = {
      eventName: formData.eventName,
      eventDate: formData.eventDate,
      startTime: formData.startTime,
      locationLink: formData.locationLink,
      verbalAddress: formData.verbalAddress,
      eventCover: eventCoverUrl,
      participants: formData.participants,
    };

    // Push the new event into Firebase Realtime Database
    const eventsRef = ref(database, "horseRaceEvents");
    const newEventRef = push(eventsRef);

    await set(newEventRef, eventData);

    return { success: true, eventId: newEventRef.key };
  } catch (error) {
    console.error("Error uploading horse race event:", error);
    throw new Error(`Failed to upload horse race event data to Firebase: ${error.message}`);
  }
};

// 🐎 Get all horse race events
export const getHorseRaceEvents = async () => {
  try {
    // Reference to the horse race events node in Firebase
    const eventsRef = ref(database, "horseRaceEvents");

    // Get the data
    const snapshot = await get(eventsRef);

    if (snapshot.exists()) {
      const events = snapshot.val();

      // Format the data into an array with readable date
      return Object.keys(events).map((eventId) => ({
        $id: eventId,
        ...events[eventId],
        formattedDate: new Date(events[eventId].eventDate).toLocaleDateString("ka-GE", {
          year: "numeric",
          month: "long",
          day: "numeric",
        }),
      }));
    } else {
      throw new Error("No horse race events found.");
    }
  } catch (error) {
    console.error("Error fetching horse race events:", error);
    throw new Error("Failed to fetch horse race events.");
  }
};
