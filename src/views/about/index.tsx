import HeroSection from "@views/components/hero-section";
import VisionSection from "@views/components/vision-section";
import StaffSection from "./staff";
import { H2, Paragraph } from "@components/typography";
import { Divider } from "@nextui-org/react";
import { Icon } from "@iconify/react/dist/iconify.js";

const AboutPageView = () => {
  return (
    <main className="min-h-screen pb-20">
      {/* hero section */}
      <HeroSection
        title="About Us"
        description="We are a non-profit organization dedicated to uplifting the lives of young boys and girls in Gem East in Rangwe, HomaBay County through STEM education, building homes for widows, and sponsoring the education of vulnerable children. Together, we are creating opportunities, empowering communities, and fostering hope for a brighter future.  "
      />
      {/* vision */}
      <VisionSection />
      <section className="container my-[4rem]">
        <section className="flex justify-center flex-col items-center">
          {" "}
          <H2>Who we are</H2>
          <Divider className="bg-primary h-4 w-1/4  md:mt-4" />
        </section>

        <Paragraph className="py-5">
          Our organization was founded with a simple but profound goal: to
          empower the most vulnerable members of our community in Gem East in
          Rangwe, HomaBay County. We believe that through education, shelter,
          and community support, we can break the cycle of poverty and create
          lasting change. Our work focuses on three key areas:
          <div className="flex flex-col gap-2 px-5">
            <Paragraph>
              1. Promoting STEM education for young boys and girls
            </Paragraph>
            <Paragraph>
              2. Partnering with local churches to build homes for widows.
            </Paragraph>
            <Paragraph>
              3. Sponsoring the education of vulnerable children.
            </Paragraph>
          </div>
        </Paragraph>
      </section>

      <section className="container my-[4rem]">
        <section className="flex justify-center flex-col items-center">
          {" "}
          <H2> Our Values</H2>
          <Divider className="bg-primary h-4 w-1/4  md:mt-4" />
        </section>

        <div className="flex flex-col gap-2 py-[2rem] mx-[auto] w-[50%] ">
          <Paragraph className="flex items-center gap-3 text-primary-500">
            <Icon icon="lets-icons:check-fill" fontSize={25} />{" "}
            <span className="text-primary font-semibold"> Empowerment:</span>
            We believe in empowering individuals through education, skills, and
            resources.
          </Paragraph>

          <Paragraph className="flex items-center gap-3 text-primary-500">
            <Icon icon="lets-icons:check-fill" fontSize={25} />{" "}
            <span className="text-primary font-semibold"> Compassion:</span> We
            act with kindness and understanding to support those in need.
          </Paragraph>
          <Paragraph className="flex items-center gap-3 text-primary-500">
            <Icon icon="lets-icons:check-fill" fontSize={25} />{" "}
            <span className="text-primary font-semibold">Collaboration:</span>{" "}
            We work hand in hand with local communities and partners to drive
            change.
          </Paragraph>
        </div>
      </section>
      <StaffSection />
    </main>
  );
};

export default AboutPageView;
