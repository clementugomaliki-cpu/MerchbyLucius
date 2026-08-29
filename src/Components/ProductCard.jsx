import starIcon from "../images/rating-star.svg";

export default function ProductCard({
  id,
  image,
  title,
  tag,
  rating,
  reviewCount,
}) {
  const isTopPerformer = rating !== undefined;

  return (
    <div className="w-[216px] h-[414px] bg-white rounded-[32px] border border-[#F3F4F6] overflow-hidden flex flex-col">
      <div className="relative">
        <img
          src={image}
          alt={title}
          className="w-full h-[212px] object-cover"
        />
        {tag && (
          <span className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm text-[#002F71] text-[10px] font-bold uppercase tracking-wider px-4 py-1.5 rounded-full">
            {tag}
          </span>
        )}
      </div>

      <div className="p-4 flex flex-col gap-2">
        <h4 className="font-bold text-[#4A5568] text-sm">{title}</h4>

        {isTopPerformer && (
          <div className="flex items-center gap-1">
            {[...Array(5)].map((_, i) => (
              <img key={i} src={starIcon} alt="" className="w-3 h-3" />
            ))}
            <span className="text-gray-400 text-xs ml-1">({reviewCount})</span>
          </div>
        )}

        {isTopPerformer ? (
          <button
            className="w-[172px] h-10 rounded-[24px] bg-[#2EC5BC] text-white text-sm font-semibold"
            onClick={() => console.log("Quick view:", id)}
          >
            Quick View
          </button>
        ) : (
          <>
            <button
              className="w-[172px] h-10 rounded-[24px] bg-[#2EC5BC] text-white text-sm font-semibold"
              onClick={() => console.log("View product:", id)}
            >
              View Product
            </button>
            <button
              className="w-[172px] h-10 rounded-[24px] border border-[#2EC5BC] text-[#2EC5BC] text-sm font-semibold bg-white"
              onClick={() => console.log("Edit product:", id)}
            >
              Edit Product
            </button>
          </>
        )}
      </div>
    </div>
  );
}
