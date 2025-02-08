import { useState, useEffect } from "react";
import dynamic from "next/dynamic";

const Select = dynamic(() => import("react-select"), { ssr: false }); // Ensures it only loads on the client

const equestrianClub = [
  {
    name: "Lisi Lake",
    label: "Lisi Lake",
    logo: "/equestrian-sports-images/equestrian-clubs-logo/lisilakeLogo.jpg",
  },
  {
    name: "Menes",
    label: "Menes",
    logo: "/equestrian-sports-images/equestrian-clubs-logo/menesLogo.jpg",
  },
  {
    name: "Ambasadori",
    label: "Ambasadori",
    logo: "/equestrian-sports-images/equestrian-clubs-logo/ambasadoriLogo.jpg",
  },
];

export default function AddParticipants({
  participants = [],
  addParticipant,
  removeParticipant,
  editParticipant,
  setEditParticipantIndex,
  editParticipantIndex,
}) {
  const [newParticipant, setNewParticipant] = useState({
    riderName: "",
    horseName: "",
    equestrianClub: equestrianClub[0].name, // Fixed "location" name
  });

  useEffect(() => {
    if (editParticipantIndex !== null && participants[editParticipantIndex]) {
      setNewParticipant(participants[editParticipantIndex]);
    }
  }, [editParticipantIndex, participants]);

  const handleNewParticipantChange = (e) => {
    const { name, value } = e.target;
    setNewParticipant((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSelectChange = (selectedOption) => {
    setNewParticipant((prev) => ({
      ...prev,
      equestrianClub: selectedOption.name, // Ensure consistency
    }));
  };

  const handleAddParticipant = () => {
    if (newParticipant.riderName && newParticipant.horseName && newParticipant.equestrianClub) {
      if (editParticipantIndex === null) {
        addParticipant(newParticipant);
      } else {
        editParticipant(newParticipant, editParticipantIndex);
      }
      setNewParticipant({ riderName: "", horseName: "", equestrianClub: equestrianClub[0].name });
      setEditParticipantIndex(null);
    }
  };

  return (
    <div>
      <h3>მონაწილეები</h3>
      {participants.length > 0 ? (
        participants.map((participant, index) => (
          <div key={index}>
            <p>{`მონაწილის სახელი: ${participant.riderName}`}</p>
            <p>{`ცხენის სახელი: ${participant.horseName}`}</p>
            <p>{`საცხენოსნო კლუბის: ${participant.equestrianClub}`}</p>
            <button type="button" onClick={() => removeParticipant(index)}>
              მონაწილეს წაშლა
            </button>
            <button type="button" onClick={() => setEditParticipantIndex(index)}>
              მონაწილეს რედაქტირება
            </button>
          </div>
        ))
      ) : (
        <p>No participants added yet.</p>
      )}

      <div>
        <label htmlFor="riderName">მონაწილის სახელი</label>
        <input
          type="text"
          name="riderName"
          value={newParticipant.riderName}
          onChange={handleNewParticipantChange}
        />

        <label htmlFor="horseName">ცხენის სახელი</label>
        <input
          type="text"
          name="horseName"
          value={newParticipant.horseName}
          onChange={handleNewParticipantChange}
        />

        <label htmlFor="equestrianClub">საცხენოსნო კლუბის</label>
        <Select
          getOptionLabel={(e) => (
            <div className="flex items-center">
              <img src={e.logo} alt={e.label} width={20} height={20} className="mr-2" />
              {e.label}
            </div>
          )}
          options={equestrianClub}
          getOptionValue={(e) => e.name}
          value={equestrianClub.find((club) => club.name === newParticipant.equestrianClub)}
          onChange={handleSelectChange}
        />

        <button type="button" onClick={handleAddParticipant}>
          {editParticipantIndex === null ? "მონაწილის დამატება" : "მონაწილის რედაქტირება"}
        </button>
      </div>
    </div>
  );
}
