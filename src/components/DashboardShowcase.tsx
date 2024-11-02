import { Link } from 'react-router-dom';

export default function DashboardShowcase() {
  return (
    <section className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">
            Conheça Nossos Dashboards
          </h2>
          <p className="text-gray-600 max-w-3xl mx-auto">
            Explore exemplos de dashboards personalizados que desenvolvemos para diferentes setores e necessidades.
          </p>
        </div>
        
        <div className="flex justify-center">
          <Link
            to="/dashboards"
            className="inline-flex items-center px-8 py-3 bg-blue-600 text-white font-medium rounded-lg hover:bg-blue-700 transition-colors"
          >
            Ver Exemplos de Dashboards
          </Link>
        </div>
      </div>
    </section>
  );
}