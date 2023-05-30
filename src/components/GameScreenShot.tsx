import { Image, SimpleGrid } from "@chakra-ui/react";
import useScreenShot from "../hooks/useScreenShot";

interface Props {
  id: number;
}
const GameScreenShot = ({ id }: Props) => {
  const { data, error, isLoading } = useScreenShot(id);

  if (isLoading) return null;

  if (error) throw error;

  return (
    <SimpleGrid columns={{ base: 1, md: 2 }} spacing={2}>
      {data?.results.map((item) => (
        <Image key={item.id} src={item.image} />
      ))}
    </SimpleGrid>
  );
};

export default GameScreenShot;
