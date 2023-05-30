import { Button, Menu, MenuButton, MenuItem, MenuList } from "@chakra-ui/react";
import { BsChevronDown } from "react-icons/bs";
import useGameQueryState from "../store";

const SortSelector = () => {
  const onSelect = useGameQueryState((s) => s.setSelect);
  const selectedOrder = useGameQueryState((s) => s.gameQueryState.select);

  const sortArr = [
    { value: "", label: "Relevance" },
    { value: "-added", label: "Date added" },
    { value: "name", label: "Name" },
    { value: "-released", label: "Release date" },
    { value: "-metacritic", label: "Popularity" },
    { value: "-rating", label: "Average rating" },
  ];

  const newOrder = sortArr.find((item) => item.value === selectedOrder);
  return (
    <Menu>
      <MenuButton as={Button} rightIcon={<BsChevronDown />}>
        Order by: {newOrder?.label || "Relevance"}
      </MenuButton>
      <MenuList>
        {sortArr.map((item) => (
          <MenuItem
            key={item.value}
            value={item.value}
            onClick={() => onSelect(item.value)}
          >
            {item.label}
          </MenuItem>
        ))}
      </MenuList>
    </Menu>
  );
};

export default SortSelector;
