import { Link } from "react-router-dom";

function VideoCard({ video }) {
  const { snippet } = video;

  return (
    <Link to={`/video/${video.id.videoId}`}>
      <div className="video-card">
        <img src={snippet.thumbnails.high.url} alt={snippet.title} />
        <h3>{snippet.title}</h3>
        <p>{snippet.channelTitle}</p>
      </div>
    </Link>
  );
}

export default VideoCard;
