import { H2, Paragraph } from "@components/typography";
import { Icon } from "@iconify/react/dist/iconify.js";
import { Divider } from "@nextui-org/react";

const SponsorshipProgram = () => {
  return (
    <section className="container">
      <H2>Sponsorship Program</H2>
      <Divider className="bg-primary-200 h-2 w-1/4  md:mt-6" />

      <section>
        <Paragraph className="my-7">
          Many children in Gem East in Rangwe, HomaBay County face barriers to
          education due to financial constraints. Our sponsorship program
          ensures that vulnerable boys and girls can attend school, receive
          uniforms, and access learning materials.
        </Paragraph>
        <div className="flex flex-col gap-2 py-[2rem] mx-[auto] w-[90%] md:w-[50%] ">
          <Paragraph className="flex items-center gap-3 text-primary-500">
            <Icon icon="lets-icons:check-fill" fontSize={25} />{" "}
            <span className="text-primary font-semibold"> School Fees:</span>
            We cover tuition costs for students from vulnerable families.
          </Paragraph>

          <Paragraph className="flex items-center gap-3 text-primary-500">
            <Icon icon="lets-icons:check-fill" fontSize={25} />{" "}
            <span className="text-primary font-semibold">
              Holistic Support:
            </span>
            Beyond school fees, we provide mentorship and counseling to help
            students thrive.
          </Paragraph>
          <Paragraph className="flex items-center gap-3 text-primary-500">
            <Icon icon="lets-icons:check-fill" fontSize={25} />{" "}
            <span className="text-primary font-semibold">
              Success Stories:{" "}
            </span>{" "}
            Meet [Name], one of our sponsored students who is now pursuing a
            career in [STEM-related field].
          </Paragraph>
        </div>
        <Paragraph className="my-10 container">
          <span className="font-semibold">Call to action : </span>
          <i>“Sponsor a child today and give the gift of education.”</i>
        </Paragraph>
      </section>
    </section>
  );
};

export default SponsorshipProgram;
