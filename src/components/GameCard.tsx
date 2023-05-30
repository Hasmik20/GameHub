import {
  Card,
  CardBody,
  HStack,
  Heading,
  Image
} from "@chakra-ui/react";
import { Link } from "react-router-dom";
import { GameType } from "../entities/GameType";
import minimizeImg from "../services/miniIng";
import PlatformIconList from "./PlatformIconList";
import Score from "./Score";
interface Props {
  game: GameType;
}
const GameCard = ({ game }: Props) => {
  return (
    <Card
      _hover={{
        transform: "scale(1.03)",
        transition: "transform .15s ease-in",
      }}
    >
      <Link to={"/games/" + game.slug}>
        <Image src={minimizeImg(game.background_image)} />
        <CardBody>
          <Heading fontSize="2xl">{game.name}</Heading>
          <HStack justifyContent={"space-between"} margin="10px">
            <PlatformIconList
              platforms={game.parent_platforms.map((item) => item.platform)}
            />
            <Score score={game.metacritic} />
          </HStack>
        </CardBody>
      </Link>
    </Card>
  );
};

export default GameCard;
