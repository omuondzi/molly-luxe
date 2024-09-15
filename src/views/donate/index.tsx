import HeroSection from "@views/components/hero-section";
import DonationCards, { Donation } from "./components/donationCards";
import { H2, Paragraph } from "@components/typography";
import { Divider, Tab, Tabs } from "@nextui-org/react";
import { Icon } from "@iconify/react/dist/iconify.js";

const DonatePageView = () => {
  const donations: Donation[] = [
    {
      title: "$50 Donation",
      description: "Sponsors a child’s school fees for one month.  ",
      amount: "50$",
    },
    {
      title: "$200 Donation",
      description: " Provides materials to build a home for a widow.  ",
      amount: "$200",
    },
    {
      title: "$500 Donation",
      description: "Funds a STEM workshop for a local school.  ",
      amount: "$500",
    },
  ];
  return (
    <main>
      <HeroSection
        cardActions
        title="Donate to our Course"
        description="Join Us in transforming lives through Education, Shelter and Community Support"
      />
      <section className="container my-6">
        <H2>
          Our <i>Donation</i> Scheme
        </H2>
        <Divider className="bg-primary-200 h-2 w-1/4  md:mt-6" />
        <div className=" my-12 grid grid-cols-3 gap-[5%]">
          {donations.map((donation: Donation) => (
            <DonationCards donation={donation} />
          ))}
        </div>
      </section>
      <section className="container my-[5rem] flex flex-col items-center justify-center">
        <H2>Choose Payment Method</H2>
        <Tabs color="primary">
          <Tab key="mpesa" title="M-Pesa">
            <section className="grid grid-cols-3 gap-8">
              <div className="border-2 border-dotted p-4 rounded-lg">
                <Icon icon="teenyicons:tick-circle-solid" fontSize={30} />
                <h3 className="font-semibold py-2">Select a donation</h3>
                <Paragraph className="text-primary-500 py-1">
                  Choose your suitable donation scheme.
                </Paragraph>
              </div>

              <div className="border-2 border-dotted p-4 rounded-lg">
                <Icon icon="game-icons:swipe-card" fontSize={30} />
                <h3 className="font-semibold py-2">
                  Enter Payment Information
                </h3>
                <Paragraph className="text-primary-500 py-1">
                  Select Lipa na M-Pesa
                </Paragraph>
                <Paragraph className="text-primary-500 py-1">
                  Use Business Number <span className="font-bold">######</span>
                </Paragraph>
                <Paragraph className="text-primary-500 py-1">
                  Account Number
                </Paragraph>
                <Paragraph className="text-primary-500 font-bold">
                  ######
                </Paragraph>
                <Paragraph className="text-primary-500 py-1">
                  Enter the amount you would wish to spend
                </Paragraph>
              </div>

              <div className="border-2 border-dotted p-4 rounded-lg">
                <Icon icon="teenyicons:tick-circle-solid" fontSize={30} />
                <h3 className="font-semibold py-2">Confirm Donation</h3>
                <Paragraph className="text-primary-500 py-1">
                  Confirm your M-pesa pin
                </Paragraph>
                <Paragraph className="text-primary-500 py-1">Send</Paragraph>
                <Paragraph className="text-primary-500 py-1">
                  {" "}
                  You will receive an M-Pesa confirmation message confirming
                  your payment to <span className="font-bold"> #######</span>
                </Paragraph>
              </div>
            </section>
          </Tab>
          <Tab key="bank" title="Bank Transfer">
            <section className="grid grid-cols-3 gap-8">
              <div className="border-2 border-dotted p-4 rounded-lg">
                <Icon icon="teenyicons:tick-circle-solid" fontSize={30} />
                <h3 className="font-semibold py-2">Select a donation</h3>
                <Paragraph className="text-primary-500 py-1">
                  Choose your suitable donation scheme.
                </Paragraph>
              </div>
              <div className="border-2 border-dotted p-4 rounded-lg">
                <Icon icon="game-icons:swipe-card" fontSize={30} />
                <h3 className="font-semibold py-2">
                  Enter payment information
                </h3>
                <Paragraph className="text-primary-500 py-1">
                  Bank :<span className="font-bold">######</span>
                </Paragraph>
                <Paragraph className="text-primary-500 py-1">
                  Account Name :<span className="font-bold">######</span>
                </Paragraph>
                <Paragraph className="text-primary-500 py-1">
                  Account Number :<span className="font-bold">######</span>
                </Paragraph>
              </div>

              <div className="border-2 border-dotted p-4 rounded-lg">
                <Icon icon="teenyicons:tick-circle-solid" fontSize={30} />
                <h3 className="font-semibold py-2">Confirm Donation</h3>
                <Paragraph className="text-primary-500 py-1">
                  Review your donation details and submit to finalize the
                  process.
                </Paragraph>
              </div>
            </section>
          </Tab>
        </Tabs>
      </section>
    </main>
  );
};

export default DonatePageView;
