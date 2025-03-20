import Image from "next/image";

import cultureLogo from "@/public/sponsors-images/culture-logo.jpg";
import equestrianFederationLogo from "@/public/sponsors-images/equestrian-federation-logo.jpg";
import gulfLogo from "@/public/sponsors-images/gulf-logo.jpg";

import classes from "@/styles/showjumping/event-sponsors/eventSponsors.module.css";

const SPONSORS_DATA = [
  {
    name: "საქართველოს კულტურისა და სპორტის სამინისტრო",
    link: "http://culture.gov.ge/?fbclid=IwY2xjawIRSeoBHf0WwSAEDJshudgDUy71d8YfTnqAR5ACNLw8cqcVS5PMzVCHh35_ggUsgw",
    image: cultureLogo,
  },
  {
    name: "საქართველოს საცხენოსნო სპორტის ეროვნული ფედერაცია",
    link: "https://www.instagram.com/equestrian_sport_Federation?fbclid=IwY2xjawIRSfoBHdRd00VafbT8DS_8hUk2YlXp_T7jhthvKZsOSCnR4YBTAWG-uZQydWPm7g",
    image: equestrianFederationLogo,
  },
  { name: "Gulf", link: "https://gulf.ge/", image: gulfLogo },
];

export default function EventSponsors() {
  return (
    <div className={classes.container}>
      {SPONSORS_DATA.map((sponsor, index) => (
        <a key={index} href={sponsor.link}>
          <Image
            src={sponsor.image}
            alt={sponsor.name}
            width={200}
            height={200}
            className={classes.img}
          />
        </a>
      ))}
    </div>
  );
}
