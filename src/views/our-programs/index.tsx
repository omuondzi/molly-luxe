import HeroSection from "@views/components/hero-section";
import SponsorshipProgram from "./sponsorship";
import STemProgram from "./stem";
import WidowsProgram from "./widows";

const OurProgramsPageView = () => {
  return (
    <main className="">
      <HeroSection cardActions title={"OUR PROGRAMS"} description={""} />
      <STemProgram />
      <WidowsProgram />
      <SponsorshipProgram />
    </main>
  );
};

export default OurProgramsPageView;
