import { FaChartLine, FaGlobe, FaClock, FaChartBar } from 'react-icons/fa';

export default function Features() {
  const features = [
    {
      icon: <FaChartLine className="w-8 h-8" />,
      title: "Decisões Inteligentes",
      description: "Insights instantâneos sobre seu negócio com poderosos relatórios e painéis."
    },
    {
      icon: <FaGlobe className="w-8 h-8" />,
      title: "Acesso Remoto",
      description: "Acesse seus dados de qualquer lugar, em um ambiente seguro e intuitivo."
    },
    {
      icon: <FaClock className="w-8 h-8" />,
      title: "Tempo Real",
      description: "Acompanhe o desempenho do seu negócio em tempo real."
    },
    {
      icon: <FaChartBar className="w-8 h-8" />,
      title: "Visualizações",
      description: "Dashboards interativos com métricas essenciais para seu negócio."
    }
  ];

  return (
    <section id="services" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">
          Nossas Soluções
        </h2>
        <div className="grid md:grid-cols-4 gap-8">
          {features.map((feature) => (
            <div key={feature.title} className="bg-gray-50 p-6 rounded-xl hover:shadow-xl transition-all">
              <div className="text-blue-600 mb-4">{feature.icon}</div>
              <h3 className="font-semibold mb-2">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}