import { HStack, Image } from "@chakra-ui/react";
import logo from "../assets/Logo/logo.webp";
import ColorToggle from "./ColorToggle";
import InputComp from "./InputComp";
import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <HStack justifyContent="space-between" padding="10px">
      <Link to="/">
        <Image src={logo} boxSize="60px" objectFit="cover" />
      </Link>
      <InputComp />
      <ColorToggle />
    </HStack>
  );
};

export default NavBar;
