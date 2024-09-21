import { H2, Paragraph } from "@components/typography";
import { Icon } from "@iconify/react/dist/iconify.js";
import { Divider } from "@nextui-org/react";
import HeroSection from "@views/components/hero-section";

const GetInvolvedPageView = () => {
  return (
    <main>
      <HeroSection cardActions title={"Get Involved"} description={""} />
      <section className="container my-10 ">
        <H2>Volunteer Opportunities</H2>
        <Divider className="bg-primary-200 h-2 w-1/4 " />
        <section>
          <Paragraph className="my-3">
            Whether you are a professional in STEM, a skilled builder, or simply
            passionate about helping others, we have opportunities for you to
            make a difference.{" "}
          </Paragraph>
          <div className="flex flex-col gap-2 py-[2rem] mx-[auto] w-[90%] lg:w-[50%] ">
            {" "}
            <Paragraph className="md:flex items-center gap-3 text-primary-500">
              <Icon icon="lets-icons:check-fill" fontSize={25} />{" "}
              <span className="text-primary font-semibold">
                STEM Mentorship:
              </span>
              Share your knowledge and experience with young learners through
              workshops or virtual mentoring.
            </Paragraph>{" "}
            <Paragraph className="md:flex items-center gap-3 text-primary-500">
              <Icon icon="lets-icons:check-fill" fontSize={25} />{" "}
              <span className="text-primary font-semibold">
                House Building:
              </span>
              Join us on-site to help construct homes for widows in need.
            </Paragraph>{" "}
            <Paragraph className="md:flex items-center gap-3 text-primary-500">
              <Icon icon="lets-icons:check-fill" fontSize={25} />{" "}
              <span className="text-primary font-semibold">Fundraising:</span>
              Host events or campaigns to raise money for our programs.
            </Paragraph>
          </div>
          <Paragraph className="my-10 container">
            <span className="font-semibold">Call to action : </span>
            <i>“Become a volunteer and make a lasting impact.”</i>
          </Paragraph>
        </section>
      </section>
    </main>
  );
};

export default GetInvolvedPageView;
