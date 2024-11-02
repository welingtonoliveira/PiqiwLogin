export default function About() {
  return (
    <section id="about" className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-3xl font-bold mb-6">
              Sobre a PiQi Data
            </h2>
            <p className="text-gray-600 mb-4">
              Somos especialistas em transformar dados em insights valiosos para 
              empresas que buscam crescimento sustentável e tomada de decisão 
              baseada em dados.
            </p>
            <p className="text-gray-600">
              Nossa missão é democratizar o acesso à inteligência de dados, 
              tornando análises complexas acessíveis e acionáveis para empresas 
              de todos os tamanhos.
            </p>
          </div>
          <div className="bg-gradient-to-br from-blue-900 to-gray-900 p-8 rounded-2xl text-white">
            <h3 className="text-xl font-semibold mb-6">
              Por que escolher a PiQi?
            </h3>
            <ul className="space-y-4">
              <li className="flex items-center gap-3">
                <span className="text-blue-400">✓</span>
                Experiência comprovada em análise de dados
              </li>
              <li className="flex items-center gap-3">
                <span className="text-blue-400">✓</span>
                Soluções personalizadas para seu negócio
              </li>
              <li className="flex items-center gap-3">
                <span className="text-blue-400">✓</span>
                Suporte técnico especializado
              </li>
              <li className="flex items-center gap-3">
                <span className="text-blue-400">✓</span>
                Tecnologia de ponta em visualização de dados
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}