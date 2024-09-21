import { H2, Paragraph } from "@components/typography";
import { Icon } from "@iconify/react/dist/iconify.js";
import { Divider, Image } from "@nextui-org/react";

const STemProgram = () => {
  return (
    <section className="container my-[3rem]">
      <H2>STEM Empowerment</H2>
      <Divider className="bg-primary-200 h-2 w-1/4  md:mt-6" />
      <Image
        src="/images/stem.jpg"
        className="my-6  h-[200px] md:h-[400px] w-[300px] md:w-[500px]"
      />
      <section>
        <Paragraph className="my-7">
          Our STEM program is designed to spark curiosity and ignite passion for
          science, technology, engineering, and mathematics in young boys and
          girls. We provide hands-on workshops, mentorship, and resources to
          help students develop critical thinking, problem-solving skills, and
          creativity.
        </Paragraph>
        <div className="flex flex-col gap-2 py-[2rem] mx-[auto] w-[90%] md:w-[50%] ">
          <Paragraph className="flex items-center gap-3 text-primary-500">
            <Icon icon="lets-icons:check-fill" fontSize={25} />{" "}
            <span className="text-primary font-semibold"> Workshops:</span>
            Students participate in coding, robotics, and science experiments.
          </Paragraph>

          <Paragraph className="flex items-center gap-3 text-primary-500">
            <Icon icon="lets-icons:check-fill" fontSize={25} />{" "}
            <span className="text-primary font-semibold"> Mentorship: </span> We
            connect students with professionals in STEM fields for guidance and
            support.
          </Paragraph>
          <Paragraph className="flex items-center gap-3 text-primary-500">
            <Icon icon="lets-icons:check-fill" fontSize={25} />{" "}
            <span className="text-primary font-semibold">Outreach: </span> Our
            team visits schools to introduce STEM opportunities to young
            learners
          </Paragraph>
        </div>{" "}
        <Paragraph className="my-10 container">
          <span className="font-semibold">Call to action : </span>
          <i>
            “ Learn more about our STEM program and how you can get involved.”
          </i>
        </Paragraph>
      </section>
    </section>
  );
};

export default STemProgram;
