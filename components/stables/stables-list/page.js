"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { getStables } from "@/admin-components/stables/actions/stable-actions/stableActions";
import StableFilter from "../stables-filter/page";
import classes from "@/styles/stables-list/stablesList.module.css";
import SkeletonLoader from "../../skeleton-loader/loader";

export default function StablesList() {
  const [stables, setStables] = useState([]);
  const [filteredStables, setFilteredStables] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [selectedRegion, setSelectedRegion] = useState("all");
  const [imageLoaded, setImageLoaded] = useState({});
  const router = useRouter();

  useEffect(() => {
    const fetchStables = async () => {
      try {
        const fetchedStables = await getStables();
        setStables(fetchedStables);
        setFilteredStables(fetchedStables);
      } catch (err) {
        setError("Failed to fetch stables.");
      } finally {
        setLoading(false);
      }
    };

    fetchStables();
  }, []);

  const handleFilterChange = (region) => {
    setSelectedRegion(region);
    setFilteredStables(
      region === "all" ? stables : stables.filter((stable) => stable.regions === region)
    );
  };

  const handleStableClick = (stable) => {
    router.push(`/stables/${stable.stableKey}`);
  };

  const handleImageLoad = (stableKey) => {
    setImageLoaded((prevState) => ({
      ...prevState,
      [stableKey]: true,
    }));
  };

  if (loading) return <SkeletonLoader count={3} />;
  if (error) return <p>{error}</p>;

  return (
    <div className={classes.container}>
      <StableFilter selectedRegion={selectedRegion} onFilterChange={handleFilterChange} />

      <div className={classes.stablesGrid}>
        {filteredStables.map((stable) => (
          <div
            key={stable.stableKey}
            className={classes.stableCard}
            onClick={() => handleStableClick(stable)}
          >
            <div className={classes.imageContainer}>
              {!imageLoaded[stable.stableKey] && (
                <SkeletonLoader count={1} showTextSkeleton={false} />
              )}
              <img
                src={stable.stable_logo}
                alt={`${stable.stableName} Thumbnail`}
                className={classes.stableImage}
                onLoad={() => handleImageLoad(stable.stableKey)}
                style={{ display: imageLoaded[stable.stableKey] ? "block" : "none" }}
              />
            </div>
            <h2 className={classes.stableName}>{stable.stableName}</h2>
            <p className={classes.stableAddress}>{stable.address}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
