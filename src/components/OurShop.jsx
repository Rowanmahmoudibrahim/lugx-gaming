
import { IMAGES } from "../data/images";

function OurShop() {
  return (
    <section className="relative mt-12 sm:mt-16 lg:mt-20 mb-20 sm:mb-28 lg:mb-35 max-w-[1200px] mx-auto px-4 sm:px-5 py-8 sm:py-12 lg:py-0 lg:min-h-[620px]">

      {/* Background Image */}
      <img
        src={IMAGES.shopBg}
        alt="Gaming"
        className="w-full max-w-[520px] h-[250px] sm:h-[320px] md:h-[400px] lg:h-[480px] object-cover rounded-[25px] sm:rounded-[30px] mx-auto lg:absolute lg:top-0 lg:left-1/2 lg:-translate-x-1/2"
      />

      {/* Shop Card */}
      <div className="relative z-10 bg-[#f7f7f7] rounded-[25px] sm:rounded-[30px] p-5 sm:p-7 md:p-9 lg:p-[50px] w-full max-w-[480px] mx-auto mt-[-25px] sm:mt-[-35px] lg:mt-0 lg:absolute lg:top-[70px] lg:left-0 lg:h-[500px] text-center">

        <span className="text-[#ee626b] font-bold uppercase text-xs sm:text-sm">
          Our Shop
        </span>

        <h2 className="text-[23px] sm:text-[27px] md:text-[32px] lg:text-[34px] font-bold text-[#1e1e1e] leading-tight mt-3 sm:mt-5">
          Go Pre-Order Buy
          <br />
          & Get Best <span className="text-[#0071f8]">Prices</span>
          <br />
          For You!
        </h2>

        <p className="text-[#4a4a4a] text-sm sm:text-base font-medium leading-6 sm:leading-7 mt-4 sm:mt-7 mb-5 sm:mb-8">
          Lorem ipsum dolor consectetur adipiscing,
          <br className="hidden sm:block" />
          sed do eiusmod tempor incididunt.
        </p>

        <button className="bg-[#ee626b] hover:bg-[#0071f8] text-white font-bold text-sm sm:text-base px-7 sm:px-8 py-3 sm:py-4 rounded-full transition-colors duration-300 cursor-pointer">
          SHOP NOW
        </button>

      </div>

      {/* Newsletter Card */}
      <div className="relative z-10 bg-[#f7f7f7] rounded-[25px] sm:rounded-[30px] p-5 sm:p-7 md:p-9 lg:p-[45px] w-full max-w-[480px] mx-auto mt-6 sm:mt-8 lg:mt-0 lg:absolute lg:top-[170px] lg:right-0 lg:min-h-[400px] text-center">

        <span className="text-[#ee626b] font-bold uppercase text-xs sm:text-sm">
          Newsletter
        </span>

        <h2 className="text-[23px] sm:text-[27px] md:text-[32px] lg:text-[34px] font-bold text-[#1e1e1e] leading-tight mt-3 sm:mt-5 mb-6 sm:mb-9">
          Get Up To $100 Off
          <br />
          Just Buy <span className="text-[#0071f8]">Subscribe</span>
          <br />
          Newsletter!
        </h2>

        {/* Newsletter Form */}
        <form
          onSubmit={(e) => e.preventDefault()}
          className="flex flex-col sm:flex-row bg-white rounded-[25px] sm:rounded-full p-1.5 gap-2 sm:gap-0"
        >
          <input
            type="email"
            placeholder="Your email..."
            required
            className="flex-1 min-w-0 w-full outline-none px-4 py-3 rounded-full text-sm text-center sm:text-left"
          />

          <button
            type="submit"
            className="w-full sm:w-auto bg-[#ee626b] hover:bg-[#0071f8] text-white font-bold px-5 py-3 rounded-full whitespace-nowrap transition-colors duration-300 text-xs sm:text-sm cursor-pointer"
          >
            SUBSCRIBE NOW
          </button>
        </form>

      </div>

    </section>
  );
}

export default OurShop;
