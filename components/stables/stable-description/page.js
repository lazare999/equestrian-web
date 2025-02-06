import { getStables } from "@/admin-components/stables/actions/stable-actions/stableActions";

import classes from "@/styles/stable-description/stableDescription.module.css";

export default async function StableDescription({ id }) {
  const stables = await getStables();
  const stable = stables.find((s) => s.$id === id);

  return (
    <div className={classes.container}>
      <div className={classes.stableDescription}>
        <p>
          <img src={stable.stable_logo} alt={stable.stableName} className={classes.stableLogo} />
          {stable.description}
        </p>
      </div>
    </div>
  );
}
