interface VideoYouTubeProps {
  title: string;
  embedId: string;
}

export const VideoYouTube = ({ title, embedId }: VideoYouTubeProps) => {
  return (
    <iframe
      className="aspect-video w-full rounded-lg shadow-lg"
      title={title}
      src={`https://www.youtube.com/embed/${embedId}?playlist=${embedId}&controls=1&modestbranding=1&rel=0&disablekb=1`}
      frameBorder="0"
      allowFullScreen
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture;"
    />
  );
};

export const VideoYouTubeExample = () => {
  <div className="relative overflow-auto rounded-base">
    <VideoYouTube title="Rick Roll" embedId="dQw4w9WgXcQ" />
  </div>;
};
