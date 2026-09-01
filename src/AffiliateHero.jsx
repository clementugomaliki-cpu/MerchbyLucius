import { useNavigate } from "react-router";
import logo from "./images/logo.png";
import smlogo from "./images/smlogo.png";
import AffiliateDot from "./images/affiliate-dot.svg";
import AffiliateCard from "./images/affiliate-card.svg";
import AffiliateHeart from "./images/affiliate-heart.svg";
import AffiliateStar from "./images/affiliate-star.svg";
import HighCommissionIcon from "./images/benefit-icon.svg";
import RealTimeDataIcon from "./images/realtime-data-icon.svg";
import AdCreativesIcon from "./images/ad-creatives-icon.svg";

// TEMP: mock earnings data — swap with real API data from backend dev
const earningsData = {
  monthlyEarnings: "220,627",
  salesToday: 3,
  linkClicks: "1,284",
  referrals: 96,
};

const navLinks = ["How it works", "Benefits", "Products", "FAQ"];

// TEMP: mock steps data — swap with real content from backend dev (likely CMS/API driven)
const steps = [
  {
    number: 1,
    title: "Apply to join",
    description:
      "Tell us where you share content. Most applications are reviewed within 48 hours.",
  },
  {
    number: 2,
    title: "Get your link",
    description:
      "Every affiliate gets a unique referral link and access to the creative library.",
  },
  {
    number: 3,
    title: "Share with your audience",
    description:
      "Post it in your content, newsletter, or bio — wherever parents already listen to you.",
  },
  {
    number: 4,
    title: "Get paid weekly",
    description:
      "Track clicks and sales live, and receive your commission every week — no minimum.",
  },
];

// TEMP: mock benefits data — swap with real content from backend dev if CMS-driven
// TEMP: mock benefits data — swap with real content from backend dev if CMS-driven
const benefits = [
  {
    icon: HighCommissionIcon,
    title: "High Commission",
    description:
      "Earn up to 20% on every sale made through your unique affiliate link.",
    iconBg: "bg-[#FFAB55]/[0.16]",
  },
  {
    icon: RealTimeDataIcon,
    title: "Real-time Data",
    description:
      "Access your personalized dashboard to track clicks, sales, and earnings in real time.",
    iconBg: "bg-[#2BC7BC]/[0.14]",
  },
  {
    icon: AdCreativesIcon,
    title: "Ad Creatives",
    description:
      "We provide professional banners and marketing copy to help you get started fast.",
    iconBg: "bg-[#1A4379]/10",
  },
];

