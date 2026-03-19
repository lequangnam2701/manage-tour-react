import FlightSearchHero from "../../website/home/FlightSearchHero";
import PopularDestinations from "../../website/home/PopularDestinations";
import TopDestinationBanner from "../../website/home/TopDestinationBanner";
import TopTours from "../../website/home/TopTours";
import TravelGuide from "../../website/home/TravelGuide";
import TourSection from "../../website/home/TourSection";
function Home() {
  return (
    <div>
      <FlightSearchHero />
      <PopularDestinations />
      <TopDestinationBanner />
      <TopTours />
      <TourSection />
      <TravelGuide />
    </div>
  );
}

export default Home;
