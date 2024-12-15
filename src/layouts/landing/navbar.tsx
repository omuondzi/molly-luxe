import { NavLink } from "react-router-dom";
import clsx from "clsx";
import { Icon } from "@iconify/react";
import { NavItems } from "./config";
import { useState } from "react";

import Drawer from "react-modern-drawer";
import "react-modern-drawer/dist/index.css";
import MollyLogo from "@components/logo";

const LandingNavbar = () => {
  const [shouldShowSidebar, setShowSidebar] = useState<boolean>(false);

  const updateDrawer = () => setShowSidebar((prev) => !prev);

  return (
    <nav className="bg-secondary ">
      <section className="container flex justify-between items-center gap-10">
        <section className="">
          <MollyLogo />
        </section>

        <section className="lg:hidden">
          <Icon
            icon="ci:hamburger-lg"
            className="text-primary cursor-pointer"
            fontSize={40}
            onClick={updateDrawer}
          />
        </section>

        <section className="hidden lg:block ">
          <NavItemsWrapper />
        </section>
      </section>
      <Drawer
        onClose={() => setShowSidebar(false)}
        direction="left"
        open={shouldShowSidebar}
        size={300}
      >
        <section className="px-3 mt-6  flex flex-col gap-2">
          <NavItemsWrapper updateDrawer={updateDrawer} />
        </section>
      </Drawer>
    </nav>
  );
};

export default LandingNavbar;

interface NavItemsWrapperProps {
  updateDrawer?: () => void;
}

const NavItemsWrapper = ({ updateDrawer }: NavItemsWrapperProps) => {
  return (
    <section className="flex flex-col lg:flex-row lg:items-center justify-between  gap-3 lg:gap-x-[6rem]">
      {NavItems.map((item, idx) => {
        return (
          <NavLink
            key={idx}
            to={item.path}
            className={({ isActive }: any) =>
              clsx(
                "text-sm xl:text-lg text-primary font-semibold",
                isActive && "underline"
              )
            }
            onClick={() => updateDrawer && updateDrawer()}
            end
          >
            {item.label}
          </NavLink>
        );
      })}
    </section>
  );
};
