import RightCardContent from "./RightCardContent";

function RightCard({ img, id, intro, tag }) {
  return (
    <div className="relative h-full w-80 shrink-0 overflow-hidden rounded-3xl shadow-lg">
      {/* Background Image */}
      <img
        src={img}
        alt="User review background"
        className="h-full w-full object-cover"
      />

      <RightCardContent id={id} intro={intro} tag={tag} />
    </div>
  );
}

export default RightCard;