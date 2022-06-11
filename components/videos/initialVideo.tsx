export default function InitialVideo() {
  return (
    <video playsInline muted autoPlay preload="none">
      <source src="/video.mp4" type="video/mp4"></source>
    </video>
  );
}
