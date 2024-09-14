import { H2, Paragraph } from "@components/typography";
import { Divider } from "@nextui-org/react";

const VisionSection = () => {
  return (
    <section className="flex flex-col md:flex-row container gap-14">
      <section className="md:w-[120px] leading-10">
        <H2 className="text-black-400 ">Our Vision</H2>
        <Divider className="bg-primary h-4 w-1/4 md:w-3/5 md:mt-6" />
      </section>
      <section className="xl:basis-4/5 pt-6">
        <Paragraph>
          We envision a community where every child has access to quality
          education, every widow has a safe place to call home, and the next
          generation of STEM leaders is nurtured and supported.
        </Paragraph>
      </section>
    </section>
  );
};

export default VisionSection;
