

export const Navigation = ({ currentPage, setCurrentPage }) => {
  const navItems = [
    { id: 'home', label: 'Home', icon: '🏠' },
    { id: 'letters', label: 'Letters', icon: '💌' },
    { id: 'journal', label: 'Her Space', icon: '📖' },
    { id: 'comfort', label: 'Comfort Corner', icon: '☁️' },
    { id: 'garden', label: 'Memory Garden', icon: '🌸' },
  ];

  return (
    <nav className="fixed top-0 w-full z-50 bg-white/10 backdrop-blur-sm transition-all duration-300">
      <div className="max-w-7xl mx-auto px-4 md:px-6 py-3 md:py-4">
        <div className="flex items-center justify-between flex-wrap gap-2 md:gap-4">
          {/* Brand */}
          <div className="flex items-center gap-2">
            <span className="text-xl md:text-2xl">✨</span>
            <span className="text-lg md:text-xl font-serif text-[#2c2c2c]">A Space for You</span>
          </div>

          {/* Nav Menu */}
          <ul className="flex items-center gap-1 md:gap-2 flex-wrap">
            {navItems.map((item) => (
              <li key={item.id}>
                <button
                  onClick={() => setCurrentPage(item.id)}
                  className={`flex items-center gap-2 px-3 md:px-4 py-2 rounded-lg transition-all ${
                    currentPage === item.id
                      ? 'bg-gradient-to-r from-[#FFB6C1] to-[#FF8FA3] text-white shadow-md'
                      : 'hover:bg-[#ffe5d9] text-[#666666]'
                  }`}
                >
                  <span className="text-lg">{item.icon}</span>
                  <span className="hidden md:inline text-sm font-medium">{item.label}</span>
                </button>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
};
