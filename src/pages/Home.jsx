import { NavBar } from "../components/NavBar";
import SimpleSlider from "../components/BannerSlider";
import SectionMan from "../components/SectionMan";
import SectionWoman from "../components/SectionWoman";
import ContactUs from "../components/ContactUs";

function Home() {
  return (
    <>
      <NavBar />
      <SimpleSlider />
      <SectionMan />
      <SectionWoman />
      <ContactUs />
    </>
  );
}

export default Home;
