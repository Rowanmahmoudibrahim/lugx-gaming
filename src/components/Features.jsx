
import { IMAGES } from '../data/images';

const featuresData = [
  { id: 1, title: 'Free Storage', icon: IMAGES.featured01 },
  { id: 2, title: 'User More', icon: IMAGES.featured02 },
  { id: 3, title: 'Reply Ready', icon: IMAGES.featured03 },
  { id: 4, title: 'Easy Layout', icon: IMAGES.featured04 },
];

export default function Features() {
  return (
    <section className="-mt-12 sm:-mt-16 lg:-mt-20 relative z-10 pb-12 sm:pb-16">
      <div className="max-w-[1320px] mx-auto px-5 sm:px-6">

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 sm:gap-6">

          {featuresData.map((item) => (
            <div
              key={item.id}
              className="group bg-white rounded-[25px] p-7 sm:p-8 lg:p-9 shadow-lg flex flex-col items-center justify-center text-center transition-all duration-300 cursor-pointer hover:-translate-y-2"
            >

              {/* Feature Icon */}
              <div className="w-[75px] h-[75px] sm:w-[85px] sm:h-[85px] lg:w-[90px] lg:h-[90px] rounded-full bg-[#0071f8] group-hover:bg-[#ee626b] flex items-center justify-center mb-5 sm:mb-6 transition-colors duration-300">

                <img
                  src={item.icon}
                  alt={item.title}
                  className="w-9 h-9 sm:w-10 sm:h-10 lg:w-11 lg:h-11 object-contain"
                />

              </div>

              {/* Feature Title */}
              <h4 className="text-[15px] sm:text-[16px] lg:text-[17px] font-bold uppercase text-[#1e1e1e] tracking-wide">
                {item.title}
              </h4>

            </div>
          ))}

        </div>
      </div>
    </section>
  );
}
