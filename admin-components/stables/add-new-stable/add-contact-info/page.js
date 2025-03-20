import classes from "@/styles/admin/admin-add-contact-info/addContactInfo.module.css";

export default function AddContactInfo({ formData, handleChange }) {
  return (
    <div className={classes.contaienr}>
      <label htmlFor="horseRide" className={classes.label}>
        ნომერი
      </label>
      <input
        type="number"
        name="phoneNumber"
        value={formData.phoneNumber || ""}
        onChange={handleChange}
        className={classes.input}
        required
      />
      <label htmlFor="horseRide" className={classes.label}>
        ემაილი
      </label>
      <input
        type="text"
        name="email"
        value={formData.email || ""}
        onChange={handleChange}
        className={classes.input}
        required
      />
      <label htmlFor="horseRide" className={classes.label}>
        facebook
      </label>
      <input
        type="text"
        name="facebook"
        value={formData.facebook || ""}
        onChange={handleChange}
        className={classes.input}
        required
      />
    </div>
  );
}
