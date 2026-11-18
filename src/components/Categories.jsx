
import { IMAGES } from '../data/images';

const categories = [
  {
    id: 1,
    name: 'Action',
    image: IMAGES.category01,
  },
  {
    id: 2,
    name: 'Action',
    image: IMAGES.category02,
  },
  {
    id: 3,
    name: 'Action',
    image: IMAGES.category03,
  },
  {
    id: 4,
    name: 'Action',
    image: IMAGES.category04,
  },
  {
    id: 5,
    name: 'Action',
    image: IMAGES.category05,
  },
];

export default function Categories() {
  return (
    <section className="py-12 sm:py-16 lg:py-20 mb-6 sm:mb-10 bg-white">
      <div className="max-w-[1320px] mx-auto px-5 sm:px-6">

        {/* Section Title */}
        <div className="text-center mb-8 sm:mb-12">
          <h6 className="text-[#ee626b] font-bold uppercase tracking-wider text-sm mb-3">
            Categories
          </h6>

          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold uppercase text-[#1e1e1e]">
            Top Categories
          </h2>
        </div>

        {/* Categories Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-5 sm:gap-6">

          {categories.map((category) => (
            <div
              key={category.id}
              className="bg-[#0071f8] rounded-[25px] overflow-hidden text-center group cursor-pointer hover:-translate-y-2 transition-all duration-300 shadow-sm hover:shadow-lg"
            >

              {/* Category Name */}
              <h4 className="text-white text-base sm:text-lg font-bold py-4 sm:py-5">
                {category.name}
              </h4>

              {/* Category Image */}
              <div className="overflow-hidden">
                <img
                  src={category.image}
                  alt={category.name}
                  className="w-full h-[230px] sm:h-[200px] lg:h-[190px] xl:h-[200px] object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>

            </div>
          ))}

        </div>
      </div>
    </section>
  );
}
