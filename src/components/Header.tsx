import { useState } from 'react';
import { Link } from 'react-router-dom';
import Logo from './Logo';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="fixed w-full bg-white z-50 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-24">
          <Logo />

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            <Link 
              to="/" 
              className="text-gray-900 hover:text-gray-600 font-medium tracking-wide"
            >
              HOME
            </Link>
            <a 
              href="#services" 
              className="text-gray-900 hover:text-gray-600 font-medium tracking-wide"
            >
              COMO FUNCIONA?
            </a>
          </nav>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {isMenuOpen ? (
                <path d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden border-t border-gray-100">
            <div className="px-2 pt-2 pb-3 space-y-1">
              <Link
                to="/"
                className="block px-3 py-2 text-gray-900 hover:text-gray-600 font-medium"
                onClick={() => setIsMenuOpen(false)}
              >
                HOME
              </Link>
              <a
                href="#services"
                className="block px-3 py-2 text-gray-900 hover:text-gray-600 font-medium"
                onClick={() => setIsMenuOpen(false)}
              >
                COMO FUNCIONA?
              </a>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}