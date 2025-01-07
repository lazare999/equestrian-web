import Image from "next/image";
import Link from "next/link";

import showjumping from '../../../public/showjumping1.webp';
import horseRace from '../../../public/horse-race1.webp';
import otherSports from '../../../public/other-sports.jpg';

import classes from '../../../styles/equestrian-sports/equestrianSports.module.css';

export default function EquestrianSportsPage() {
    return (
        <div className={classes.container}>
            <h1 className={classes.title}>Choose your option</h1>

            <div className={classes.sportsCategoryContainer}>
                <Link href="/equestrian-sports/horse-race">
                    <Image
                        src={horseRace}
                        width={400}
                        alt="horse race sports icon"
                        className={classes.imageLink}
                    />
                </Link>
                <Link href="/equestrian-sports/showjumping">
                    <Image
                        src={showjumping}
                        width={400}
                        alt="showjumping sports icon"
                        className={classes.imageLink}
                    />
                </Link>
            </div>

            <div className={classes.otherSportsContainer}>
                <Image
                    src={otherSports}
                    alt="other sports icon"
                    width={700}
                    className={classes.otherSportsImg}
                />
                <div>
                    <h1>There are no other sports in Georgia.</h1>
                    <p>Click for details.</p>
                </div>
            </div>
        </div>
    );
}
