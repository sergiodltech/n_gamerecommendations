import "./CommentsMarquee.css";

const COMMENT_SPEED = 40;
const COMMENT_WS_SEPARATION = 12; // amount of &nbps; elements to separate each commment from each other

const CommentsMarquee = (comments: string[]) => {
  const content = ["", "", "", ...comments, ...comments].join(
    "\t".repeat(COMMENT_WS_SEPARATION)
  );

  return (
    <div className="w-full overflow-hidden whitespace-pre py-2">
      <div
        className="inline-block animate-[marquee_var(--speed,20s)_linear_infinite]"
        style={{ ["--speed" as any]: `${COMMENT_SPEED}s` }}
      >
        <span className="mx-4 text-xl md:text-lg lg:text-2xl comments-marquee-text">
          {content}
        </span>
      </div>
    </div>
  );
};

export default CommentsMarquee;
