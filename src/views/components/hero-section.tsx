import { H1, Subtitle2 } from "@components/typography";
import { Button } from "@nextui-org/react";

import { Link } from "react-router-dom";

interface HeroSectionProps {
  title: string;
  description: string;
  background: string;
  cardActions?: boolean;
}

const HeroSection = ({ description, title, background }: HeroSectionProps) => {
  return (
    <section>
      <section
        style={{
          backgroundColor: "rgba(0,0,0,0.5)",
          backgroundBlendMode: "overlay",
          backgroundImage: `url(${background})`,
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",
        }}
        className="min-h-[60vh] lg:min-h-[90vh]  flex items-center justify-center flex-col text-center "
      >
        <section className="container">
          <section className="md:container flex flex-col gap-5 ">
            <H1 className="text-grayish font-molly">{title}</H1>
            <Subtitle2 className="md:w-2/3 lg:w-1/2 md:mx-auto">
              {description}
            </Subtitle2>
            <Button
              size="lg"
              color="primary"
              radius="none"
              className="self-center px-16 py-8"
              as={Link}
              to="/"
            >
              Shop now
            </Button>
          </section>
        </section>
      </section>
    </section>
  );
};

export default HeroSection;
