import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Film, Search, X, Menu } from "lucide-react";

function NavBar() {
  const [searchQuery, setSearchQuery] = useState("");
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navItems = [
    { label: "Movies", path: "/movies" },
    { label: "Top Rated", path: "/top-rated" },
    { label: 'Coming Soon', path: "/coming-soon" },
  ];

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) {
        setIsMenuOpen(false);
      }
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <nav className="bg-black/80 backdrop-blur-sm p-3 border-b border-gray-800 sticky top-0 z-50">
      <div className="container mx-auto flex items-center justify-between gap-4">
        <Link to="/" className="flex items-center gap-2 text-white no-underline flex-shrink-0">
          <Film className="w-9 h-9 text-yellow-400" />
          <span className="font-bold text-2xl hidden sm:block">Movie</span>
        </Link>

        <div className="hidden md:flex items-center bg-transparent border border-gray-500 rounded-full py-1.5 px-3 w-full max-w-xs">
          <Search className="text-gray-400 w-5 h-5" />
          <input
            type="text"
            onChange={(e) => setSearchQuery(e.target.value)}
            value={searchQuery}
            placeholder="Search Movie"
            className="bg-transparent text-white placeholder-gray-400 focus:outline-none w-full ml-2"
          />
        </div>

        <div className="hidden md:flex items-center gap-6">
          {navItems.map((item) => (
            <Link key={item.label} to={item.path} className="text-gray-200 font-medium text-lg hover:text-yellow-400 transition-colors">
              {item.label}
            </Link>
          ))}
        </div>

        <div className="md:hidden">
          <button className="text-white p-2" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {isMenuOpen && (
        <div className="md:hidden mt-4 p-4 bg-gray-900/95 rounded-lg">
          <div className="flex flex-col gap-4">
            {navItems.map((item) => (
              <Link key={item.label} to={item.path} onClick={() => setIsMenuOpen(false)} className="text-gray-200 font-medium text-lg hover:text-yellow-400 transition-colors p-2 rounded-md hover:bg-gray-800 text-center">
                {item.label}
              </Link>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
}

export default NavBar;