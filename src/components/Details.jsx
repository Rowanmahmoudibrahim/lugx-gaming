
import React, { useState } from 'react';
import { Link } from 'react-router-dom';

function Details() {
  const [activeTab, setActiveTab] = useState('description');
  const [quantity, setQuantity] = useState(1);

  const relatedGames = [
    {
      id: 1,
      category: "Action",
      image: "https://templatemo.com/templates/templatemo_589_lugx_gaming/assets/images/categories-01.jpg",
    },
    {
      id: 2,
      category: "Action",
      image: "https://templatemo.com/templates/templatemo_589_lugx_gaming/assets/images/categories-05.jpg",
    },
    {
      id: 3,
      category: "Action",
      image: "https://templatemo.com/templates/templatemo_589_lugx_gaming/assets/images/categories-03.jpg",
    },
    {
      id: 4,
      category: "Action",
      image: "https://templatemo.com/templates/templatemo_589_lugx_gaming/assets/images/categories-04.jpg",
    },
    {
      id: 5,
      category: "Action",
      image: "https://templatemo.com/templates/templatemo_589_lugx_gaming/assets/images/categories-05.jpg",
    },
  ];

  return (
    <div className="pb-16 sm:pb-20 lg:pb-24">

      {/* Top Banner */}
      <div className="bg-[#0071f8] pt-32 sm:pt-40 lg:pt-50 pb-20 sm:pb-24 lg:pb-30 px-4 sm:px-5 text-center rounded-b-[50px] sm:rounded-b-[75px] lg:rounded-b-[100px] mb-12 sm:mb-16 lg:mb-20">
        <h1 className="text-2xl sm:text-3xl md:text-5xl font-extrabold text-white mb-3 uppercase leading-tight">
          Modern Warfare® II
        </h1>

        <p className="text-white/90 text-xs sm:text-sm md:text-base font-medium flex flex-wrap items-center justify-center gap-1">
          <Link to="/" className="hover:underline">Home</Link>
          <span>&gt;</span>
          <Link to="/shop" className="hover:underline">Shop</Link>
          <span>&gt;</span>
          <span>Modern Warfare® II</span>
        </p>
      </div>

      <div className="max-w-[1200px] mx-auto px-4 sm:px-5">

        {/* Main Game Details */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 sm:gap-10 lg:gap-12 items-center pb-10 sm:pb-14 lg:pb-16 border-b border-gray-200">

          {/* Game Image */}
          <div className="lg:col-span-6 w-full">
            <div className="rounded-2xl sm:rounded-3xl overflow-hidden shadow-sm">
              <img
                src="https://templatemo.com/templates/templatemo_589_lugx_gaming/assets/images/single-game.jpg"
                alt="Call of Duty Modern Warfare II"
                className="w-full h-auto object-cover"
              />
            </div>
          </div>

          {/* Game Information */}
          <div className="lg:col-span-6 w-full text-center">

            <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-gray-900 mb-3 leading-tight">
              Call of Duty®: Modern Warfare® II
            </h2>

            <div className="flex items-center justify-center gap-3 mb-5 sm:mb-6">
              <span className="text-gray-400 line-through text-base sm:text-lg font-semibold">$28</span>
              <span className="text-2xl sm:text-3xl font-extrabold text-[#0071f8]">$22</span>
            </div>

            <p className="text-gray-600 text-sm leading-7 mb-6 sm:mb-8">
              LUGX Gaming Template is based on the latest Bootstrap 5 CSS framework. This template is provided by TemplateMo and it is suitable for your gaming shop ecommerce websites. Feel free to use this for any purpose. Thank you.
            </p>

            {/* Add To Cart Form */}
            <form
              onSubmit={(e) => e.preventDefault()}
              className="flex flex-wrap items-center justify-center gap-3 sm:gap-4 mb-8 sm:mb-10"
            >
              <input
                type="number"
                min="1"
                value={quantity}
                onChange={(e) => setQuantity(e.target.value)}
                className="w-20 h-12 bg-gray-100 border border-gray-200 rounded-full text-center font-bold text-gray-800 focus:outline-none focus:border-[#0071f8]"
              />

              <button
                type="submit"
                className="min-h-12 bg-[#ee626b] hover:bg-[#0071f8] text-white px-5 sm:px-7 rounded-full font-bold text-xs uppercase tracking-wider transition-colors duration-300 flex items-center justify-center gap-2 cursor-pointer"
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
                </svg>
                ADD TO CART
              </button>
            </form>

            {/* Additional Information */}
            <ul className="space-y-3 text-xs sm:text-sm flex flex-col items-center">

              <li className="flex justify-center flex-wrap gap-x-2">
                <span className="text-gray-400 font-medium">Game ID:</span>
                <span className="text-[#0071f8] font-medium">COD MMII</span>
              </li>

              <li className="flex justify-center flex-wrap gap-x-2">
                <span className="text-gray-400 font-medium">Genre:</span>
                <span className="text-[#0071f8] font-medium">Action, Team, Single</span>
              </li>

              <li className="flex justify-center flex-wrap gap-x-2">
                <span className="text-gray-400 font-medium">Multi-tags:</span>
                <span className="text-[#0071f8] font-medium">War, Battle, Royal</span>
              </li>

            </ul>

          </div>
        </div>

        {/* Description & Reviews Tabs */}
        <div className="bg-[#f7f7f7] rounded-2xl sm:rounded-3xl p-5 sm:p-8 md:p-12 my-10 sm:my-12 lg:my-16 text-center">

          <div className="flex flex-wrap items-center justify-center gap-4 sm:gap-8 border-b border-gray-200 pb-4 mb-6">

            <button
              onClick={() => setActiveTab('description')}
              className={`text-base sm:text-lg font-bold transition-colors cursor-pointer ${
                activeTab === 'description'
                  ? 'text-[#0071f8]'
                  : 'text-gray-800 hover:text-[#0071f8]'
              }`}
            >
              Description
            </button>

            <span className="text-gray-300">|</span>

            <button
              onClick={() => setActiveTab('reviews')}
              className={`text-base sm:text-lg font-bold transition-colors cursor-pointer ${
                activeTab === 'reviews'
                  ? 'text-[#0071f8]'
                  : 'text-gray-800 hover:text-[#0071f8]'
              }`}
            >
              Reviews (3)
            </button>

          </div>

          {activeTab === 'description' ? (
            <div className="space-y-4 text-gray-600 text-sm leading-7 text-center">
              <p>
                You can search for more templates on Google Search using keywords such as "templatemo digital marketing", "templatemo one-page", "templatemo gallery", etc. Please tell your friends about our website. If you need a variety of HTML templates, you may visit Tooplate and Too CSS websites.
              </p>

              <p>
                Coloring book air plant shabby chic, crucifix normcore raclette cred swag artisan activated charcoal. PBR&B fanny pack pok pok gentrify truffaut kitsch helvetica jean shorts edison bulb poutine next level humblebrag la croix adaptogen. Hashtag poke literally locavore, beard marfa kogi bruh artisan succulents seitan tonx waistcoat chambray taxidermy. Same cred meggings 3 wolf moon lomo irony cray hell of bitters asymmetrical gluten-free art party raw denim chillwave tousled try-hard succulents street art.
              </p>
            </div>
          ) : (
            <div className="space-y-4 text-gray-600 text-sm leading-7 text-center">

              <div className="bg-white p-4 sm:p-5 rounded-2xl shadow-xs">
                <p className="font-bold text-gray-900 mb-1">Ahmed Ali ⭐⭐⭐⭐⭐</p>
                <p>Amazing graphics and smooth gameplay. Totally worth it!</p>
              </div>

              <div className="bg-white p-4 sm:p-5 rounded-2xl shadow-xs">
                <p className="font-bold text-gray-900 mb-1">Sara Mahmoud ⭐⭐⭐⭐⭐</p>
                <p>Best multiplayer experience I have had this year.</p>
              </div>

              <div className="bg-white p-4 sm:p-5 rounded-2xl shadow-xs">
                <p className="font-bold text-gray-900 mb-1">Omar Hassan ⭐⭐⭐⭐</p>
                <p>Great story mode and fast delivery of the game key.</p>
              </div>

            </div>
          )}
        </div>

        {/* Related Games */}
        <div className="pt-2 sm:pt-4">

          <div className="flex flex-col items-center text-center mb-8 sm:mb-10 gap-5">

            <div>
              <span className="text-[#ee626b] font-bold text-xs sm:text-sm uppercase tracking-wider block mb-2">
                Action
              </span>

              <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-gray-900">
                Related Games
              </h2>
            </div>

            <Link
              to="/shop"
              className="bg-[#ee626b] hover:bg-[#0071f8] text-white px-7 py-3.5 rounded-full font-bold text-xs uppercase tracking-wider transition-colors duration-300"
            >
              View All
            </Link>

          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-5 sm:gap-6">

            {relatedGames.map((item) => (
              <Link
                key={item.id}
                to="/details"
                className="bg-[#0071f8] rounded-2xl sm:rounded-3xl overflow-hidden text-center group block shadow-sm hover:-translate-y-1 transition-transform duration-300"
              >
                <h4 className="text-white font-bold text-sm sm:text-base py-3 sm:py-4">
                  {item.category}
                </h4>

                <div className="rounded-t-2xl sm:rounded-t-3xl overflow-hidden bg-white">
                  <img
                    src={item.image}
                    alt={item.category}
                    className="w-full h-48 sm:h-52 md:h-48 lg:h-44 xl:h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
              </Link>
            ))}

          </div>
        </div>

      </div>
    </div>
  );
}

export default Details;
