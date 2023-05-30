import { Box, Flex, Grid, GridItem, Show } from "@chakra-ui/react";
import GameGrid from "./components/GameGrid";
import Genre from "./components/Genre";
import Heading from "./components/Heading";
import NavBar from "./components/NavBar";
import Platform from "./components/Platform";
import SortSelector from "./components/SortSelector";

// export interface GameQuery {
//   genre: GenreType | null;
//   platform: PlatformType | null;
//   select: string;
//   searchGame: string;
// }

function App() {
  return (
    <Grid
      templateAreas={{
        base: `"nav" " main"`,
        lg: `"nav nav" "aside main"`,
      }}
      templateColumns={{
        base: "1fr",
        lg: "200px 1fr",
      }}
    >
      <GridItem area={"nav"}>
        <NavBar />
      </GridItem>
      <Show above="lg">
        <GridItem area={"aside"} paddingX={5}>
          <Genre />
        </GridItem>
      </Show>
      <GridItem area={"main"}>
        <Box marginLeft={2}>
          <Heading />
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
}

export default App;
