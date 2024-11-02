import { motion } from 'framer-motion';

interface ServiceCardProps {
  title: string;
  description: string;
  icon: React.ReactNode;
  image: string;
  delay: number;
}

export default function ServiceCard({ title, description, icon, image, delay }: ServiceCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay }}
      className="group relative bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden"
    >
      <div className="absolute inset-0 bg-gradient-to-br from-blue-600/5 to-purple-600/5 transform group-hover:scale-95 transition-transform duration-300" />
      
      <div className="relative p-8">
        <div className="mb-6">
          <div className="w-16 h-16 bg-blue-600/10 rounded-lg flex items-center justify-center text-blue-600 group-hover:scale-110 transition-transform duration-300">
            {icon}
          </div>
        </div>
        
        <h3 className="text-xl font-semibold text-gray-900 mb-4 group-hover:text-blue-600 transition-colors duration-300">
          {title}
        </h3>
        
        <p className="text-gray-600 leading-relaxed mb-6">
          {description}
        </p>

        <img
          src={image}
          alt={title}
          className="w-full h-32 object-contain opacity-80 group-hover:opacity-100 transition-opacity duration-300"
        />
      </div>
    </motion.div>
  );
}