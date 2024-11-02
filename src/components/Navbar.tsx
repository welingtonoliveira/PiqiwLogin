import { Link } from 'react-router-dom';

export default function Navbar() {
  return (
    <nav className="fixed w-full bg-white shadow-sm z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <Link to="/" className="text-xl font-semibold text-gray-900">
            PiQi Data
          </Link>
          
          <div className="hidden md:flex space-x-8">
            <a href="#services" className="text-gray-600 hover:text-blue-600">
              Serviços
            </a>
            <a href="#about" className="text-gray-600 hover:text-blue-600">
              Sobre
            </a>
            <Link to="/dashboards" className="text-gray-600 hover:text-blue-600">
              Dashboards
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}