
import { IMAGES } from '../data/images';

const topGames = [
  { id: 1, genre: 'Adventure', name: 'Assasin Creed', image: IMAGES.topGame01 },
  { id: 2, genre: 'Adventure', name: 'Assasin Creed', image: IMAGES.topGame02 },
  { id: 3, genre: 'Adventure', name: 'Assasin Creed', image: IMAGES.topGame03 },
  { id: 4, genre: 'Adventure', name: 'Assasin Creed', image: IMAGES.topGame04 },
  { id: 5, genre: 'Adventure', name: 'Assasin Creed', image: IMAGES.topGame05 },
  { id: 6, genre: 'Adventure', name: 'Assasin Creed', image: IMAGES.topGame06 },
];

export default function MostPlayed() {
  return (
    <section className="py-14 sm:py-20 lg:py-24 my-10 sm:my-14 lg:my-18 bg-[#f7f7f7] rounded-[40px] md:rounded-[80px] lg:rounded-[150px]">
      <div className="max-w-[1320px] mx-auto px-5 sm:px-6">

        {/* Section Heading */}
        <div className="flex flex-col sm:flex-row items-center sm:items-end justify-between gap-5 mb-10 sm:mb-14 text-center sm:text-left">

          <div>
            <h6 className="text-[#ee626b] font-bold uppercase tracking-wider text-sm mb-2">
              Top Games
            </h6>

            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold uppercase text-[#1e1e1e]">
              Most Played
            </h2>
          </div>

          <button className="bg-[#ee626b] hover:bg-[#0071f8] text-white font-medium text-sm uppercase px-7 py-3.5 rounded-full transition-colors duration-300 shadow-md cursor-pointer">
            View All
          </button>

        </div>

        {/* Games Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-x-5 gap-y-10 lg:gap-6">

          {topGames.map((game) => (
            <div
              key={game.id}
              className="bg-white rounded-[25px] text-center shadow-sm hover:shadow-lg transition-all duration-300 group flex flex-col items-center pb-8 relative mb-5 lg:mb-0"
            >

              {/* Game Image */}
              <div className="w-full overflow-hidden rounded-[25px] mb-5">

                <img
                  src={game.image}
                  alt={game.name}
                  className="w-full h-[220px] sm:h-[190px] md:h-[180px] lg:h-[160px] xl:h-[190px] object-cover group-hover:scale-105 transition-transform duration-500"
                />

              </div>

              {/* Game Details */}
              <span className="text-gray-400 text-xs font-medium mb-1">
                {game.genre}
              </span>

              <h4 className="text-[15px] sm:text-[16px] lg:text-[15px] xl:text-[17px] font-bold text-[#1e1e1e] group-hover:text-[#0071f8] transition-colors duration-300 px-2">
                {game.name}
              </h4>

              {/* Explore Button */}
              <button className="absolute -bottom-5 bg-[#ee626b] group-hover:bg-[#0071f8] text-white text-sm font-medium uppercase px-6 py-2.5 rounded-full transition-colors duration-300 shadow-md cursor-pointer">
                Explore
              </button>

            </div>
          ))}

        </div>

      </div>
    </section>
  );
}
