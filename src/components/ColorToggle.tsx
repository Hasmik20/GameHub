import { HStack, Switch, useColorMode } from "@chakra-ui/react";

const ColorToggle = () => {
  const { colorMode, toggleColorMode } = useColorMode();
  return (
    <HStack>
      <Switch
        colorScheme="green"
        isChecked={colorMode === "light"}
        onChange={toggleColorMode}
      />
    </HStack>
  );
};

export default ColorToggle;
