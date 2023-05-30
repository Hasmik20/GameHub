import { Heading } from "@chakra-ui/react";
import useGameQueryState from "../store";

const HeadingTitle = () => {
  const genre = useGameQueryState((s) => s.gameQueryState.genre);
  const platform = useGameQueryState((s) => s.gameQueryState.platform);

  const title = `${genre?.name || ""} ${platform?.name || ""} Games`;

  return (
    <Heading as="h2" marginBottom={5}>
      {title}
    </Heading>
  );
};

export default HeadingTitle;
