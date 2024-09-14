import { H2, Paragraph, Subtitle2 } from "@components/typography";
import { Button, Divider } from "@nextui-org/react";
import { Link } from "react-router-dom";

const Programs = () => {
  type Program = {
    title: string;
    subtitle: string;
    description: string;
  };
  const programs: Program[] = [
    {
      title: "STEM Education",
      subtitle: "Empowering Through Knowledge",
      description:
        "Our STEM education programs aim to equip young minds with the skills and knowledge needes to thrive in the fields of Science",
    },
    {
      title: "Home For Widows",
      subtitle: "Providing shelter and support",
      description:
        "We are dedicated to building homes for widows in need, offering them a safe and comfortable living environment. Through this initiatie, we strive to provide stability and care for those who have lost their spouses, ensuring they have a place to call home.",
    },
    {
      title: "Education Sponsorship",
      subtitle: "Investing in Brighter Futures",
      description:
        "Our education sponsorship programs support vulnerable children by covering their educational expenses, including school fees, supplies and uniforms. By investing in their education, we aim to break the cycle of poverty ans empower them to achieve their dreams.",
    },
    {
      title: "Community Support",
      subtitle: "Together We Can Make a Difference",
      description:
        "Through community support initiatives we engage with well wishers and volunteers to create a network of individuals dedicated to imprving the lives of young boys and girls in Gem East. Together, we can make a lasting impact and bring positive change to the community",
    },
  ];
  return (
    <section className="px-[10%] my-10">
      <H2>
        Our <i>Programs</i>
      </H2>
      <Divider className="bg-primary h-4 w-1/4  md:mt-6" />

      <section className="grid grid-cols-[30%,70%]">
        <section className="flex flex-row items-end">
          <Button
            radius="none"
            className="my-6 text-white py-6 px-10 bg-primary-500"
            size="lg"
            as={Link}
            to="/get-involved"
          >
            Learn more
          </Button>
        </section>{" "}
        <section className="grid grid-cols-2 gap-8 ">
          {programs.map((program, index) => (
            <div key={index} className="my-3">
              <Divider className="bg-primary-500 h-1 w-3/4  md:mt-6" />
              <h2 className="text-xl font-bold py-3"> {program.title}</h2>

              <Subtitle2 className="text-primary-300 ">
                {program.subtitle}
              </Subtitle2>

              <Paragraph className="py-2">{program.description}</Paragraph>
            </div>
          ))}
        </section>
      </section>
    </section>
  );
};

export default Programs;
