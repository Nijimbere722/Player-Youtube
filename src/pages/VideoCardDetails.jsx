import { useParams } from "react-router-dom";
import ReactPlayer from "react-player";

function VideoCardDetails() {
  const { id } = useParams();

  return (
    <div>
      <ReactPlayer
        url={`https://www.youtube.com/watch?v=${id}`}
        controls
        width="100%"
        height="500px"
      />
    </div>
  );
}

export default VideoCardDetails;
