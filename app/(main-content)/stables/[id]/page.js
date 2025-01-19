import { getStables } from "@/admin-components/stables/actions/stable-actions/stableActions";

import StableCover from "@/components/stables/stable-cover/page";
import StableDescription from "@/components/stables/stable-description/page";
import StablePrices from "@/components/stables/stable-prices/page";
import StableAddress from "@/components/stables/stable-address/page";
import StableImages from "@/components/stables/stable-images/page";

import classes from "@/styles/stable-details/stableDetails.module.css";

export default async function StableDetailsPage({ params }) {
  const { id } = await params;

  // Fetch stable details using the ID
  const stables = await getStables();
  const stable = stables.find((s) => s.$id === id);

  if (!stable) {
    return <p>Stable not found.</p>;
  }

  return (
    <div className={classes.container}>
      <StableCover id={id} />
      <h1 className={classes.aboutStable}>თავლის შესახებ</h1>
      <StableDescription id={id} />
      <div className={classes.priecesAndAddressContainer}>
        <StablePrices />
        <StableAddress />
      </div>
      <h1 className={classes.imagesTitle}>ფოტოები</h1>
      <StableImages id={id} />
    </div>
  );
}
