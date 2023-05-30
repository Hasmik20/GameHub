import {
  Button,
  HStack,
  Heading,
  Image,
  List,
  ListItem,
  Spinner,
} from "@chakra-ui/react";
import useganre from "../hooks/useGanre";
import minimizeImg from "../services/miniIng";
import useGameQueryState from "../store";

const Genre = () => {
  const { data: genre, isLoading, error } = useganre();
  const selectedGenre = useGameQueryState((s) => s.gameQueryState.genre);
  const onSelect = useGameQueryState((s) => s.setGenre);

  // add loader with spinner
  if (isLoading) return <Spinner />;
  if (error) return <p>{error.message}</p>;

  return (
    <>
      <Heading as="h4" fontSize="2xl" marginBottom={3}>
        Genres
      </Heading>
      <List>
        {genre?.results.map((item) => (
          <ListItem key={item.id} paddingY="5px">
            <HStack>
              <Image
                src={minimizeImg(item.image_background)}
                boxSize="30px"
                borderRadius="8px"
                objectFit="cover"
              />
              <Button
                fontWeight={item.id === selectedGenre?.id ? "bold" : "normal"}
                fontSize="lg"
                variant={"link"}
                whiteSpace="normal"
                textAlign="left"
                onClick={() => onSelect(item)}
              >
                {item.name}
              </Button>
            </HStack>
          </ListItem>
        ))}
      </List>
    </>
  );
};

export default Genre;
