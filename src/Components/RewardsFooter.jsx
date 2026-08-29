import medalIcon from "../images/medal-icon.svg";

export default function RewardsFooter({
  salesCount = 0,
  onViewSales = () => {},
}) {
  return (
    <div className="relative w-[961px] h-[288px] rounded-[48px] bg-[#002F71]/90 overflow-hidden">
      <div className="absolute top-[78px] left-10 flex flex-col gap-4 w-[461px] h-[148px]">
        <div className="flex flex-col gap-2">
          <h3
            className="text-white w-[461px] h-9"
            style={{
              fontFamily: "'Plus Jakarta Sans', sans-serif",
              fontWeight: 800,
              fontSize: "30px",
              lineHeight: "36px",
              letterSpacing: "-0.75px",
            }}
          >
            {`You've made ${salesCount} Sales so far!`}
          </h3>
          <p
            className="text-white w-[448px] h-6"
            style={{
              fontFamily: "'Plus Jakarta Sans', sans-serif",
              fontWeight: 500,
              fontSize: "16px",
              lineHeight: "24px",
              opacity: 0.8,
            }}
          >
            Keep creating great learning materials.
          </p>
        </div>

        <button
          onClick={onViewSales}
          className="w-[197px] h-12 rounded-full bg-[#2EC5BC] text-white flex items-center justify-center"
          style={{
            fontFamily: "'Plus Jakarta Sans', sans-serif",
            fontWeight: 700,
            fontSize: "16px",
            lineHeight: "24px",
          }}
        >
          View Sales
        </button>
      </div>

      <div
        className="absolute rounded-full bg-white/10 border-4 border-white/20 flex items-center justify-center"
        style={{ top: "56px", left: "727px", width: "192px", height: "192px" }}
      >
        <img src={medalIcon} alt="" className="w-10 h-20" />
      </div>
    </div>
  );
}
