import { getStables } from "@/admin-components/stables/actions/stable-actions/stableActions";
import Slider from "@/components/slider/slider";
import sliderClasses from "../../../styles/stable-images/stableImages.module.css";

export default async function StableImages({ id }) {
  if (!id) {
    return <p>No ID provided for stable images</p>;
  }

  const stables = await getStables();
  const stable = stables.find((s) => s.$id === id);

  if (!stable) {
    return <p>Stable not found.</p>;
  }

  // stable.stable_images is an array of URLs
  const OPTIONS = { dragFree: true };

  return (
    <Slider options={OPTIONS}>
      {stable.stable_images.map((image, index) => (
        <div className={sliderClasses.embla__slide} key={index}>
          <div className={sliderClasses.embla__slide__number}>
            <img src={image} alt={`stable image ${index}`} className={sliderClasses.img} />
          </div>
        </div>
      ))}
    </Slider>
  );
}
