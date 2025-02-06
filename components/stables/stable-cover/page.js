import { getStables } from "@/admin-components/stables/actions/stable-actions/stableActions";

import classes from "@/styles/stable-cover/stableCover.module.css";

export default async function StableCover({ id }) {
  const stables = await getStables();
  const stable = stables.find((s) => s.$id === id);

  return (
    <div className={classes.coverContaienr}>
      <img src={stable.stable_cover} alt={stable.stableName} className={classes.stableCover} />
      <h1 className={classes.stableName}>{stable.stableName}</h1>
    </div>
  );
}
