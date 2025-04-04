import classes from "@/styles/admin/amind-horse-race-main-info/horseRaceMainInfo.module.css"; // Ensure correct import

export default function AddMainInfo({ formData, setFormData }) {
  // Handle input changes and update the parent component's state
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  return (
    <div className={classes.form}>
      <label htmlFor="eventName" className={classes.label}>
        შეჯიბრის სახელი
      </label>
      <input
        type="text"
        name="eventName"
        value={formData.eventName}
        onChange={handleChange}
        className={classes.input}
        required
      />

      <label htmlFor="eventDate" className={classes.label}>
        შეჯიბრის თარიღი
      </label>
      <input
        type="date"
        name="eventDate"
        value={formData.eventDate}
        onChange={handleChange}
        className={classes.input}
        required
      />

      <label htmlFor="startTime" className={classes.label}>
        დასაწყისი (Start Time)
      </label>
      <input
        type="time"
        name="startTime"
        value={formData.startTime}
        onChange={handleChange}
        className={classes.input}
        required
      />

      <label htmlFor="locationLink" className={classes.label}>
        მისამართის ლინკი
      </label>
      <input
        type="text"
        name="locationLink"
        value={formData.locationLink}
        onChange={handleChange}
        className={classes.input}
        required
      />

      <label htmlFor="verbalAddress" className={classes.label}>
        სიტყვიერი მისამართი
      </label>
      <input
        type="text"
        name="verbalAddress"
        value={formData.verbalAddress}
        onChange={handleChange}
        className={classes.input}
        required
      />
    </div>
  );
}
