import { Box, Flex, Grid, GridItem, Show } from "@chakra-ui/react";
import GameGrid from "../components/GameGrid";
import Genre from "../components/Genre";
import HeadingTitle from "../components/Heading";
import Platform from "../components/Platform";
import SortSelector from "../components/SortSelector";

const HomePage = () => {
  return (
    <Grid
      templateAreas={{
        base: ` " main"`,
        lg: `"aside main"`,
      }}
      templateColumns={{
        base: "1fr",
        lg: "200px 1fr",
      }}
    >
      <Show above="lg">
        <GridItem area={"aside"} paddingX={5}>
          <Genre />
        </GridItem>
      </Show>
      <GridItem area={"main"}>
        <Box marginLeft={2}>
          <HeadingTitle />
          <Flex marginBottom={4}>
            <Box marginRight={2}>
              <Platform />
            </Box>
            <SortSelector />
          </Flex>
        </Box>
        <GameGrid />
      </GridItem>
    </Grid>
  );
};

export default HomePage;
