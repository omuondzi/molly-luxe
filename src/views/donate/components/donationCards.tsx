import { Paragraph, Subtitle2 } from "@components/typography";
import { Button, Card, CardBody, CardFooter, Divider } from "@nextui-org/react";

export type Donation = { title: string; description: string; amount: string };
interface DonationCardProps {
  donation: Donation;
}
const DonationCards = ({ donation }: DonationCardProps) => {
  return (
    <Card radius="none">
      <CardBody>
        <Subtitle2 className="font-semibold text-primary ">
          {donation.title}
        </Subtitle2>
        <p className="text-primary-500">{donation.description}</p>
        <h2 className="font-semibold pt-5">{donation.amount}</h2>
        <Divider className="bg-primary-500 h-1 w-3/4  md:mb-6" />
      </CardBody>
      <CardFooter className="flex justify-between">
        <Paragraph>One-time-donation</Paragraph>
        <Button isDisabled color="primary">
          Donate
        </Button>
      </CardFooter>
    </Card>
  );
};

export default DonationCards;
