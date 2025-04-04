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
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d5954.640498793491!2d44.849992687384024!3d41.73518479678255!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x404412a4103f6425%3A0xddb8615a4befe2d9!2z4YOh4YOe4YOY4YOg4YOY4YOi4YOY!5e0!3m2!1ska!2sge!4v1737026893551!5m2!1ska!2sge"
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
