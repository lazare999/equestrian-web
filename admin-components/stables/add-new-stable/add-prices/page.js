import classes from "@/styles/admin/admin-stable-pirces/adminStablePrices.module.css"; // Import the CSS module

export default function AddPrices({ formData, handleChange }) {
  return (
    <div>
      {/* <h2 className={classes.title}>ფასები</h2> */}
      <div>
        <label htmlFor="horseRide" className={classes.label}>
          ცხენით გასეირნება
        </label>
        <input
          type="number"
          name="horseRide"
          value={formData.horseRide || ""}
          onChange={handleChange}
          className={classes.input}
          required
        />

        <label htmlFor="trainerSession" className={classes.label}>
          ვარჯიში ტრენერთან
        </label>
        <input
          type="number"
          name="trainerSession"
          value={formData.trainerSession || ""}
          onChange={handleChange}
          className={classes.input}
          required
        />

        <label htmlFor="ponyRide" className={classes.label}>
          პონით გასეირნება
        </label>
        <input
          type="number"
          name="ponyRide"
          value={formData.ponyRide || ""}
          onChange={handleChange}
          className={classes.input}
          required
        />

        <label htmlFor="photoSession" className={classes.label}>
          ფოტოსესია
        </label>
        <input
          type="number"
          name="photoSession"
          value={formData.photoSession || ""}
          onChange={handleChange}
          className={classes.input}
          required
        />
      </div>
    </div>
  );
}
