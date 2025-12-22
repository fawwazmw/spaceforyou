import './Navigation.css';

export const Navigation = ({ currentPage, setCurrentPage }) => {
  const navItems = [
    { id: 'home', label: 'Home', icon: '🏠' },
    { id: 'letters', label: 'Letters', icon: '💌' },
    { id: 'journal', label: 'Her Space', icon: '📖' },
    { id: 'comfort', label: 'Comfort Corner', icon: '☁️' },
    { id: 'garden', label: 'Memory Garden', icon: '🌸' },
  ];

  return (
    <nav className="navigation">
      <div className="nav-container">
        <div className="nav-brand">
          <span className="brand-icon">✨</span>
          <span className="brand-text">A Space for You</span>
        </div>

        <ul className="nav-menu">
          {navItems.map((item) => (
            <li key={item.id}>
              <button
                onClick={() => setCurrentPage(item.id)}
                className={`nav-link ${currentPage === item.id ? 'active' : ''}`}
              >
                <span className="nav-icon">{item.icon}</span>
                <span className="nav-label">{item.label}</span>
              </button>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};
