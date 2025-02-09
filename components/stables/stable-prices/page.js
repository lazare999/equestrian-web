import { getStables } from "@/admin-components/stables/actions/stable-actions/stableActions";

import classes from "@/styles/stable-prices/stablePrices.module.css";

export default async function StablePrices({ id }) {
  const stables = await getStables();
  const stable = stables.find((s) => s.$id === id);

  return (
    <div className={classes.prices}>
      <h1>ფასები</h1>
      <div className={classes.pricesContainer}>
        <p>
          ცხენით გასეირნება: <span>{stable.horseRide} ₾</span>
        </p>
        <p>
          ვარჯიში ტრენერთან: <span>{stable.trainerSession} ₾</span>
        </p>
        <p>
          პონით გასეირნება: <span>{stable.ponyRide} ₾</span>
        </p>
        <p>
          ფოტოსესია: <span>{stable.photoSession} ₾</span>
        </p>
      </div>
    </div>
  );
}
