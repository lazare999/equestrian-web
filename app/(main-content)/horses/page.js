import HorsesList from "@/components/horses/horses-list/page";
import { getHorses } from "@/app/actions/horses-actions/horsesActions";

export default async function Horses({ params }) {
  const { horseId } = params;

  const horses = await getHorses();
  const horse = horses.find((h) => h.$id === horseId);

  console.log(horse);
  return (
    <div>
      <HorsesList />
    </div>
  );
}