export default function AffiliateHero() {
  const navigate = useNavigate();

  return (
    <>
      <section className="w-full bg-gradient-to-br from-[#2BC7BC]/10 via-white to-[#FFAB55]/[0.12]">
        {/* Header */}
        <header className="flex items-center justify-between border-b border-[#DCE4E2]/90 px-[24px] py-[19.5px] max-w-[1180px] mx-auto">
          <div className="flex items-center gap-2">
            <img src={logo} alt="MerchbyLucius" className="h-8 w-auto" />
          </div>

          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link}
                href={`#${link.toLowerCase().replace(/\s+/g, "-")}`}
                className="text-sm font-medium text-[#1A4379]/80 hover:text-[#1A4379] transition-colors"
              >
                {link}
              </a>
            ))}
          </nav>

          <button
            onClick={() => navigate("/sign-up")}
            className="rounded-full bg-[#2BC7BC] px-[18px] py-[10px] text-[13.5px] font-bold text-white shadow-[0_6px_16px_0_rgba(43,199,188,0.35)] hover:bg-[#20A89F] transition-colors"
          >
            Become an Affiliate
          </button>
        </header>

        {/* Hero */}
        <div className="max-w-[1180px] mx-auto grid grid-cols-1 md:grid-cols-2 gap-[56px] px-[24px] pt-[76px] pb-[96px] items-center">
          {/* Left column */}
          <div className="flex flex-col gap-[14px]">
            <span className="w-fit flex items-center gap-2 rounded-full bg-white/60 px-[18px] py-[6px] text-[12.5px] font-bold uppercase tracking-[1.2px] text-[#20A89F]">
              <img src={AffiliateDot} alt="" className="h-2 w-2" />
              Join our network
            </span>

            <h1 className="text-[50px] font-extrabold leading-[54px] tracking-[-1.2px] text-[#1A4379]">
              Turn your influence into
              <span className="text-[#2BC7BC]">ongoing income.</span>
            </h1>

            <p className="max-w-[480px] text-[17.5px] leading-[28.88px] text-[#6D7582]">
              Recommend the learning products your audience already trusts, and
              earn industry-leading commission on every family you bring to
              MerchbyLucius.
            </p>

            <div className="flex items-center gap-[14px] pt-[6px]">
              <button
                onClick={() => navigate("/sign-up")}
                className="rounded-full bg-[#2BC7BC] px-[26px] py-[15px] text-[15px] font-bold text-white shadow-[0_6px_16px_0_rgba(43,199,188,0.35)] hover:bg-[#20A89F] transition-colors"
              >
                Become an Affiliate
              </button>
              <button
                onClick={() => navigate("/how-it-works")}
                className="rounded-full border border-[#2BC7BC] px-[26px] py-[15px] text-[15px] font-bold text-[#20A89F] hover:bg-white/50 transition-colors"
              >
                See how it works
              </button>
            </div>

            {/* Trust indicators */}
            <div className="flex flex-wrap items-center gap-x-6 gap-y-2 pt-2 text-[13px] text-[#6D7582]">
              <span className="flex items-center gap-1.5">
                <img src={AffiliateStar} alt="" className="h-4 w-4" />
                Up to 20% commission
              </span>
              <span className="flex items-center gap-1.5">
                <img src={AffiliateCard} alt="" className="h-4 w-4" />
                Weekly payouts
              </span>
              <span className="flex items-center gap-1.5">
                <img src={AffiliateHeart} alt="" className="h-4 w-4" />
                No signup fees
              </span>
            </div>
          </div>

          {/* Right column — earnings card */}
          <div className="relative w-full max-w-[400px] mx-auto md:mx-0 md:ml-auto">
            <div className="absolute -top-[18px] right-[10%] flex items-center gap-1.5 rounded-[10px] bg-[#1A4379] px-4 py-2 text-[12px] font-bold text-white shadow-[0_10px_24px_0_rgba(18,34,82,0.35)]">
              <img src={AffiliateDot} alt="" className="h-2 w-2" />+
              {earningsData.salesToday} sales today
            </div>

            <div className="rounded-[20px] border border-[#DCE4E2] bg-white p-[27px] shadow-[0_20px_40px_-12px_rgba(26,67,121,0.15)]">
              <div className="flex items-center justify-between">
                <p className="text-[13px] font-medium text-[#6D7582]">
                  Your earnings this month
                </p>
                <span className="rounded-[10px] bg-[#20A89F]/10 px-3 py-1.5 text-[12px] font-bold text-[#20A89F]">
                  ▲ 24%
                </span>
              </div>
              <p className="mt-1 text-[32px] font-extrabold text-[#1A4379]">
                ₦{earningsData.monthlyEarnings}
              </p>

              {/* TEMP: placeholder trend line — swap for recharts fed by real data */}
              <div className="mt-4 h-[70px] w-full rounded-lg bg-gradient-to-t from-[#2BC7BC]/10 to-transparent flex items-end">
                <svg
                  viewBox="0 0 200 60"
                  className="w-full h-full"
                  preserveAspectRatio="none"
                >
                  <polyline
                    fill="none"
                    stroke="#2BC7BC"
                    strokeWidth="2.5"
                    points="0,50 30,42 60,45 90,30 120,32 150,15 180,10 200,5"
                  />
                </svg>
              </div>

              <div className="mt-5 grid grid-cols-2 gap-3.5">
                <div className="rounded-[10px] bg-[#FAFAFC] px-3.5 py-3">
                  <p className="text-[18px] font-bold text-[#1A4379]">
                    {earningsData.linkClicks}
                  </p>
                  <p className="text-[12px] text-[#6D7582]">Link clicks</p>
                </div>
                <div className="rounded-[10px] bg-[#FAFAFC] px-3.5 py-3">
                  <p className="text-[18px] font-bold text-[#1A4379]">
                    {earningsData.referrals}
                  </p>
                  <p className="text-[12px] text-[#6D7582]">Referrals</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Four steps */}
      <section className="max-w-[1180px] mx-auto px-[24px] py-[64px]">
        <div className="text-center">
          <p className="text-[12.5px] font-bold uppercase tracking-[1.2px] text-[#20A89F]">
            Getting started
          </p>
          <h2 className="mt-2 text-[34px] font-extrabold tracking-[-0.5px] text-[#1A4379]">
            Four steps to your first payout
          </h2>
          <div className="mx-auto mt-3 h-1 w-[46px] rounded-full bg-[#FFAB55]" />
          <p className="mx-auto mt-4 max-w-[560px] text-[16.5px] leading-[26.4px] text-[#6D7582]">
            No storefront, no inventory — just your unique link and an audience
            that trusts you.
          </p>
        </div>

        <div className="mt-[36px] grid grid-cols-1 gap-[22px] sm:grid-cols-2 lg:grid-cols-4">
          {steps.map((step) => (
            <div
              key={step.number}
              className="rounded-[14px] border border-[#DCE4E2] bg-white p-6"
            >
              <div className="flex h-[30px] w-[30px] items-center justify-center rounded-[15px] bg-[#1A4379] text-[13px] font-bold text-white">
                {step.number}
              </div>
              <h3 className="mt-[18px] text-[16.5px] font-bold text-[#1A4379]">
                {step.title}
              </h3>
              <p className="mt-2 text-[13.5px] leading-[20px] text-[#6D7582]">
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </section>
      {/* Recommend products you love */}
      <section className="w-full bg-[#FAFAFC] py-[88px]">
        <div className="max-w-[1180px] mx-auto px-[24px]">
          <div className="text-center">
            <p className="text-[12.5px] font-bold uppercase tracking-[1.2px] text-[#20A89F]">
              Affiliate Partnership
            </p>
            <h2 className="mt-2 text-[34px] font-extrabold tracking-[-0.5px] text-[#1A4379]">
              Recommend products you love
            </h2>
            <div className="mx-auto mt-3 h-1 w-[46px] rounded-full bg-[#FFAB55]" />
            <p className="mx-auto mt-4 max-w-[560px] text-[16.5px] leading-[26.4px] text-[#6D7582]">
              Earn industry-leading commission on every referral, with the tools
              to make it easy.
            </p>
          </div>

          <div className="mt-[36px] grid grid-cols-1 gap-[24px] sm:grid-cols-2 lg:grid-cols-3">
            {benefits.map((benefit) => (
              <div
                key={benefit.title}
                className="rounded-[20px] border border-[#DCE4E2] bg-white p-[29px] shadow-[0_10px_24px_-8px_rgba(26,67,121,0.08)]"
              >
                <div
                  className={`flex h-[50px] w-[50px] items-center justify-center rounded-[14px] ${benefit.iconBg}`}
                >
                  <img src={benefit.icon} alt="" className="h-6 w-6" />
                </div>
                <h3 className="mt-[18px] text-[18.5px] font-bold text-[#1A4379]">
                  {benefit.title}
                </h3>
                <p className="mt-2 text-[14.5px] leading-[23.2px] text-[#6D7582]">
                  {benefit.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
