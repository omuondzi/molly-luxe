import { Image } from "@nextui-org/react";
import { Link } from "react-router-dom";

const CredLogo = () => {
	return (
		<Link to="/">
			<Image src="/logo.png" radius="none" className="max-w-[120px]" />
		</Link>
	);
};

export default CredLogo;
