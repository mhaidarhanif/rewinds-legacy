/**
 * Video YouTube iframe is straightforward
 * But the load could be very slow
 */

interface VideoYouTubeIframeProps {
  title: string;
  embedId: string;
}

export const VideoYouTubeIframe = ({
  title,
  embedId,
}: VideoYouTubeIframeProps) => {
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

export const VideoYouTubeIframeExample = () => {
  <div className="relative overflow-auto rounded-base">
    <VideoYouTubeIframe title="Rick Roll" embedId="dQw4w9WgXcQ" />
  </div>;
};
