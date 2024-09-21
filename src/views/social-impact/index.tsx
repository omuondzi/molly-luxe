import { H2, Paragraph } from "@components/typography";
import { Icon } from "@iconify/react/dist/iconify.js";
import { Divider } from "@nextui-org/react";
import HeroSection from "@views/components/hero-section";
import SuccessStrories from "./stories";

const SocialImpactPageView = () => {
  return (
    <main>
      <HeroSection
        cardActions
        title={"Our Impact"}
        description={
          "Luala community center serves as a vital hub for connection, learning, and support, fostering unity and growth among its members. It brings people together, offering resources and opportunities that promote personal development and collective well-being. Through its various programs and services, Luala community center strengthens bonds, encourages collaboration, and creates an inclusive environment where individuals of all ages can thrive."
        }
      />
      <section className="container my-7">
        <H2>Our Achievements</H2>
        <Divider className="bg-primary-200 h-2 w-1/4  md:mt-6" />

        <section>
          <Paragraph className="my-10 container flex items-center gap-3">
            <Icon icon="lets-icons:check-fill" fontSize={25} /> [X] children
            sponsored through our education program.
          </Paragraph>
          <Paragraph className="my-10 container flex items-center gap-3">
            <Icon icon="lets-icons:check-fill" fontSize={25} />
            [X] widows provided with new homes.
          </Paragraph>
          <Paragraph className="my-10 container flex items-center gap-3">
            <Icon icon="lets-icons:check-fill" fontSize={25} />
            [X] STEM workshops conducted, reaching over [X] students.
          </Paragraph>
        </section>
      </section>
      <SuccessStrories />
    </main>
  );
};

export default SocialImpactPageView;
