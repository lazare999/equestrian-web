import classes from "@/styles/stable-cover/stableCover.module.css";

export default function StableCover({ stable }) {
  // Ensure stable data is passed as prop
  if (!stable) {
    return <p>Stable data not available.</p>;
  }

  // Social media links
  const socialLinks = [
    { platform: "facebook", url: stable.facebook, icon: "/socail-icons/facebook.svg" },
    { platform: "instagram", url: stable.instagram, icon: "/socail-icons/instagram.svg" },
    { platform: "tiktok", url: stable.tiktok, icon: "/socail-icons/tiktok.svg" },
  ];

  return (
    <div className={classes.coverContainer}>
      <img src={stable.stable_cover} alt={stable.stableName} className={classes.stableCover} />
      <h1 className={classes.stableName}>{stable.stableName}</h1>
      <div className={classes.socialIcons}>
        {socialLinks.map(
          (link) =>
            link.url && ( // Check if link exists before rendering
              <a key={link.platform} href={link.url} target="_blank" rel="noopener noreferrer">
                <img src={link.icon} alt={`${link.platform} icon`} className={classes.socialIcon} />
              </a>
            )
        )}
      </div>
    </div>
  );
}
