import { H2, Paragraph } from "@components/typography";

const MissionCard = () => {
  return (
    <section className="container  bg-grayish text-center py-10 lg:py-20 px-5 md:px-8 lg:px-10 -mt-20 mb-16 z-[999]">
      <H2>
        Our <span className="italic">Mission</span>
      </H2>
      <Paragraph className="max-w-[900px] mt-5 mx-auto">
        Our mission is to provide a brighter future for the people of Gem East
        in Rangwe, HomaBay County by equipping young boys and girls with the
        tools they need to succeed in STEM fields, ensuring widows have safe
        homes, and making sure no child misses out on education due to financial
        hardship.
      </Paragraph>
    </section>
  );
};

export default MissionCard;
