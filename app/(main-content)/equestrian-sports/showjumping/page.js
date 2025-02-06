import Image from "next/image";

import showjumpingImage from "@/public/showjumping-demo-image.jpg";
import ShowjumpingEvents from "@/components/showjumping/showjumping-events/page";

import classes from "@/styles/showjumping/showjumping.module.css";

export default function ShowjumpingPage() {
  return (
    <div className={classes.container}>
      <h1 className={classes.title}>Showjumping</h1>
      <div className={classes.introductionContainer}>
        <Image src={showjumpingImage} width={700} alt="demo showjumping image" />
        <div className={classes.introductionText}>
          <h3>დაბრკოლებათა გადალახვა – ძალა, სისწრაფე და სიზუსტე</h3>

          <p>
            დაბრკოლებათა გადალახვა (Showjumping) საცხენოსნო სპორტის ერთ-ერთი ყველაზე დინამიური და
            საინტერესო სახეობაა, სადაც მხედრებს და ცხენებს ერთად უწევთ მაღალი სიზუსტით დაბრკოლებების
            გადალახვა. ამ სპორტის მთავარი მიზანია ცხენმა, მხედრის მართვით, შეჯიბრის ტრასაზე არსებული
            დაბრკოლებები რაც შეიძლება სწრაფად და შეუფერხებლად გადალახოს. თითოეულ დაბრკოლებას თავისი
            სიმაღლე და სირთულე აქვს, რაც სპორტს უფრო მომხიბვლელს და შთამბეჭდავს ხდის.
          </p>
          <h3>დაბრკოლებათა გადალახვის ძირითადი მახასიათებლები:</h3>
          <ul>
            <li>
              <span>სიჩქარე:</span>
              თითოეული წამი მნიშვნელოვანია. სპორტსმენებს მაქსიმალურად სწრაფი და ტექნიკური შეჯიბრების
              შესრულება უწევთ.
            </li>
            <li>
              <span>სიზუსტე:</span>
              ყოველი გაფუჭებული მოძრაობა (მაგალითად, ბარიერის დამხობა) ქულების დაკარგვას ნიშნავს.
            </li>
            <li>
              <span>სიმაღლე:</span>
              დაბრკოლებების სიმაღლეები და სირთულეები შეჯიბრის დონეზეა დამოკიდებული.
            </li>
          </ul>
          <p>
            დაბრკოლებათა გადალახვა არა მხოლოდ სპორტული შეჯიბრებაა, არამედ მხედრისა და ცხენის
            უნიკალური ურთიერთობის გამოვლინება, სადაც ნდობა და ჰარმონია წარმატების გასაღებია. თუ
            გიყვართ ადრენალინი, სისწრაფე და დინამიკა, ეს სპორტი ნამდვილად გაგახარებთ და შთაგაგონებთ!
          </p>
        </div>
      </div>
      {/* Events */}
      <ShowjumpingEvents />
    </div>
  );
}
