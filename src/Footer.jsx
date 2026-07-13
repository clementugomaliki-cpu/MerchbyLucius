import { Link } from "react-router";

export default function Footer() {
  return (
    <footer className="w-full bg-[#2EC5BC] pt-24 pb-24 px-20">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-[2fr_1fr_1fr] gap-8">
        <div className="flex flex-col gap-12 ">
          <p className="text-[#FFFFFF] max-w-[400px] text-[20px] leading-[32.5px] font-normal">
            Inspiring the next generation of learners with premium digital
            content designed by experts and loved by families worldwide.
          </p>
          <p className="text-[#FFFFFF] text-[14px] leading-[20px] font-normal">
            © 2026 &nbsp; MerchbyLucius. All rights reserved.
          </p>
        </div>

        <div className="flex flex-col gap-3">
          <h4 className="text-[#002F71] font-bold text-[12px]">RESOURCES</h4>
          <Link className="text-[#FFFFFF] font-medium text-[16px] leading-[24px]">
            Bookstore
          </Link>
          <Link className="text-[#FFFFFF] font-medium text-[16px] leading-[24px]">
            Become an Affiliate
          </Link>
          <Link className="text-[#FFFFFF] font-medium text-[16px] leading-[24px]">
            Join as a Digital Creator
          </Link>
        </div>

        <div className="flex flex-col gap-3">
          <h4 className="text-[#002F71] font-bold text-[12px]">LEGAL</h4>
          <Link className="text-[#FFFFFF] font-medium text-[16px] leading-[24px]">
            Privacy Policy
          </Link>
          <Link className="text-[#FFFFFF] font-medium text-[16px] leading-[24px]">
            Terms of Service
          </Link>
          <Link className="text-[#FFFFFF] font-medium text-[16px] leading-[24px]">
            Contact
          </Link>
        </div>
      </div>
    </footer>
  );
}
