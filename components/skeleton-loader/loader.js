"use client";

import classes from "@/styles/tours-list/skeleton-loader/skeletonLoader.module.css";

export default function SkeletonLoader({ count = 2, showTextSkeleton = true }) {
  return (
    <div className={classes.skeletonContainer}>
      {Array.from({ length: count }).map((_, index) => (
        <div key={index} className={classes.skeletonCard}>
          <div className={classes.skeletonImage}></div>
          {showTextSkeleton && (
            <>
              <div className={classes.skeletonText}></div>
              <div className={classes.skeletonTextSmall}></div>
            </>
          )}
        </div>
      ))}
    </div>
  );
}
