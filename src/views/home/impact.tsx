import { H2, Paragraph, Subtitle } from "@components/typography";
import { Icon } from "@iconify/react/dist/iconify.js";

import { Link as RouterLink } from "react-router-dom";
const SOCIALIMPACT = [
  "[x] Children sponsored through our education program",
  "[X] widows provided with new homes.  ",
  "[X] STEM workshops conducted, reaching over [X] students",
];
const ImpactSection = () => {
  return (
    <section className="bg-primary-600 py-24 text-center text-white">
      <section className="container max-w-[950px]">
        <H2>
          Our <i>Impact</i>
        </H2>
        <Paragraph className="max-w-[600px] mt-4 mb-10 mx-auto">
          We are proud of the progress we’ve made in Gem East in Rangwe, HomaBay
          County, thanks to the support of our donors and volunteers. Here are
          some of our key achievements:
        </Paragraph>

        <section className="flex flex-col">
          {SOCIALIMPACT.map((impact) => (
            <RouterLink key={impact} className="text-white" to="/social-impact">
              <section className="flex w-full justify-between items-center px-8 border-4 my-4 py-6">
                <Subtitle className="font-semibold text-start">
                  {impact}
                </Subtitle>

                <Icon className="text-white" icon="ep:arrow-right-bold" />
              </section>
            </RouterLink>
          ))}
        </section>
      </section>
    </section>
  );
};

export default ImpactSection;
