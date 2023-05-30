import { Box, Button, SimpleGrid, Text } from "@chakra-ui/react";
import React from "react";
import useGame from "../hooks/useGame";
import GameCard from "./GameCard";
import LoadingSkeleton from "./LoadingSkeleton";
import WrapBox from "./WrapBox";

const GameGrid = () => {
  const {
    data: games,
    error,
    isLoading,
    fetchNextPage,
    hasNextPage,
    isFetchingNextPage,
  } = useGame();
  const skeletonArr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

  if (error) return <Text>{error.message}</Text>;

  return (
    <Box padding="5px">
      <SimpleGrid columns={{ sm: 1, md: 2, lg: 3, xl: 3 }} spacing={5}>
        {isLoading &&
          skeletonArr.map((item) => (
            <WrapBox key={item}>
              <LoadingSkeleton />{" "}
            </WrapBox>
          ))}
        {games?.pages.map((p, index) => (
          <React.Fragment key={index}>
            {p.results.map((item) => (
              <WrapBox key={item.id}>
                <GameCard game={item} />
              </WrapBox>
            ))}
          </React.Fragment>
        ))}
      </SimpleGrid>
      {hasNextPage && (
        <Button marginY={5} onClick={() => fetchNextPage()}>
          {isFetchingNextPage ? "Loading..." : "Load more"}
        </Button>
      )}
    </Box>
  );
};

export default GameGrid;
