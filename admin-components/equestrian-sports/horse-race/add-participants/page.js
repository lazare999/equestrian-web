import { useState, useEffect } from "react";

export default function AddHorseRaceParticipants({ formData, setFormData }) {
  const [newParticipant, setNewParticipant] = useState({
    riderName: "",
    horseName: "",
  });
  const [editIndex, setEditIndex] = useState(null); // To track the index of the participant being edited

  // Handle form input changes
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewParticipant((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  // Add or Edit a participant
  const handleAddOrEditParticipant = () => {
    if (newParticipant.riderName && newParticipant.horseName) {
      const raceNumber = formData.participants.length; // Automatically assign race number based on the number of participants

      const participantToAdd = {
        raceNumber,
        riderName: newParticipant.riderName,
        horseName: newParticipant.horseName,
      };

      const updatedParticipants = [...formData.participants];

      if (editIndex === null) {
        // Adding a new participant
        updatedParticipants.push(participantToAdd);
      } else {
        // Editing an existing participant
        updatedParticipants[editIndex] = participantToAdd;
        setEditIndex(null); // Reset edit mode
      }

      // Update the formData with the new participants list
      setFormData((prev) => ({
        ...prev,
        participants: updatedParticipants,
      }));

      // Reset the form after adding/editing
      setNewParticipant({ riderName: "", horseName: "" });
    }
  };

  // Edit a participant
  const handleEditParticipant = (index) => {
    setEditIndex(index);
    setNewParticipant(formData.participants[index]); // Pre-fill the form with the participant's data (excluding the race number)
  };

  // Delete a participant
  const handleDeleteParticipant = (index) => {
    const updatedParticipants = formData.participants.filter((_, i) => i !== index);
    setFormData((prev) => ({
      ...prev,
      participants: updatedParticipants,
    }));
  };

  return (
    <div>
      <h2>მონაწილეების დამატება</h2>

      {/* Form for adding or editing participants */}
      <div>
        <label>მხედრის სახელი</label>
        <input
          type="text"
          name="riderName"
          value={newParticipant.riderName}
          onChange={handleInputChange}
        />

        <label>ცხენის სახელი</label>
        <input
          type="text"
          name="horseName"
          value={newParticipant.horseName}
          onChange={handleInputChange}
        />

        <button type="button" onClick={handleAddOrEditParticipant}>
          {editIndex === null ? "მონაწილის დამატება" : "მონაწილის რედაქტირება"}
        </button>
      </div>

      {/* Displaying added participants */}
      <div>
        <h3>დამატებული მონაწილეები</h3>
        {formData.participants.length > 0 ? (
          <ul>
            {formData.participants.map((participant, index) => (
              <li key={index}>
                <p>სარბოლო ნომერი: {participant.raceNumber}</p>
                <p>მხედრის სახელი: {participant.riderName}</p>
                <p>ცხენის სახელი: {participant.horseName}</p>
                <button type="button" onClick={() => handleEditParticipant(index)}>
                  რედაქტირება
                </button>
                <button type="button" onClick={() => handleDeleteParticipant(index)}>
                  წაშლა
                </button>
              </li>
            ))}
          </ul>
        ) : (
          <p>მონაწილეები არ არის დამატებული.</p>
        )}
      </div>
    </div>
  );
}
