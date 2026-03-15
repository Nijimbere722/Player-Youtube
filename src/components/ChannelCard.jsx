import { Link } from "react-router-dom";

function ChannelCard({ channel }) {
  return (
    <Link to={`/channel/${channel.id.channelId}`}>
      <div style={{ textAlign: "center", margin: "10px" }}>
        <img
          src={channel.snippet.thumbnails.high.url}
          alt={channel.snippet.title}
          style={{ borderRadius: "50%", width: "120px" }}
        />

        <h3>{channel.snippet.title}</h3>
      </div>
    </Link>
  );
}

export default ChannelCard;
