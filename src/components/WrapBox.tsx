import { Box } from "@chakra-ui/react";
import { ReactNode } from "react";

interface Props {
  children: ReactNode;
}
const WrapBox = ({ children }: Props) => {
  return (
    <Box borderRadius="5px" overflow="hidden">
      {children}
    </Box>
  );
};

export default WrapBox;
