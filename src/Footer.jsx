export default function Footer() {
  return (
    <footer className="w-full bg-[#2EC5BC] pt-24 pb-24 px-10 md:px-20">
      <div className="max-w-6xl mx-auto flex flex-col md:grid md:grid-cols-[2fr_1fr_1fr] gap-[52px] md:gap-8">
        <div>
          <p className="text-white max-w-[400px]">
            Inspiring the next generation of learners with premium digital
            content designed by experts and loved by families worldwide.
          </p>
          <p className="hidden md:block text-white/80 text-[14px] leading-[20px] mt-12">
            © 2026 MerchbyLucius. All rights reserved.
          </p>
        </div>

        <div className="grid grid-cols-2 gap-8 md:contents">
          <div className="flex flex-col gap-3">
            <h4 className="text-[#002F71] font-semibold text-sm">RESOURCES</h4>
            <a href="#" className="text-white">
              Bookstore
            </a>
            <a href="#" className="text-white">
              Become an Affiliate
            </a>
            <a href="#" className="text-white">
              Join as a Digital Creator
            </a>
          </div>

          <div className="flex flex-col gap-3">
            <h4 className="text-[#002F71] font-semibold text-sm">LEGAL</h4>
            <a href="#" className="text-white">
              Privacy Policy
            </a>
            <a href="#" className="text-white">
              Terms of Service
            </a>
            <a href="#" className="text-white">
              Contact
            </a>
          </div>
        </div>

        <p className="md:hidden text-white/80 text-[14px] leading-[20px]">
          © 2026 MerchbyLucius. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
