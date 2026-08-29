import medalIcon from "../images/medal-icon.svg"; // confirm your actual filename

export default function RewardsFooter({
  salesCount = 0,
  onViewSales = () => {},
}) {
  return (
    <div className="w-full max-w-[961px] rounded-[32px] sm:rounded-[48px] bg-[#002F71]/90 p-6 sm:p-10 flex flex-col sm:flex-row items-center sm:items-start justify-between gap-6">
      <div className="flex flex-col gap-3 text-center sm:text-left">
        <div className="flex flex-col gap-1">
          <h3 className="text-white text-xl sm:text-3xl font-extrabold leading-snug">
            {`You've made ${salesCount} Sales so far!`}
          </h3>
          <p className="text-white text-sm sm:text-base font-medium">
            Keep creating great learning materials.
          </p>
        </div>

        <button
          onClick={onViewSales}
          className="w-full sm:w-[197px] h-12 rounded-full bg-[#2EC5BC] text-white font-bold text-sm sm:text-base flex items-center justify-center"
        >
          View Sales
        </button>
      </div>

      <div className="w-24 h-24 sm:w-48 sm:h-48 rounded-full bg-white/10 border-4 border-white/20 flex items-center justify-center shrink-0">
        <img src={medalIcon} alt="" className="w-10 h-10" />
      </div>
    </div>
  );
}
