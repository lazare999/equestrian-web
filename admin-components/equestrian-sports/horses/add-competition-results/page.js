"use client";

import { useState } from "react";
import { addCompetitionResults } from "@/app/actions/horses-actions/horsesActions"; // adjust if needed

export default function AddCompetitionResults({ formData, setFormData }) {
  const results = formData.competitionResults;
  const [newResult, setNewResult] = useState({
    date: "",
    show: "",
    event: "",
    competition: "",
    height: "",
    athlete: "",
    position: "",
  });

  const [editIndex, setEditIndex] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setNewResult((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleAddResult = () => {
    const isFilled = Object.values(newResult).every((val) => val.trim() !== "");
    if (!isFilled) return alert("გთხოვთ შეავსოთ ყველა ველი");

    const updatedResults = [...results];
    if (editIndex === null) {
      updatedResults.push(newResult);
    } else {
      updatedResults[editIndex] = newResult;
      setEditIndex(null);
    }

    setFormData((prev) => ({
      ...prev,
      competitionResults: updatedResults,
    }));

    setNewResult({
      date: "",
      show: "",
      event: "",
      competition: "",
      height: "",
      athlete: "",
      position: "",
    });
  };

  const handleRemove = (index) => {
    const updated = results.filter((_, i) => i !== index);
    setFormData((prev) => ({
      ...prev,
      competitionResults: updated,
    }));
  };

  const handleEdit = (index) => {
    setNewResult(results[index]);
    setEditIndex(index);
  };

  return (
    <div>
      <h3>შეჯიბრის შედეგები</h3>

      {results.length > 0 ? (
        results.map((res, index) => (
          <div
            key={index}
            style={{
              marginBottom: "1rem",
              borderBottom: "1px solid #ccc",
              paddingBottom: "1rem",
            }}
          >
            <p>
              <strong>თარიღი:</strong> {res.date}
            </p>
            <p>
              <strong>შოუ:</strong> {res.show}
            </p>
            <p>
              <strong>ღონისძიება:</strong> {res.event}
            </p>
            <p>
              <strong>კონკურსი:</strong> {res.competition}
            </p>
            <p>
              <strong>სიმაღლე:</strong> {res.height}
            </p>
            <p>
              <strong>სპორტსმენი:</strong> {res.athlete}
            </p>
            <p>
              <strong>პოზიცია:</strong> {res.position}
            </p>

            <button onClick={() => handleEdit(index)}>რედაქტირება</button>
            <button onClick={() => handleRemove(index)}>წაშლა</button>
          </div>
        ))
      ) : (
        <p>ჯერ შედეგები არ არის დამატებული.</p>
      )}

      <div style={{ marginTop: "1rem" }}>
        {[
          { label: "თარიღი", name: "date", type: "date" },
          { label: "შოუ", name: "show" },
          { label: "ღონისძიება", name: "event" },
          { label: "კონკურსი", name: "competition" },
          { label: "სიმაღლე", name: "height" },
          { label: "სპორტსმენი", name: "athlete" },
          { label: "პოზიცია", name: "position" },
        ].map(({ label, name, type = "text" }) => (
          <div key={name}>
            <label>{label}</label>
            <input type={type} name={name} value={newResult[name]} onChange={handleChange} />
          </div>
        ))}

        <button type="button" onClick={handleAddResult}>
          {editIndex === null ? "შედეგის დამატება" : "შედეგის განახლება"}
        </button>
      </div>
    </div>
  );
}
