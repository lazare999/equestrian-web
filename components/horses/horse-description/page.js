import HorseImageSlider from "../horse-image-slider/paje";

import classes from "@/styles/horses/horse-description/horseDescription.module.css";

export default function HorseDescription({ horse }) {
  return (
    <div className={classes.container}>
      <div className={classes.imageTableWrapper}>
        <HorseImageSlider options={{ loop: true }}>
          {horse.images.map((image, index) => (
            <img
              key={index}
              src={image}
              alt={`${horse.name} ${index + 1}`}
              className={classes.horseImage}
            />
          ))}
        </HorseImageSlider>
        <table className={classes.customTable}>
          <thead className={classes.tableHeader}>
            <tr>
              <th colSpan="2">
                <span className={classes.icon}>★</span> მთავარი ინფორმაცია:
              </th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th scope="row">სახელი (Name):</th>
              <td>{horse.name}</td>
            </tr>
            <tr>
              <th scope="row">მამა (Sire):</th>
              <td>{horse.sire}</td>
            </tr>
            <tr>
              <th scope="row">დედა (Damsire):</th>
              <td>{horse.damsire}</td>
            </tr>
            <tr>
              <th scope="row">დაბადების თარიღი (DOB):</th>
              <td>{horse.dob}</td>
            </tr>
            <tr>
              <th scope="row">ფერი (Color):</th>
              <td>{horse.color}</td>
            </tr>
            <tr>
              <th scope="row">სქესი (Gender):</th>
              <td>{horse.gender}</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}
