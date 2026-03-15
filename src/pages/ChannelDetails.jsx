import { useParams } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import { fetchFromAPI } from "../utils/fetchFromAPI";
import Loader from "../components/Loader";

function ChannelDetails() {
  const { id } = useParams();

  const { data, isLoading, isError } = useQuery({
    queryKey: ["channel", id],
    queryFn: () => fetchFromAPI(`channels?part=snippet&id=${id}`),
  });

  if (isLoading) return <Loader />;
  if (isError) return <p>Error loading channel</p>;

  const channel = data.items[0];

  return (
    <div>
      <h2>{channel.snippet.title}</h2>

      <img
        src={channel.snippet.thumbnails.high.url}
        alt={channel.snippet.title}
      />
    </div>
  );
}

export default ChannelDetails;
