
import { IMAGES } from "../data/images";

export default function Hero() {
  return (
    <section
      id="hero"
      className="bg-[#0071f8] text-white pt-32 md:pt-40 lg:pt-55 pb-28 md:pb-36 lg:pb-50 rounded-b-[50px] md:rounded-b-[100px] lg:rounded-b-[150px] relative overflow-hidden"
    >
      <div className="max-w-[1320px] mx-auto px-5 sm:px-6 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">

        {/* Left Side */}
        <div className="lg:col-span-7 space-y-6 text-center lg:text-left">

          <h6 className="text-base sm:text-xl font-medium uppercase tracking-widest">
            Welcome to Lugx
          </h6>

          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-[48px] font-bold uppercase leading-tight">
            Best{" "}
            <span className="relative inline-block text-white">
              Gaming

              <span className="absolute left-0 -bottom-4 w-full flex items-center justify-center">
                <svg
                  className="w-full h-5"
                  viewBox="0 0 160 20"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M2 15C45 2 115 2 158 15C115 8 45 8 2 15Z"
                    fill="#ee626b"
                  />
                </svg>
              </span>
            </span>{" "}
            Site Ever!
          </h1>

          <p className="text-white/90 text-sm sm:text-[15px] leading-relaxed py-4 sm:py-6 max-w-xl mx-auto lg:mx-0">
            LUGX Gaming is free Bootstrap 5 HTML CSS website template for your
            gaming websites. You can download and use this layout for commercial
            purposes. Please tell your friends about TemplateMo.
          </p>

          {/* Search Form */}
          <form
            onSubmit={(e) => e.preventDefault()}
            className="relative max-w-md mx-auto lg:mx-0 pt-2 sm:pt-4 flex flex-col gap-3 sm:block"
          >
            <input
              type="text"
              placeholder="Type Something"
              className="w-full h-[50px] pl-6 pr-6 sm:pr-40 rounded-full bg-white text-gray-700 text-sm focus:outline-none shadow-md"
            />

            <button
              type="submit"
              className="w-full sm:w-auto sm:absolute sm:right-0 sm:bottom-0 h-[50px] px-7 bg-[#ee626b] hover:bg-[#0071f8] text-white font-medium text-[15px] uppercase rounded-full transition-colors duration-300 shadow-md cursor-pointer"
            >
              Search Now
            </button>
          </form>

        </div>

        {/* Right Side */}
        <div className="lg:col-span-5 flex justify-center lg:justify-end">

          <div className="relative w-full max-w-[280px] sm:max-w-[350px] lg:max-w-[400px]">

            {/* Game Image */}
            <img
              src={IMAGES.bannerImage}
              alt="Featured Game"
              className="w-full rounded-[25px] shadow-xl object-cover"
            />

            {/* Price Badge */}
            <span className="absolute top-3 right-3 sm:top-5 sm:right-5 bg-[#008af8] text-white text-lg sm:text-xl font-bold px-4 sm:px-5 py-1.5 rounded-full shadow-md">
              $22
            </span>

            {/* Discount Badge */}
            <span className="absolute -bottom-4 -left-3 sm:-bottom-6 sm:-left-6 w-20 h-20 sm:w-24 sm:h-24 bg-[#ee626b] text-white text-xl sm:text-2xl font-bold rounded-full flex items-center justify-center shadow-lg">
              -40%
            </span>

          </div>

        </div>

      </div>
    </section>
  );
}
