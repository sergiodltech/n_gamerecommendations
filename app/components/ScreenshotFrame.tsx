import type { Media } from "./ResourcesLoader";

const ScreenshotFrame = (
  key: string,
  media: Media,
  accentColor: string = "red"
) => {
  return (
    <div
      key={key}
      className="relative flex m-4 rounded-2xl shadow-2xl overflow-visible"
    >
      <img
        src={media.uri}
        alt={key}
        className="rounded-2xl top-0 left-0 w-full h-full object-cover"
      />
      <div
        className="absolute flex top-7 -left-[1.5rem] text-extrabold text-5xl whitespace-nowrap"
        style={{
          color: accentColor,
          transform: "rotate(-25deg)",
          zIndex: 2,
          textShadow: "3px 3px 6px rgba(0, 0, 0, 0.85)",
          pointerEvents: "none",
        }}
      >
        {media.legend}
      </div>
    </div>
  );
};

export default ScreenshotFrame;
