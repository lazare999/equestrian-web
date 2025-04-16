import Image from "next/image";

import phone from "@/public/contacts-images/smartphone.png";
import email from "@/public/contacts-images/email.png";
import facebook from "@/public/contacts-images/facebook.png";

import classes from "@/styles/stable-address/stableAddress.module.css";

export default async function StableAddress({ stable }) {
  if (!stable) {
    return <p>Stable not found.</p>;
  }

  return (
    <div className={classes.address}>
      <h1>მისამართი და საკონტაქტო</h1>
      <div className={classes.contact}>
        <div className={classes.contactInfoContainer}>
          <div className={classes.contactInfo}>
            <Image src={phone} width={50} alt="phone icon" />
            <p>{stable.phoneNumber}</p>
          </div>
          <div className={classes.contactInfo}>
            <Image src={email} width={50} alt="email icon" />
            <p>{stable.email}</p>
          </div>
          <div className={classes.contactInfo}>
            <Image src={facebook} width={50} alt="facebook icon" />
            <p>{stable.facebook}</p>
          </div>
        </div>
        <div className={classes.addressContainer}>
          <h3>მისამართი: </h3>
          {/* Add map if needed */}
          <iframe
            src={stable.addressLink}
            width="100%"
            height="90%"
            style={{ border: 0 }}
            className={classes.map}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </div>
    </div>
  );
}
