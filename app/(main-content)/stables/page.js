import StablesList from "@/components/stables/stables-list/page";
import StablesWelcomeLetter from "@/components/stables/stables-welcome-letter/page";

import classes from "@/styles/stablesPage/stablesPage.module.css";

export default function StablesPage() {
  return (
    <div className={classes.container}>
      <h1>თავლები </h1>
      <StablesWelcomeLetter />
      <StablesList />
    </div>
  );
}
