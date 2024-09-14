import { Subtitle, Subtitle2 } from "@components/typography";
import { Icon } from "@iconify/react/dist/iconify.js";
import { Button, Input } from "@nextui-org/react";
import { Controller, SubmitHandler, useForm } from "react-hook-form";
import { Link } from "react-router-dom";

type FooterLink = {
  label: string;
  path: string;
};

const FooterLinks: FooterLink[] = [
  {
    label: "Home",
    path: "",
  },
  {
    label: "About Us",
    path: "",
  },
  {
    label: "Get Involved",
    path: "",
  },
  {
    label: "Our Programs",
    path: "",
  },
  {
    label: "Contact Us",
    path: "",
  },
  {
    label: "Donate",
    path: "",
  },
];

type FormInputs = {
  email: string;
};

const LandingFooter = () => {
  const {
    control,
    formState: { errors },
    handleSubmit,
    reset,
  } = useForm<FormInputs>();

  const onSubmit: SubmitHandler<FormInputs> = (data) => {
    console.log(data);
    reset();
  };

  return (
    <footer className=" border-t-3">
      <section className="container py-6 grid md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-0">
        <div className="text-[#000000] font-mono font-extrabold text-[90px] pt-5">
          Luala
        </div>
        <div>
          <Subtitle className="text-primary font-semibold">
            Quick Links
          </Subtitle>
          <div className="pl-7 flex flex-col gap-3">
            {FooterLinks.map((link, index) => (
              <Link to={link.path} key={index}>
                {link.label}
              </Link>
            ))}
          </div>
        </div>
        <div>
          <Subtitle2 className="text-primary font-semibold">
            Subscribe to our monthly Newsletter
          </Subtitle2>
          <p className="text-[13px] text-primary-500">
            Get the latest on Luala Community Center every month
          </p>
          <form onSubmit={handleSubmit(onSubmit)}>
            <Controller
              name="email"
              control={control}
              rules={{
                required: {
                  value: true,
                  message: "Email is required",
                },
              }}
              render={({ field }) => (
                <Input
                  {...field}
                  placeholder="test@gmail.com"
                  startContent={<Icon icon="" />}
                  isInvalid={!!errors?.email}
                  errorMessage={errors?.email?.message}
                  className="my-3"
                />
              )}
            />
            <Button
              type="submit"
              variant="bordered"
              color="primary"
              radius="none"
            >
              Send
            </Button>
          </form>
        </div>
      </section>
    </footer>
  );
};

export default LandingFooter;
