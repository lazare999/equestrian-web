import classes from "@/styles/admin/admin-stable-pirces/adminStablePrices.module.css"; // Import the CSS module

export default function AddRegion({ formData, handleChange }) {
  const regions = [
    "Tbilisi",
    "Adjara",
    "Guria",
    "Imereti",
    "Kakheti",
    "Kvemo Kartli",
    "Mtskheta-Mtianeti",
    "Racha-Lechkhumi and Kvemo Svaneti",
    "Samegrelo-Zemo Svaneti",
    "Samtskhe-Javakheti",
    "Shida Kartli",
  ];

  return (
    <div>
      {/* <h2 className={classes.title}>რეგიონი</h2> */}
      <div>
        <label htmlFor="regions" className={classes.label}>
          მიუთითე რეგიონი:
        </label>
        <select
          name="regions"
          id="regions"
          value={formData.regions || ""}
          onChange={handleChange}
          className={classes.input}
          required
        >
          {regions.map((region) => (
            <option key={region} value={region.toLowerCase().replace(/\s+/g, "-")}>
              {region}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
}
