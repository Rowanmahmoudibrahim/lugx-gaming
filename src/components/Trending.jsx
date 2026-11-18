
import { IMAGES } from '../data/images';

const trendingGames = [
  {
    id: 1,
    title: 'Action',
    name: 'Assassin Creed',
    price: '$20',
    oldPrice: '$28',
    image: IMAGES.trending01,
  },
  {
    id: 2,
    title: 'Action',
    name: 'Assassin Creed',
    price: '$44',
    oldPrice: '',
    image: IMAGES.trending02,
  },
  {
    id: 3,
    title: 'Action',
    name: 'Assassin Creed',
    price: '$44',
    oldPrice: '$64',
    image: IMAGES.trending03,
  },
  {
    id: 4,
    title: 'Action',
    name: 'Assassin Creed',
    price: '$32',
    oldPrice: '',
    image: IMAGES.trending04,
  },
];

export default function Trending() {
  return (
    <section className="py-12 sm:py-16 lg:py-20 bg-white">
      <div className="max-w-[1320px] mx-auto px-5 sm:px-6">

        {/* Section Heading */}
        <div className="flex flex-col sm:flex-row items-center sm:items-end justify-between gap-5 mb-10 sm:mb-12">

          <div className="text-center sm:text-left">
            <h6 className="text-[#ee626b] font-bold uppercase tracking-wider text-sm mb-2">
              Trending
            </h6>

            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold uppercase text-[#1e1e1e]">
              Trending Games
            </h2>
          </div>

          <button className="bg-[#ee626b] hover:bg-[#0071f8] text-white font-medium text-sm uppercase px-7 py-3 rounded-full transition-colors duration-300 shadow-md cursor-pointer">
            View All
          </button>

        </div>

        {/* Games Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 sm:gap-6">

          {trendingGames.map((game) => (
            <div
              key={game.id}
              className="bg-[#f7f7f7] rounded-[25px] p-4 sm:p-5 lg:p-6 shadow-sm hover:shadow-lg transition-all duration-300 flex flex-col justify-between group"
            >

              {/* Game Image */}
              <div className="relative overflow-hidden rounded-[20px] mb-5">

                <img
                  src={game.image}
                  alt={game.name}
                  className="w-full h-[220px] sm:h-[190px] lg:h-[220px] object-cover group-hover:scale-105 transition-transform duration-500"
                />

                {/* Price Badge */}
                <div className="absolute top-3 right-3 sm:top-4 sm:right-4 bg-[#0071f8] text-white px-3.5 py-1.5 rounded-2xl shadow-md flex flex-col items-center leading-tight">

                  {game.oldPrice && (
                    <span className="text-xs line-through opacity-80 font-normal">
                      {game.oldPrice}
                    </span>
                  )}

                  <span className="text-base font-bold">
                    {game.price}
                  </span>

                </div>
              </div>

              {/* Game Details */}
              <div className="flex items-center justify-between gap-2">

                <div className="min-w-0">
                  <span className="text-gray-400 text-xs uppercase font-medium">
                    {game.title}
                  </span>

                  <h4 className="text-[15px] sm:text-[16px] lg:text-[17px] font-bold text-[#1e1e1e] mt-1 group-hover:text-[#0071f8] transition-colors duration-300 truncate">
                    {game.name}
                  </h4>
                </div>

                {/* Shopping Button */}
                <button className="w-10 h-10 sm:w-11 sm:h-11 bg-[#ee626b] group-hover:bg-[#0071f8] text-white rounded-full flex items-center justify-center transition-colors duration-300 shadow-md cursor-pointer shrink-0">

                  <svg
                    className="w-5 h-5 fill-current"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M19 6h-2c0-2.76-2.24-5-5-5S7 3.24 7 6H5c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V8c0-1.1-.9-2-2-2zm-7-3c1.66 0 3 1.34 3 3H9c0-1.66 1.34-3 3-3zm7 17H5V8h2v2c0 .55.45 1 1 1s1-.45 1-1V8h6v2c0 .55.45 1 1 1s1-.45 1-1V8h2v12z" />
                  </svg>

                </button>

              </div>

            </div>
          ))}

        </div>
      </div>
    </section>
  );
}
