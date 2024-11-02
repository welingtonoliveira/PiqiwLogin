import { motion } from 'framer-motion';
import { FaLightbulb, FaCode, FaRocket } from 'react-icons/fa';

const steps = [
  {
    icon: <FaLightbulb className="w-8 h-8" />,
    number: "01",
    title: "Análise Inicial",
    description: "Entendemos profundamente seu negócio e objetivos para criar soluções sob medida."
  },
  {
    icon: <FaCode className="w-8 h-8" />,
    number: "02",
    title: "Desenvolvimento",
    description: "Criamos dashboards personalizados e otimizados para suas necessidades específicas."
  },
  {
    icon: <FaRocket className="w-8 h-8" />,
    number: "03",
    title: "Implementação",
    description: "Oferecemos treinamento completo e suporte contínuo para garantir o máximo aproveitamento."
  }
];

export default function Process() {
  return (
    <section className="py-24 bg-gradient-to-br from-blue-900 to-gray-900" id="process">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <h2 className="text-4xl font-bold text-white mb-6">
            Conheça nosso processo
          </h2>
          <p className="text-xl text-blue-200">
            Uma abordagem estruturada para garantir resultados excepcionais
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {steps.map((step, index) => (
            <motion.div
              key={step.number}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
              className="relative group"
            >
              <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 hover:bg-white/20 transition-all duration-300">
                <div className="absolute -top-4 -right-4 w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center text-white text-2xl font-bold group-hover:scale-110 transition-transform duration-300">
                  {step.number}
                </div>
                
                <div className="text-blue-400 mb-6 group-hover:scale-110 transition-transform duration-300">
                  {step.icon}
                </div>
                
                <h3 className="text-xl font-semibold text-white mb-4">
                  {step.title}
                </h3>
                
                <p className="text-blue-100">
                  {step.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}