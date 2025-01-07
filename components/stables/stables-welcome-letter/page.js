"use client";

import { useState, useRef } from "react";
import Image from "next/image";
import arrow1 from "../../../public/arrow-images/arrow1.png";
import arrow2 from "../../../public/arrow-images/arrow2.png";

import classes from "../../../styles/stables-welcome-letter/stablesWelcomeLetter.module.css";

export default function StablesWelcomeLetter() {
    const [isCollapsed, setIsCollapsed] = useState(false);
    const contentRef = useRef(null);

    const toggleContent = () => {
        const content = contentRef.current;
        if (content) {
            if (isCollapsed) {
                content.style.height = `${content.scrollHeight}px`;
                setTimeout(() => {
                    content.style.height = "auto";
                }, 700);
            } else {
                content.style.height = `${content.scrollHeight}px`;
                setTimeout(() => {
                    content.style.height = "0";
                }, 0);
            }
        }
        setIsCollapsed(!isCollapsed);
    };

    return (
        <div className={classes.container}>
            <div className={classes.popContainer}>
                <h2>
                    აღმოაჩინეთ საქართველოს საუკეთესო თავლები -<br /> ყველაფერი, რაც თქვენ
                    უნდა იცოდეთ, ერთ სივრცეში!
                </h2>
                <Image
                    src={isCollapsed ? arrow2 : arrow1}
                    alt="toggle content"
                    width={30}
                    className={classes.arrow}
                    onClick={toggleContent}
                />
            </div>
            <div
                ref={contentRef}
                className={`${classes.collapsibleContent} ${isCollapsed ? classes.collapsed : ""
                    }`}
            >
                <p>
                    ამ გვერდზე თქვენ ნახავთ საქართველოში არსებულ სხვადასხვა თავლებს,
                    რომლებიც გთავაზობენ უმაღლესი ხარისხის სერვისს და უნიკალურ გამოცდილებას
                    ცხენოსნობაში.
                </p>
                <p>ჩვენი პლატფორმა გაძლევთ შესაძლებლობას, ადგილზე მისვლის გარეშე მიიღოთ დეტალური ინფორმაცია:</p>
                <div className={classes.listContainer}>
                    <ul className={classes.ul}>
                        <li>გაკვეთილების ხანგრძლივობა და ფასები</li>
                        <li>თავლების მისამართები და სამუშაო საათები</li>
                        <li>მომსახურებების ტიპები და სპეციალური შეთავაზებები</li>
                    </ul>
                </div>
                <p>
                    ეს ყველაფერი დაგეხმარებათ შეარჩიოთ საუკეთესო თავლა თქვენი საჭიროებების
                    შესაბამისად, დაზოგოთ დრო და მიიღოთ ზუსტად ის გამოცდილება, რასაც ეძებთ.
                </p>
                <p>შეარჩიეთ თავლა მარტივად, დაგეგმეთ თქვენი ვიზიტი და დატკბით ცხენოსნობის დაუვიწყარი მომენტებით!</p>
            </div>
        </div>
    );
}
