import {
  Button,
  GridItem,
  Heading,
  SimpleGrid,
  Spinner,
  Text,
} from "@chakra-ui/react";
import { useState } from "react";
import { useParams } from "react-router-dom";
import DefinitionItem from "../components/DefinitionItem";
import GameScreenShot from "../components/GameScreenShot";
// import Trailer from "../components/Trailer";
import useDetails from "../hooks/useDetails";

const GameDetailsPage = () => {
  const [showMore, setShowMore] = useState(false);
  const { slug } = useParams();
  const { data: game, isLoading, error } = useDetails(slug!);

  if (isLoading) return <Spinner />;

  if (error || !game) throw error;
  let text =
    !showMore && game.description_raw?.length > 400
      ? game.description_raw.slice(0, 400) + "..."
      : game.description_raw;
  return (
    <SimpleGrid columns={{ base: 1, md: 2 }} spacing={5}>
      <GridItem>
        <Heading> {game.name}</Heading>
        <Text>
          {text}
          <Button
            size="xs"
            fontWeight="bold"
            colorScheme="yellow"
            margin={1}
            onClick={() => setShowMore(!showMore)}
          >
            {showMore ? "Show less" : "Read more"}
          </Button>{" "}
        </Text>
        <SimpleGrid columns={2} as="dl">
          <DefinitionItem term="Platforms">
            {game.parent_platforms?.map((item) => (
              <Text key={item.platform.id}>{item.platform.name}</Text>
            ))}
          </DefinitionItem>
          <DefinitionItem term="Genre">
            {game.genres?.map((item) => (
              <Text key={item.id}>{item.name}</Text>
            ))}
          </DefinitionItem>
        </SimpleGrid>
      </GridItem>
      <GridItem>
        {/* <Trailer gameId={game.id} /> */}
        <GameScreenShot id={game.id} />
      </GridItem>
    </SimpleGrid>
  );
};

export default GameDetailsPage;
