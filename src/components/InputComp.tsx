import { Input, InputGroup } from "@chakra-ui/react";
import { useRef } from "react";
import { useNavigate } from "react-router-dom";
import useGameQueryState from "../store";

const InputComp = () => {
  const refInput = useRef<HTMLInputElement>(null);
  const setSearch = useGameQueryState((s) => s.setSearch);
  const navigate = useNavigate();
  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        if (refInput.current) {
          setSearch(refInput.current.value);
          navigate("/");
        }
      }}
    >
      <InputGroup>
        {/* <InputLeftAddon children={<BsSearch />} /> */}
        <Input
          ref={refInput}
          placeholder="Search game..."
          variant="filled"
          borderRadius={20}
        />
      </InputGroup>
    </form>
  );
};

export default InputComp;
