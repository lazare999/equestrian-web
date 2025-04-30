import ShowjumpingEvents from "@/components/showjumping/showjumping-events/page";
import StableSlider from "@/components/stables/stable-slider/page";
import classes from "@/styles/homePage/homePage.module.css";

export default function Home() {
  return (
    <div className={classes.hero}>
      <div className={classes.sliderContainer}>
        {/* <h1>Discover Equestrian Adventures in Georgia</h1> */}
        <h1>აღმოაჩინეთ საცხენოსნო თავგადასავლები საქართველოში</h1>
        {/* <p>Explore stables, horse tours, competitions, and more.</p> */}
        <p>დაათვალიერე თავლები, ცხენის ტურები, შეჯიბრებები და სხვა.</p>
        {/* <button>Explore Now</button> */}
        <button>დაიწყე აქედან</button>
      </div>
      <div className={classes.welcomeLetterContainer}>
        <h1>Welcome letter</h1>
        <p>
          Dive into the thrilling world of equestrian adventures! Whether you're an experienced
          rider seeking your next challenge or a newcomer eager to explore, our platform is your
          ultimate guide. Discover Georgia's finest stables, exhilarating horse tours, prestigious
          showjumping competitions, and the excitement of horse racing. Join a vibrant community,
          learn the traditions, and embark on unforgettable journeys. Let the spirit of the horse
          inspire you — your adventure starts here!
        </p>
      </div>
      <h1 className={classes.title}>შეჯიბრები დაბრკოლებათა გადალახვაში</h1>
      <ShowjumpingEvents />
      <h1 className={classes.title}>თავლები</h1>
      <StableSlider />
    </div>
  );
}
