import { Badge } from "@chakra-ui/react";

interface Props {
  score: number;
}
const Score = ({ score }: Props) => {
  let color = score > 87 ? "green" : score > 65 ? "red" : "";
  return (
    <Badge fontSize="14px" paddingX={2} colorScheme={color}>
      {score}
    </Badge>
  );
};

export default Score;
