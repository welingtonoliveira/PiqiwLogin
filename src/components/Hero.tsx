import { useForm } from 'react-hook-form';
import { motion } from 'framer-motion';

type FormData = {
  nome: string;
  telefone: string;
  email: string;
  mensagem: string;
};

export default function Hero() {
  const { register, handleSubmit, formState: { errors } } = useForm<FormData>();

  const onSubmit = (data: FormData) => {
    console.log(data);
  };

  return (
    <section className="pt-32 pb-16 px-4 bg-gradient-to-br from-gray-900 to-blue-900">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-16">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="space-y-8"
        >
          <h1 className="text-4xl font-bold text-white">
            Elimine a adivinhação. Garanta o crescimento orientado por dados.
          </h1>
          
          <div className="space-y-6 text-blue-100">
            <p className="text-lg">
              A <span className="font-semibold">PiQi Data Monetization</span> fornece soluções 
              de relatórios de inteligência empresarial de ponta que permitem que sua empresa 
              tome medidas significativas em direção a objetivos estratégicos importantes.
            </p>
            
            <p>
              Transforme seus dados em insights precisos e acionáveis para impulsionar as 
              vendas, descobrir tendências de mercado e identificar as necessidades do 
              cliente.
            </p>
          </div>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="bg-white/10 backdrop-blur-lg p-6 rounded-2xl"
        >
          <h2 className="text-2xl font-bold text-white mb-6">
            Solicite uma consulta gratuita
          </h2>
          
          <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
            <div>
              <input
                type="text"
                placeholder="Nome"
                {...register('nome', { required: true })}
                className={`w-full px-4 py-2 rounded-lg bg-white/5 border ${
                  errors.nome ? 'border-red-500' : 'border-white/20'
                } text-white placeholder-white/60 focus:ring-2 focus:ring-blue-500 focus:border-transparent`}
              />
              {errors.nome && (
                <span className="text-red-400 text-sm mt-1">Nome é obrigatório</span>
              )}
            </div>

            <div>
              <input
                type="tel"
                placeholder="Telefone"
                {...register('telefone', { required: true })}
                className={`w-full px-4 py-2 rounded-lg bg-white/5 border ${
                  errors.telefone ? 'border-red-500' : 'border-white/20'
                } text-white placeholder-white/60 focus:ring-2 focus:ring-blue-500 focus:border-transparent`}
              />
              {errors.telefone && (
                <span className="text-red-400 text-sm mt-1">Telefone é obrigatório</span>
              )}
            </div>

            <div>
              <input
                type="email"
                placeholder="Email"
                {...register('email', { 
                  required: true,
                  pattern: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i 
                })}
                className={`w-full px-4 py-2 rounded-lg bg-white/5 border ${
                  errors.email ? 'border-red-500' : 'border-white/20'
                } text-white placeholder-white/60 focus:ring-2 focus:ring-blue-500 focus:border-transparent`}
              />
              {errors.email && (
                <span className="text-red-400 text-sm mt-1">Email válido é obrigatório</span>
              )}
            </div>

            <div>
              <textarea
                placeholder="Como podemos te ajudar?"
                {...register('mensagem', { required: true })}
                rows={3}
                className={`w-full px-4 py-2 rounded-lg bg-white/5 border ${
                  errors.mensagem ? 'border-red-500' : 'border-white/20'
                } text-white placeholder-white/60 focus:ring-2 focus:ring-blue-500 focus:border-transparent`}
              />
              {errors.mensagem && (
                <span className="text-red-400 text-sm mt-1">Mensagem é obrigatória</span>
              )}
            </div>

            <button
              type="submit"
              className="w-full bg-blue-600 text-white py-3 rounded-lg font-medium hover:bg-blue-700 transition-colors"
            >
              VAMOS CONVERSAR
            </button>
          </form>
        </motion.div>
      </div>
    </section>
  );
}