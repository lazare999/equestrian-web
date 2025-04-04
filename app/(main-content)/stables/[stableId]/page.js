import { getStables } from "@/app/actions/stable-actions/stableActions";

import StableCover from "@/components/stables/stable-cover/page";
import StableDescription from "@/components/stables/stable-description/page";
import StablePrices from "@/components/stables/stable-prices/page";
import StableAddress from "@/components/stables/stable-address/page";
import StableImages from "@/components/stables/stable-images/page";

import classes from "@/styles/stable-details/stableDetails.module.css";

export default async function StableDetailsPage({ params }) {
  // Extract the stable ID from the URL params
  const { stableId } = params; // Updated from id to stableId

  // Fetch stable details using the stableId
  const stables = await getStables();
  const stable = stables.find((s) => s.stableKey === stableId); // Use stableId for comparison

  if (!stable) {
    return <p>Stable not found.</p>;
  }

  return (
    <div className={classes.container}>
      <StableCover stable={stable} />
      <h1 className={classes.aboutStable}>თავლის შესახებ</h1>
      <StableDescription stable={stable} />
      <div className={classes.priecesAndAddressContainer}>
        <StablePrices stable={stable} />
        <StableAddress stable={stable} />
      </div>
      <h1 className={classes.imagesTitle}>ფოტოები</h1>
      <StableImages stable={stable} />
    </div>
  );
}
