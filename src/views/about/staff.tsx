import { H2 } from "@components/typography";
import { Image } from "@nextui-org/react";
import { staffMembers } from "data/about";

const StaffSection = () => {
  return (
    <section className="py-10">
      <section className="my-10">
        <H2 className="text-center text-purple">Staff Members</H2>
        <section className="container grid md:grid-cols-3 gap-3 my-10">
          {staffMembers.map((staff: any) => (
            <div key={staff.name} className="flex flex-col items-center gap-2">
              <Image src="/images/about/dp.jpg" radius="full" />
              <span className="font-semibold">{staff.name}</span>
              <span>{staff.post}</span>
            </div>
          ))}
        </section>
      </section>
    </section>
  );
};

export default StaffSection;
