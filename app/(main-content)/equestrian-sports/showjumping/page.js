"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { useRouter } from "next/navigation"; // Use 'next/navigation' for App Router

import showjumpingImage from "@/public/showjumping-demo-image.jpg";
import ShowjumpingEvents from "@/components/showjumping/showjumping-events/page";
import HorseSlider from "@/components/horses/horse-slider/page";

import classes from "@/styles/showjumping/showjumping.module.css";

export default function ShowjumpingPage() {
  const [showIntro, setShowIntro] = useState(false);
  const [userToggled, setUserToggled] = useState(false);
  const router = useRouter(); // Use router from next/navigation for App Router

  useEffect(() => {
    const handleResize = () => {
      if (!userToggled) {
        setShowIntro(window.innerWidth > 480);
      }
    };

    window.addEventListener("resize", handleResize);
    handleResize(); // Initial check

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [userToggled]);

  const firstParagraph = `დაბრკოლებათა გადალახვა (Showjumping) საცხენოსნო სპორტის ერთ-ერთი ყველაზე დინამიური და საინტერესო სახეობაა, სადაც მხედრებს და ცხენებს ერთად უწევთ მაღალი სიზუსტით დაბრკოლებების გადალახვა. ამ სპორტის მთავარი მიზანია ცხენმა, მხედრის მართვით, შეჯიბრის ტრასაზე არსებული დაბრკოლებები რაც შეიძლება სწრაფად და შეუფერხებლად გადალახოს. თითოეულ დაბრკოლებას თავისი სიმაღლე და სირთულე აქვს, რაც სპორტს უფრო მომხიბვლელს და შთამბეჭდავს ხდის.`;

  // Function to handle click and redirect
  const handleRedirect = () => {
    router.push("/horses"); // Change '/horses' to the desired path
  };

  return (
    <div className={classes.container}>
      <h1 className={classes.title}>Showjumping</h1>
      <div className={classes.introductionContainer}>
        <Image src={showjumpingImage} alt="demo showjumping image" className={classes.image} />

        <div className={classes.introductionText}>
          <h3>დაბრკოლებათა გადალახვა – ძალა, სისწრაფე და სიზუსტე</h3>

          {!showIntro ? (
            <p>
              {firstParagraph.slice(0, 300)}...
              <button
                className={classes.showMoreButton}
                onClick={() => {
                  setShowIntro(true);
                  setUserToggled(true);
                }}
              >
                მეტის ჩვენება
              </button>
            </p>
          ) : (
            <>
              <p>{firstParagraph}</p>

              <h3>დაბრკოლებათა გადალახვის ძირითადი მახასიათებლები:</h3>
              <ul>
                <li>
                  <span>სიჩქარე:</span> თითოეული წამი მნიშვნელოვანია. სპორტსმენებს მაქსიმალურად
                  სწრაფი და ტექნიკური შეჯიბრების შესრულება უწევთ.
                </li>
                <li>
                  <span>სიზუსტე:</span> ყოველი გაფუჭებული მოძრაობა (მაგალითად, ბარიერის დამხობა)
                  ქულების დაკარგვას ნიშნავს.
                </li>
                <li>
                  <span>სიმაღლე:</span> დაბრკოლებების სიმაღლეები და სირთულეები შეჯიბრის დონეზეა
                  დამოკიდებული.
                </li>
              </ul>

              <p>
                დაბრკოლებათა გადალახვა არა მხოლოდ სპორტული შეჯიბრებაა, არამედ მხედრისა და ცხენის
                უნიკალური ურთიერთობის გამოვლინება, სადაც ნდობა და ჰარმონია წარმატების გასაღებია. თუ
                გიყვართ ადრენალინი, სისწრაფე და დინამიკა, ეს სპორტი ნამდვილად გაგახარებთ და
                შთაგაგონებთ!
              </p>

              <button
                className={classes.showMoreButton}
                onClick={() => {
                  setShowIntro(false);
                  setUserToggled(true);
                }}
              >
                ნაკლების ჩვენება
              </button>
            </>
          )}
        </div>
      </div>
      <h1 className={classes.title}>შეჯიბრები</h1>
      <ShowjumpingEvents />
      <h1 className={classes.title} onClick={handleRedirect} style={{ cursor: "pointer" }}>
        ცხენები
      </h1>
      <HorseSlider />
    </div>
  );
}
