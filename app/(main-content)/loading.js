import classes from "@/styles/loading/loading.module.css";

export default function Loading() {
  return (
    <div className={classes.loadingContainer}>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="430"
        height="430"
        fill="none"
        viewBox="0 0 430 430"
      >
        <g strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit="10" strokeWidth="6">
          <path
            stroke="#915110"
            d="M194.8 154c42.4-14.5 84.8-61.3 121.4-61.3 14.6 0 29.7 15.6 29.7 15.6"
          />
          <path stroke="#c76f16" d="M138.3 310.8H112m168.5-1h-27.9" />
          <path
            stroke="#915110"
            d="M111 168.5c-3.5-9.6-12.1-15.8-23-16.1-13.3-.3-24.5 10-26.2 23.2-8.9 70.8-35.8 70.5-35.8 70.5s15.3 25.3 46 2.2c22-16.6 19.4-41.4 29.9-48.5"
          />
          <path
            stroke="#c76f16"
            d="M285.5 231.8c22-10.2 19.3-40.8 19.3-40.8l43.4-40.2 33 19.9c6.7 4.1 15.4 2.3 20-4.1 4.7-6.5 3.5-15.5-2.8-20.6l-30.7-24.8V92c-7.8.7-14 6.3-18.7 12.6-16.9 23-99.3 65.8-190.4 44.7 0 0-57.3-8.8-56.2 55.7 0 17 9.7 23.2 9.7 50.8v80.3l25.5 1 2-68.6s21-24.4 21-51.9c0 0 34.2 27.5 91.3 19.4"
          />
          <path stroke="#c76f16" d="M252.6 216.4V336h26.6l6.3-104.2" />
        </g>
      </svg>
      <h1>Loading...</h1>
    </div>
  );
}
