import { getTours } from "@/admin-components/stables/actions/tours-actions/toursActions";
import TourDescription from "@/components/tours/tour-description/page";
import TourImages from "@/components/tours/tour-images/page";
import ToursSlider from "@/components/tours/tours-slider/page";

import classes from "@/styles/tours-page/toursPage.module.css";

export default async function TourDetailsPage({ params }) {
  const { tourId } = params;

  const tours = await getTours();
  const tour = tours.find((t) => t.tourKey === tourId);

  return (
    <div>
      <div className={classes.container}>
        <TourImages tour={tour} />
        <TourDescription tour={tour} />
      </div>
      <ToursSlider tours={tours} />
    </div>
  );
}
