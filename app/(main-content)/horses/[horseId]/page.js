import { getHorses } from "@/app/actions/horses-actions/horsesActions";

import HorseCompetitonResults from "@/components/horses/horse-competition-reuslts/page";
import HorseDescription from "@/components/horses/horse-description/page";
import HorseSlider from "@/components/horses/horse-slider/page";

export default async function HorseDetailsPage({ params }) {
  const { horseId } = params;

  const horses = await getHorses();
  const horse = horses.find((h) => h.$id === horseId);
  console.log(horse);
  if (!horse) {
    return <p>ცხენი ვერ მოიძებნა.</p>;
  }

  return (
    <div>
      <HorseDescription horse={horse} />
      <h1>results</h1>
      <HorseCompetitonResults horse={horse} />
      <h1>other horses</h1>
      <HorseSlider />
    </div>
  );
}
