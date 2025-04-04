import Slider from "@/components/slider/slider";
import sliderClasses from "../../../styles/stable-images/stableImages.module.css";

export default async function StableImages({ stable }) {
  if (!stable) {
    return <p>No stable data provided for images.</p>;
  }

  // Ensure stable_images contains valid URLs
  if (!stable.stable_images || stable.stable_images.length === 0) {
    return <p>No images available for this stable.</p>;
  }

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
