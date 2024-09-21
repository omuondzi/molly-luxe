import HeroSection from "@views/components/hero-section";
import SponsorshipProgram from "./sponsorship";
import STemProgram from "./stem";
import WidowsProgram from "./widows";
import { H2, Paragraph } from "@components/typography";
import { Divider } from "@nextui-org/react";

const OurProgramsPageView = () => {
  return (
    <main className="">
      <HeroSection
        cardActions
        title={"Our Programs"}
        description={
          "Our programs uplift communities through education and support. The STEM Empowerment initiative engages youth in science and technology, while the Building Homes for Widows project provides safe housing for those in need. The Sponsorship Program helps vulnerable children access education by covering school fees and offering mentorship. Together, we create lasting positive change."
        }
      />
      <section className="container my-8">
        <H2>
          Our <i>Programs</i>
        </H2>
        <Divider className="bg-primary h-4 w-1/4  md:mt-6" />
        <Paragraph className="py-7">
          {" "}
          Our programs focus on empowering communities through education,
          shelter, and support. Our STEM Empowerment initiative engages young
          learners in science, technology, engineering, and mathematics through
          workshops, mentorship, and school outreach. The Building Homes for
          Widows project provides safe and secure housing for widows in need,
          restoring dignity and hope. Our Sponsorship Program ensures that
          children from vulnerable backgrounds in Gem East, HomaBay County, can
          access education by covering school fees, providing uniforms, and
          offering mentorship. Through these programs, we aim to create lasting
          positive impact and uplift those in need.
        </Paragraph>
      </section>

      <STemProgram />
      <WidowsProgram />
      <SponsorshipProgram />
    </main>
  );
};

export default OurProgramsPageView;
