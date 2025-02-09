import { databases, storage } from "@/app/utils/appwrite";
import { ID, Query } from "appwrite";

export async function addShwjumpingEvent(formData) {
  try {
    const eventCoverUrl = await uploadFile(formData.eventCover[0], "eventCover");

    const eventData = {
      eventName: formData.eventName,
      eventDate: formData.eventDate,
      eventDescription: formData.eventDescription,
      eventCover: eventCoverUrl,
    };

    const eventResponse = await databases.createDocument(
      "equestrian-data",
      "showjumping-events",
      ID.unique(),
      eventData
    );

    // Store participants in a separate collection
    const eventId = eventResponse.$id;

    for (const participant of formData.participants) {
      await databases.createDocument("equestrian-data", "showjumping-participants", ID.unique(), {
        riderName: participant.riderName,
        horseName: participant.horseName,
        equestrianClub: participant.equestrianClub, // ✅ Fix the field name
        eventId,
      });
    }

    return eventResponse;
  } catch (error) {
    console.error("Error adding event:", error);
    throw new Error("Failed to add event. Please try again.");
  }
}

export async function uploadFile(file, bucketId) {
  try {
    const response = await storage.createFile(bucketId, ID.unique(), file);
    const fileUrl = storage.getFilePreview(bucketId, response.$id); // Get the file URL
    return fileUrl;
  } catch (error) {
    console.error("Error uploading file:", error);
    throw new Error("Failed to upload file. Please try again.");
  }
}

export async function getShowjumpingEvents() {
  try {
    const response = await databases.listDocuments("equestrian-data", "showjumping-events");

    // Use map to transform the data
    const events = response.documents.map((event) => {
      return {
        ...event,
        formattedDate: new Date(event.eventDate).toLocaleDateString(), // Format the event date
      };
    });

    console.log(events); // Logs transformed documents
    return events;
  } catch (error) {
    console.error("Error fetching events:", error);
    throw new Error("Failed to fetch events. Please try again.");
  }
}

export async function getEventParticipants(eventId) {
  try {
    const response = await databases.listDocuments(
      "equestrian-data",
      "showjumping-participants",
      [Query.equal("eventId", eventId)] // Filter by eventId
    );

    return response.documents;
  } catch (error) {
    console.error("Error fetching participants:", error);
    throw new Error("Failed to fetch participants. Please try again.");
  }
}
