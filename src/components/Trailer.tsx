import useTrailer from "../hooks/useTrailer";

interface Props {
  gameId: number;
}
const Trailer = ({ gameId }: Props) => {
  const { data, isLoading, error } = useTrailer(gameId);

  if (isLoading) return null;

  if (error) throw error;


  return (
    <video
      src={data?.results[0].data.max}
      poster={data?.results[0].preview}
      controls
    />
  );
};

export default Trailer;
