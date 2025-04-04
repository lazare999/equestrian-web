import Image from "next/image";

import classes from "@/styles/horse-race/horseRace.module.css";

export default function HorseRacePage() {
  return (
    <div className={classes.container}>
      <div className={classes.coverContainer}>
        <h1 className={classes.title}>აღმოაჩინე დოღები საქართველოში</h1>
      </div>
      <div className={classes.welcomeLetterContainer}>
        <h1>მოკლე ისტორია ქართული დოღების წარსულზე</h1>
        <p>
          საქართველოში დოღი (ხევსურეთში „ცხენნი“, „ცხენდოღვი“, თუშეთში „სადგინი“ და სხვა),
          მიცვალებულის ხსოვნის პატივსაცემად გამართული ცხენ-მხედართა შეჯიბრება, გავრცელებული იყო
          ხევსურეთში, ფშავში, თუშეთში, მთიულეთში, გუდამაყარში, ხევში, სამეგრელოში, აფხაზეთში და
          სხვაგან. ხევსურეთში დოღი იმართებოდა გვიან გაზაფხულსა და ზაფხულში; მონაწილე ცხენების რიცხვი
          კენტი იყო (5-იდან 35-მდე). მათ საგანგებოდ უვლიდნენ და კვებავდნენ; ძუა-ფაფარი დაწნული და
          ფერადი ძაფებით შეკრული ჰქონდათ, თავ-კისერზე მძივღილით გამართული საფაფრე და საშუბლე ეკეთათ.
          უნაგირით მხოლოდ „სულის ცხენი“ (მიცვალებულისათვის დაკურთხებული) იყო შეკაზმული. დოღის ანუ
          „ცხენრბოლების“ დღეს ტაბლის დალოცვის შემდეგ რიგში დაწყობილი მხედრები „სულის ცხენის“
          წინამძღოლობით სამჯერ შემოუვლიდნენ ფარდაგზე გაშლილ მიცვალებულის „ტალავართ“ (სამოსელს) და
          გაემართებოდნენ მიცვალებულის ნათესავების სოფლებისაკენ. „ჭირის პატრონის“ ნათესავი მხედრებს
          ტაბლას უდგამდა. ბოლო ტაბლიდან მხედრები „ჭირის პატრონის“ სოფელში ბრუნდებოდნენ. აქედან
          იწყებოდა ნამდვილი შეჯიბრება. თუ შორი გზა ჰქონდათ გამოსავლელი, მათ „მეგობრები“ — სხვა
          მხედრები ცვლიდნენ. გამარჯვებულ მხედრებს „ჭირის პატრონის“ სოფელში ჯილდოს (საქონელი, იარაღი,
          ტანსაცმელი და სხვა) ურიგებდნენ.
        </p>
      </div>
    </div>
  );
}
