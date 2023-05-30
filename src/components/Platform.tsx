import { Button, Menu, MenuButton, MenuItem, MenuList } from "@chakra-ui/react";
import { BsChevronDown } from "react-icons/bs";

import usePlatform from "../hooks/usePlatform";
import useGameQueryState from "../store";

const Platform = () => {
  const { data: platforms, error } = usePlatform();
  const onSelect = useGameQueryState((s) => s.setPlatform);
  const platform = useGameQueryState((s) => s.gameQueryState.platform);
  if (error) return null;

  return (
    <Menu>
      <MenuButton as={Button} rightIcon={<BsChevronDown />}>
        {platform?.name || "Platforms"}
      </MenuButton>
      <MenuList>
        {platforms?.results.map((item) => (
          <MenuItem key={item.id} onClick={() => onSelect(item)}>
            {item.name}
          </MenuItem>
        ))}
      </MenuList>
    </Menu>
  );
};

export default Platform;
