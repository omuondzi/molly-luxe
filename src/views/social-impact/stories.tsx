import { H2 } from "@components/typography";
import { Divider, Image } from "@nextui-org/react";

type Story = {
  image: string;
  name: string;
  testimony: string;
};
const stories: Story[] = [
  {
    image: "/images/about/dp.jpg",
    name: "John Doe",
    testimony:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quas perferendis officia saepe recusandae, non libero consequatur facilis repudiandae. Fugit dolor quam tempore dolorem laboriosam repellendus molestiae velit quos quidem mollitia.",
  },
  {
    image: "/images/about/dp.jpg",
    name: "John Doe",
    testimony:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quas perferendis officia saepe recusandae, non libero consequatur facilis repudiandae. Fugit dolor quam tempore dolorem laboriosam repellendus molestiae velit quos quidem mollitia.",
  },
  {
    image: "/images/about/dp.jpg",
    name: "John Doe",
    testimony:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quas perferendis officia saepe recusandae, non libero consequatur facilis repudiandae. Fugit dolor quam tempore dolorem laboriosam repellendus molestiae velit quos quidem mollitia.",
  },
];
const SuccessStrories = () => {
  return (
    <section className="container py-[2rem]">
      <H2>Success Stories</H2>
      <Divider className="bg-primary-200 h-2 w-1/4  md:mt-6" />
      <div className="grid grid-cols-3 gap-8">
        {stories.map((story, index) => (
          <div key={index} className="flex flex-col items-center gap-2 my-5">
            <Image src={story.image} radius="full" />
            <span className="font-semibold">{story.name}</span>
            <span>
              <i>"{story.testimony}"</i>
            </span>
          </div>
        ))}
      </div>
    </section>
  );
};

export default SuccessStrories;
