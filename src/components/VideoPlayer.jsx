function VideoPlayer({ videoId }) {
  return (
    <div style={{ position: "relative", paddingTop: "56.25%" }}>
      <iframe
        style={{ position: "absolute", top: 0, left: 0 }}
        width="100%"
        height="100%"
        src={`https://www.youtube.com/embed/${videoId}?autoplay=1`}
        title="YouTube video player"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      />
    </div>
  );
}

export default VideoPlayer;