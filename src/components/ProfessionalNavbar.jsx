import React, { useState, useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { UserContext } from '../context/UserContext';
import { FiSearch, FiMenu, FiX, FiUser, FiLogOut, FiHome, FiUsers, FiBookOpen, FiInfo } from 'react-icons/fi';
import logo from '../assets/Home-page-images/logoImage.png';

const ProfessionalNavbar = () => {
  const { user, logout } = useContext(UserContext);
  const navigate = useNavigate();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');

  const navItems = [
    { id: '1', name: 'Home', link: '/', icon: <FiHome className="mr-2" /> },
    { id: '2', name: 'Find Tutors', link: '/tutors', icon: <FiUsers className="mr-2" /> },
    { id: '3', name: 'Become Tutor', link: '/become-tutor-form', icon: <FiUser className="mr-2" /> },
    { id: '4', name: 'Courses', link: '/courses', icon: <FiBookOpen className="mr-2" /> },
    { id: '5', name: 'About', link: '/about', icon: <FiInfo className="mr-2" /> },
  ];

  const handleSearch = (e) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      navigate(`/search?q=${encodeURIComponent(searchQuery)}`);
      setIsMenuOpen(false);
    }
  };

  return (
    <header className="sticky top-0 z-50 bg-white shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <div className="flex items-center">
            <Link to="/" className="flex items-center">
              <img src={logo} alt="EduConnect Logo" className="h-10 w-auto" />
              <span className="ml-3 text-xl font-semibold text-gray-900 hidden sm:block">
                <span className="text-indigo-600">E-</span>Tutor
              </span>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-8">
            {/* Search Bar */}
            <form onSubmit={handleSearch} className="relative w-72">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <FiSearch className="h-5 w-5 text-gray-400" />
              </div>
              <input
                type="text"
                placeholder="Search courses, tutors..."
                className="block w-full pl-10 pr-3 py-2 border border-gray-300 rounded-lg bg-gray-50 focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </form>

            {/* Navigation Links */}
            <ul className="flex space-x-6">
              {navItems.map((item) => (
                <li key={item.id}>
                  <Link
                    to={item.link}
                    className="text-gray-700 hover:text-indigo-600 text-sm font-medium transition-colors flex items-center"
                  >
                    {item.icon}
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>

            {/* Auth Buttons */}
            <div className="flex items-center space-x-4">
              {!user ? (
                <>
                  <button
                    onClick={() => navigate('/login')}
                    className="px-4 py-2 text-orange-500 text-sm font-medium hover:bg-indigo-50 rounded-lg transition-colors"
                  >
                    Log in
                  </button>
                  <button
                    onClick={() => navigate('/signup-page')}
                    className="px-4 py-2 bg-indigo-600 text-white text-sm font-medium hover:bg-indigo-700 rounded-lg transition-colors shadow-sm"
                  >
                    Sign up
                  </button>
                </>
              ) : (
                <div className="flex items-center space-x-4">
                  <button
                    onClick={() => navigate('/dashboard')}
                    className="flex items-center space-x-2 text-gray-700 hover:text-indigo-600"
                  >
                    <div className="h-8 w-8 rounded-full bg-indigo-100 flex items-center justify-center">
                      <FiUser className="h-4 w-4 text-indigo-600" />
                    </div>
                    <span className="text-sm font-medium">Dashboard</span>
                  </button>
                  <button
                    onClick={() => logout(navigate('/'))}
                    className="p-2 text-gray-500 hover:text-red-500 rounded-full hover:bg-gray-100"
                    title="Logout"
                  >
                    <FiLogOut className="h-5 w-5" />
                  </button>
                </div>
              )}
            </div>
          </nav>

          {/* Mobile Menu Button */}
          <div className="lg:hidden flex items-center">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-700 hover:text-indigo-600 hover:bg-gray-100 focus:outline-none"
            >
              {isMenuOpen ? (
                <FiX className="block h-6 w-6" />
              ) : (
                <FiMenu className="block h-6 w-6" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="lg:hidden bg-white border-t border-gray-200">
          <div className="px-4 pt-4 pb-6 space-y-4">
            {/* Mobile Search */}
            <form onSubmit={handleSearch} className="relative">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <FiSearch className="h-5 w-5 text-gray-400" />
              </div>
              <input
                type="text"
                placeholder="Search courses, tutors..."
                className="block w-full pl-10 pr-3 py-2 border border-gray-300 rounded-lg bg-gray-50 focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </form>

            {/* Mobile Nav Items */}
            <nav className="grid gap-2">
              {navItems.map((item) => (
                <Link
                  key={item.id}
                  to={item.link}
                  className="flex items-center px-3 py-2 rounded-lg text-gray-700 hover:bg-gray-100"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.icon}
                  <span className="ml-2 text-sm font-medium">{item.name}</span>
                </Link>
              ))}
            </nav>

            {/* Mobile Auth Buttons */}
            <div className="pt-4 border-t border-gray-200">
              {!user ? (
                <div className="grid gap-3">
                  <button
                    onClick={() => {
                      navigate('/login');
                      setIsMenuOpen(false);
                    }}
                    className="w-full px-4 py-2 text-indigo-600 border border-indigo-600 rounded-lg text-sm font-medium hover:bg-indigo-50"
                  >
                    Log in
                  </button>
                  <button
                    onClick={() => {
                      navigate('/signup-page');
                      setIsMenuOpen(false);
                    }}
                    className="w-full px-4 py-2 bg-indigo-600 text-white rounded-lg text-sm font-medium hover:bg-indigo-700 shadow-sm"
                  >
                    Sign up
                  </button>
                </div>
              ) : (
                <div className="grid gap-3">
                  <button
                    onClick={() => {
                      navigate('/dashboard');
                      setIsMenuOpen(false);
                    }}
                    className="w-full px-4 py-2 text-indigo-600 border border-indigo-600 rounded-lg text-sm font-medium hover:bg-indigo-50 flex items-center justify-center"
                  >
                    <FiUser className="mr-2" />
                    Dashboard
                  </button>
                  <button
                    onClick={() => {
                      logout();
                      navigate('/');
                      setIsMenuOpen(false);
                    }}
                    className="w-full px-4 py-2 text-red-600 border border-red-600 rounded-lg text-sm font-medium hover:bg-red-50 flex items-center justify-center"
                  >
                    <FiLogOut className="mr-2" />
                    Logout
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

export default ProfessionalNavbar;