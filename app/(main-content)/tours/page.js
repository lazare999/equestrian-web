import ToursList from "@/components/tours/tours-list/page";
import ToursWelcomeLetter from "@/components/tours/tours-welcome-letter/page";

import classes from "@/styles/tours-page/toursPage.module.css";

export default function ToursPage() {
  return (
    <div>
      <h1 className={classes.title}>ტურები საქართველოში</h1>
      <ToursWelcomeLetter />
      <ToursList />
    </div>
  );
}
