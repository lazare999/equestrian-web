import classes from "@/styles/stable-prices/stablePrices.module.css";

export default function StablePrices() {
  return (
    <div className={classes.prices}>
      <h1>ფასები</h1>
      <div className={classes.pricesContainer}>
        <p>
          ცხენით გასეირნება: <span>60 ₾</span>
        </p>
        <p>
          ვარჯიში ტრენერთან: <span>80 ₾</span>
        </p>
        <p>
          პონით გასეირნება: <span>40 ₾</span>
        </p>
        <p>
          ფოტოსესია: <span>50 ₾</span>
        </p>
      </div>
    </div>
  );
}
