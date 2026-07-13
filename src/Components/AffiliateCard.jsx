export default function AffiliateCard({ logo, bgColor, paragraph, title }) {
  return (
    <div className="flex flex-col gap-4 justify-center text-center items-center w-full border  border-[#F3F4F6]  px-10 pt-10 pb-16 bg-[#F8FAFB] rounded-3xl ">
      <div
        className={` size-20 ${bgColor} flex justify-center items-center rounded-full`}
      >
        <img src={logo} alt={title} className="size-[25px]" />
      </div>
      <h3 className="font-bold text-[24px] text-[#002F71] leading-[32px]">
        {title}
      </h3>
      <p className="font-normal text-[16px] text-[#4A5568] leading-[24px]">
        {paragraph}
      </p>
    </div>
  );
}
