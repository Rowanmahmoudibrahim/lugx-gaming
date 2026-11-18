import React, { useState } from 'react';
import { Link } from 'react-router-dom';

function Shop() {
  // الصور الأصلية للـ Trending وتم تكرارها لتغطية الألعاب
  const allGames = [
    { 
      id: 1, 
      title: "Assassins Creed", 
      category: "Action", 
      price: "$28", 
      image: "https://templatemo.com/templates/templatemo_589_lugx_gaming/assets/images/trending-01.jpg" 
    },
    { 
      id: 2, 
      title: "Asobi World", 
      category: "Action", 
      price: "$22", 
      image: "https://templatemo.com/templates/templatemo_589_lugx_gaming/assets/images/trending-02.jpg" 
    },
    { 
      id: 3, 
      title: "Cyberpunk Action", 
      category: "Adventure", 
      price: "$32", 
      image: "https://templatemo.com/templates/templatemo_589_lugx_gaming/assets/images/trending-03.jpg" 
    },
    { 
      id: 4, 
      title: "Racing Master", 
      category: "Racing", 
      price: "$20", 
      image: "https://templatemo.com/templates/templatemo_589_lugx_gaming/assets/images/trending-04.jpg" 
    },
    { 
      id: 5, 
      title: "Strategy Legends", 
      category: "Strategy", 
      price: "$18", 
      image: "https://templatemo.com/templates/templatemo_589_lugx_gaming/assets/images/trending-01.jpg" 
    },
    { 
      id: 6, 
      title: "Galaxy Combat", 
      category: "Action", 
      price: "$45", 
      image: "https://templatemo.com/templates/templatemo_589_lugx_gaming/assets/images/trending-02.jpg" 
    },
    { 
      id: 7, 
      title: "Speed Horizon", 
      category: "Racing", 
      price: "$15", 
      image: "https://templatemo.com/templates/templatemo_589_lugx_gaming/assets/images/trending-03.jpg" 
    },
    { 
      id: 8, 
      title: "Epic Quest", 
      category: "Adventure", 
      price: "$30", 
      image: "https://templatemo.com/templates/templatemo_589_lugx_gaming/assets/images/trending-04.jpg" 
    },
    { 
      id: 9, 
      title: "Tactical Ops", 
      category: "Strategy", 
      price: "$25", 
      image: "https://templatemo.com/templates/templatemo_589_lugx_gaming/assets/images/trending-01.jpg" 
    },
    { 
      id: 10, 
      title: "Shadow Hunter", 
      category: "Action", 
      price: "$10", 
      image: "https://templatemo.com/templates/templatemo_589_lugx_gaming/assets/images/trending-02.jpg" 
    },
  ];

  const [selectedCategory, setSelectedCategory] = useState("Show All");
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 8;

  const filteredGames = selectedCategory === "Show All" 
    ? allGames 
    : allGames.filter(game => game.category === selectedCategory);

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentGames = filteredGames.slice(indexOfFirstItem, indexOfLastItem);
  const totalPages = Math.ceil(filteredGames.length / itemsPerPage);

  const categories = ["Show All", "Adventure", "Strategy", "Racing", "Action"];

  return (
    <div className="pb-16">
      
      {/* 1. البانر العلوي */}
      <div className="bg-[#0071f8] pt-55 pb-40 px-5 text-center rounded-b-[70px] mb-12 shadow-md">
        <h1 className="text-4xl md:text-5xl font-extrabold text-white mb-3">OUR SHOP</h1>
        <p className="text-white/80 text-sm md:text-base font-medium">
          <Link to="/" className="hover:underline">Home</Link> &gt; Our Shop
        </p>
      </div>

      <div className="max-w-[1200px] mx-auto px-5">
        
        {/* 2. أزرار التصفية */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {categories.map((cat, index) => (
            <button 
              key={index}
              onClick={() => {
                setSelectedCategory(cat);
                setCurrentPage(1);
              }}
              className={`px-6 py-3 rounded-full font-semibold text-sm transition-all shadow-sm ${
                selectedCategory === cat 
                  ? 'bg-[#0071f8] text-white shadow-blue-500/30' 
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* 3. شبكة الألعاب (مع تأثير الـ Hover واللون الأزرق على العنوان) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mb-12">
          {currentGames.length > 0 ? (
            currentGames.map((game) => (
              <div 
                key={game.id} 
                className="bg-white rounded-3xl p-4 shadow-sm border border-gray-100 hover:shadow-md transition group"
              >
                <div className="relative overflow-hidden rounded-2xl mb-4 aspect-[4/3]">
                  <img src={game.image} alt={game.title} className="w-full h-full object-cover group-hover:scale-105 transition duration-300" />
                  <span className="absolute top-3 right-3 bg-[#0071f8] text-white text-xs px-3 py-1.5 rounded-full font-bold shadow-md">
                    {game.price}
                  </span>
                </div>
                <span className="text-gray-400 text-xs font-semibold uppercase tracking-wider">{game.category}</span>
                
                {/* العنوان اللي بيتحول للأزرق لما يحصل hover على الكارد */}
                <h3 className="font-bold text-gray-800 text-lg mb-4 group-hover:text-[#0071f8] transition-colors duration-200">
                  {game.title}
                </h3>

                <Link 
                  to="/details" 
                  className="block text-center w-full bg-gray-100 hover:bg-[#0071f8] hover:text-white text-gray-800 py-2.5 rounded-xl font-medium transition"
                >
                  Explore
                </Link>
              </div>
            ))
          ) : (
            <p className="col-span-full text-center text-gray-500 py-12 text-lg">لا توجد ألعاب متاحة في هذا القسم حالياً</p>
          )}
        </div>

        {/* 4. الباجنيشن */}
        {totalPages > 1 && (
          <div className="flex justify-center items-center gap-2">
            {Array.from({ length: totalPages }, (_, index) => {
              const pageNum = index + 1;
              return (
                <button
                  key={pageNum}
                  onClick={() => {
                    setCurrentPage(pageNum);
                    window.scrollTo({ top: 0, behavior: 'smooth' });
                  }}
                  className={`w-10 h-10 rounded-full font-bold text-sm transition-all ${
                    currentPage === pageNum 
                      ? 'bg-[#0071f8] text-white shadow-md shadow-blue-500/20' 
                      : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                  }`}
                >
                  {pageNum}
                </button>
              );
            })}
          </div>
        )}

      </div>
    </div>
  );
}

export default Shop;