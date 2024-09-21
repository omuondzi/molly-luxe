import { H2, Paragraph } from "@components/typography";
import { Divider, Image } from "@nextui-org/react";

const WidowsProgram = () => {
  return (
    <section className="container my-[5rem]">
      <H2>Building Homes For Widows</H2>
      <Divider className="bg-primary-200 h-2 w-1/4  md:mt-6" />
      <section>
        <Image
          src="/images/widows.jpg"
          className="my-6  h-[200px] md:h-[400px] w-[300px] md:w-[500px]"
        />
        <Paragraph className="my-7">
          Widows in Gem East in Rangwe, HomaBay County often face extreme
          hardship. Through our partnership with local churches, we build safe
          and secure homes for widows who have lost their families’ primary
          breadwinner. A home provides more than shelter—it offers dignity and
          hope.
        </Paragraph>
        <Paragraph className="my-10 container">
          <span className="font-semibold">How it works : </span>
          <i>
            “ We identify widows in need, mobilize volunteers, and construct
            homes through community-driven efforts. ”
          </i>
        </Paragraph>
        <Paragraph className="my-10 container">
          <span className="font-semibold">Impact : </span>
          <i>
            “ To date, we have built [number] homes, providing security and
            stability for widows in the region. ”
          </i>
        </Paragraph>
        <Paragraph className="my-10 container">
          <span className="font-semibold">Call to action : </span>
          <i>“Help us build more homes—your donation can change a life”</i>
        </Paragraph>
      </section>
    </section>
  );
};

export default WidowsProgram;
