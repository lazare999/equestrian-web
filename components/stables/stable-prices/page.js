import classes from "@/styles/stable-prices/stablePrices.module.css";

export default async function StablePrices({ stable }) {
  if (!stable) {
    return <p>Stable data not available.</p>;
  }

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
