import { useParams } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import { fetchFromAPI } from "../utils/fetchFromAPI";
import VideoCard from "../components/VideoCard";
import ChannelCard from "../components/ChannelCard";
import Loader from "../components/Loader";

function SearchResults() {
  const { searchTerm } = useParams();

  const { data, isLoading, isError } = useQuery({
    queryKey: ["search", searchTerm],
    queryFn: () =>
      fetchFromAPI(`search?part=snippet&q=${searchTerm}&maxResults=20`),
    staleTime: 1000 * 60 * 5,
  });

  if (isLoading) return <Loader />;

  if (isError || !data?.items) {
    return (
      <div style={{ padding: "20px" }}>
        <h2>No results found for "{searchTerm}"</h2>
        <p>Please try a different search term.</p>
      </div>
    );
  }

  return (
    <div style={{ padding: "20px" }}>
      <h2>Search Results for "{searchTerm}"</h2>
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fill, minmax(250px, 1fr))",
          gap: "20px",
          marginTop: "20px",
        }}
      >
        {data.items.map((item) => {
          if (item.id?.videoId) {
            return <VideoCard key={item.id.videoId} video={item} />;
          }
          if (item.id?.channelId) {
            return <ChannelCard key={item.id.channelId} channel={item} />;
          }
          return null;
        })}
      </div>
    </div>
  );
}

export default SearchResults;