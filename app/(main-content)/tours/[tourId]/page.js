import { getTours } from "@/app/actions/tours-actions/toursActions";
import TourDescription from "@/components/tours/tour-description/page";
import TourImages from "@/components/tours/tour-images/page";
import ToursSlider from "@/components/tours/tours-slider/page";

import classes from "@/styles/tours-page/toursPage.module.css";

// ✅ Needed for static export
export async function generateStaticParams() {
  const tours = await getTours();

  return tours.map((tour) => ({
    tourId: tour.tourKey,
  }));
}

export default async function TourDetailsPage({ params }) {
  const { tourId } = params;

  const tours = await getTours();
  const tour = tours.find((t) => t.tourKey === tourId);

  if (!tour) {
    return <p>Tour not found.</p>;
  }

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
