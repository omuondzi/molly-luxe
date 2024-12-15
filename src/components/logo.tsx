import { Image } from "@nextui-org/react";
import { Link } from "react-router-dom";

const MollyLogo = () => {
  return (
    <Link to="/">
      <Image src="/images/logo2.jpg" radius="none" className="max-w-[120px]" />
    </Link>
  );
};

export default MollyLogo;
