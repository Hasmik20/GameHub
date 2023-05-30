import { Box, HStack, Heading, Text } from "@chakra-ui/react";
import { FaAngleLeft } from "react-icons/fa";

import {
  Link,
  isRouteErrorResponse,
  useRouteError
} from "react-router-dom";
import NavBar from "../components/NavBar";

const ErrorPage = () => {
  const error = useRouteError;

  return (
    <>
      <NavBar />
      <Box padding="10px">
        <Heading>Oops</Heading>
        <Text>
          {!isRouteErrorResponse(error)
            ? "This page does not exist"
            : "An unexpected error occurred"}
        </Text>
      </Box>
      <Link to="/">
        <HStack>
          <FaAngleLeft />
          <Text>Go Home </Text>
        </HStack>
      </Link>
    </>
  );
};

export default ErrorPage;
