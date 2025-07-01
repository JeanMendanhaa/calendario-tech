import { Code, Users, Lightbulb, GitBranch, Heart, Zap } from "lucide-react"

export default function ManifestoPage() {
  return (
    <div className="max-w-4xl mx-auto space-y-12">
      {/* Hero Section */}
      <div className="text-center space-y-6">
        <h1 className="text-5xl font-bold text-dracula-purple mb-4">Manifesto CalendarioTech</h1>
        <p className="text-xl text-dracula-cyan max-w-2xl mx-auto leading-relaxed">
          Uma plataforma nascida da necessidade, construída com IA, e dedicada à comunidade
        </p>
      </div>

      {/* Main Content */}
      <div className="space-y-16">
        {/* Origin Story */}
        <section className="dracula-card p-8 rounded-lg">
          <div className="flex items-center space-x-3 mb-6">
            <Lightbulb className="text-dracula-yellow" size={32} />
            <h2 className="text-3xl font-bold text-dracula-cyan">A Origem</h2>
          </div>

          <div className="prose prose-lg text-dracula-fg space-y-4">
            <p className="text-lg leading-relaxed">
              O <strong className="text-dracula-purple">CalendarioTech</strong> nasceu de uma necessidade real
              identificada por
              <strong className="text-dracula-cyan"> Jean Mendanha</strong>, desenvolvedor apaixonado por tecnologia que
              percebeu a fragmentação das informações sobre eventos tech no Brasil.
            </p>

            <p className="text-lg leading-relaxed">
              Cansado de perder eventos importantes por falta de uma fonte centralizada de informações, Jean decidiu
              criar uma solução que não apenas resolvesse seu próprio problema, mas que pudesse beneficiar toda a
              comunidade de tecnologia brasileira.
            </p>
          </div>
        </section>

        {/* AI-Powered Development */}
        <section className="dracula-card p-8 rounded-lg">
          <div className="flex items-center space-x-3 mb-6">
            <Zap className="text-dracula-orange" size={32} />
            <h2 className="text-3xl font-bold text-dracula-cyan">Construído com IA</h2>
          </div>

          <div className="prose prose-lg text-dracula-fg space-y-4">
            <p className="text-lg leading-relaxed">
              Este projeto representa um marco na democratização do desenvolvimento de software. Utilizando as mais
              avançadas ferramentas de Inteligência Artificial disponíveis hoje:
            </p>

            <div className="grid md:grid-cols-3 gap-6 my-8">
              <div className="bg-dracula-current-line p-4 rounded-lg text-center">
                <div className="text-dracula-purple font-bold text-lg mb-2">V0 Vercel</div>
                <p className="text-sm text-dracula-comment">Geração inteligente de componentes React</p>
              </div>
              <div className="bg-dracula-current-line p-4 rounded-lg text-center">
                <div className="text-dracula-green font-bold text-lg mb-2">Google Gemini</div>
                <p className="text-sm text-dracula-comment">Assistência na lógica e estruturação</p>
              </div>
              <div className="bg-dracula-current-line p-4 rounded-lg text-center">
                <div className="text-dracula-cyan font-bold text-lg mb-2">Supabase</div>
                <p className="text-sm text-dracula-comment">Backend e banco de dados modernos</p>
              </div>
            </div>

            <p className="text-lg leading-relaxed">
              A base do código foi gerada com o auxílio dessas ferramentas, demonstrando como a IA pode acelerar o
              desenvolvimento e permitir que desenvolvedores foquem na solução de problemas reais ao invés de tarefas
              repetitivas.
            </p>
          </div>
        </section>

        {/* Open Source Philosophy */}
        <section className="dracula-card p-8 rounded-lg">
          <div className="flex items-center space-x-3 mb-6">
            <GitBranch className="text-dracula-green" size={32} />
            <h2 className="text-3xl font-bold text-dracula-cyan">Filosofia Open Source</h2>
          </div>

          <div className="prose prose-lg text-dracula-fg space-y-4">
            <p className="text-lg leading-relaxed">
              O <strong className="text-dracula-purple">CalendarioTech</strong> é mais que uma plataforma - é um
              experimento social e tecnológico. Ao disponibilizar todo o código-fonte abertamente, criamos uma
              oportunidade única para a comunidade:
            </p>

            <div className="bg-dracula-current-line p-6 rounded-lg my-6">
              <h3 className="text-xl font-semibold text-dracula-yellow mb-4">Nossos Objetivos:</h3>
              <ul className="space-y-3 text-dracula-fg">
                <li className="flex items-start space-x-3">
                  <span className="text-dracula-purple">•</span>
                  <span>Permitir análise crítica do código gerado por IA</span>
                </li>
                <li className="flex items-start space-x-3">
                  <span className="text-dracula-purple">•</span>
                  <span>Facilitar aprendizado sobre desenvolvimento moderno</span>
                </li>
                <li className="flex items-start space-x-3">
                  <span className="text-dracula-purple">•</span>
                  <span>Incentivar contribuições da comunidade</span>
                </li>
                <li className="flex items-start space-x-3">
                  <span className="text-dracula-purple">•</span>
                  <span>Evoluir baseado nas necessidades reais dos usuários</span>
                </li>
              </ul>
            </div>

            <p className="text-lg leading-relaxed">
              Acreditamos que a transparência no desenvolvimento, especialmente quando envolve IA, é fundamental para
              construir confiança e promover a inovação colaborativa.
            </p>
          </div>
        </section>

        {/* Community Driven */}
        <section className="dracula-card p-8 rounded-lg">
          <div className="flex items-center space-x-3 mb-6">
            <Users className="text-dracula-pink" size={32} />
            <h2 className="text-3xl font-bold text-dracula-cyan">Impulsionado pela Comunidade</h2>
          </div>

          <div className="prose prose-lg text-dracula-fg space-y-4">
            <p className="text-lg leading-relaxed">
              A verdadeira força do CalendarioTech reside na sua comunidade. Cada contribuição, seja um bug report, uma
              sugestão de feature, ou uma melhoria no código, nos ajuda a construir uma plataforma mais robusta e útil
              para todos.
            </p>

            <div className="grid md:grid-cols-2 gap-6 my-8">
              <div className="space-y-4">
                <h3 className="text-xl font-semibold text-dracula-yellow">Como Contribuir:</h3>
                <ul className="space-y-2 text-dracula-fg">
                  <li>🐛 Reportar bugs e problemas</li>
                  <li>💡 Sugerir novas funcionalidades</li>
                  <li>🔧 Melhorar o código existente</li>
                  <li>📝 Contribuir com documentação</li>
                  <li>🎨 Aprimorar o design e UX</li>
                </ul>
              </div>

              <div className="space-y-4">
                <h3 className="text-xl font-semibold text-dracula-yellow">Benefícios:</h3>
                <ul className="space-y-2 text-dracula-fg">
                  <li>🚀 Aprender tecnologias modernas</li>
                  <li>🤝 Networking com outros devs</li>
                  <li>📈 Construir portfólio</li>
                  <li>🌟 Reconhecimento na comunidade</li>
                  <li>💪 Impacto real na comunidade tech</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Vision for the Future */}
        <section className="dracula-card p-8 rounded-lg">
          <div className="flex items-center space-x-3 mb-6">
            <Heart className="text-dracula-red" size={32} />
            <h2 className="text-3xl font-bold text-dracula-cyan">Nossa Visão</h2>
          </div>

          <div className="prose prose-lg text-dracula-fg space-y-4">
            <p className="text-lg leading-relaxed">
              Sonhamos com um ecossistema de tecnologia brasileiro mais conectado, onde informações fluem livremente e
              oportunidades são acessíveis a todos. O CalendarioTech é apenas o primeiro passo nessa jornada.
            </p>

            <div className="bg-gradient-to-r from-dracula-purple to-dracula-pink p-6 rounded-lg my-6">
              <blockquote className="text-xl font-medium text-dracula-bg italic text-center">
                "Tecnologia é melhor quando aproxima pessoas. Código é melhor quando é compartilhado. Conhecimento é
                melhor quando é acessível a todos."
              </blockquote>
              <p className="text-center text-dracula-bg mt-4 font-semibold">- Filosofia CalendarioTech</p>
            </div>

            <p className="text-lg leading-relaxed">
              Junte-se a nós nesta missão de democratizar o acesso à informação sobre eventos de tecnologia e de mostrar
              como a colaboração entre humanos e IA pode criar soluções verdadeiramente impactantes.
            </p>
          </div>
        </section>

        {/* Call to Action */}
        <section className="text-center space-y-6 bg-gradient-to-r from-dracula-purple to-dracula-pink p-8 rounded-lg">
          <h2 className="text-3xl font-bold text-dracula-bg">Faça Parte da História</h2>
          <p className="text-lg text-dracula-bg max-w-2xl mx-auto">
            O CalendarioTech é mais que código - é um movimento. Um movimento em direção a um desenvolvimento mais
            transparente, colaborativo e impactante.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <a
              href="https://github.com/jeanmendanha/calendario-tech"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center space-x-2 bg-dracula-bg text-dracula-purple px-6 py-3 rounded-lg font-semibold hover:bg-dracula-current-line transition-colors"
            >
              <Code size={20} />
              <span>Ver no GitHub</span>
            </a>

            <a
              href="/submit-event"
              className="inline-flex items-center space-x-2 bg-dracula-bg text-dracula-green px-6 py-3 rounded-lg font-semibold hover:bg-dracula-current-line transition-colors"
            >
              <Users size={20} />
              <span>Contribuir Agora</span>
            </a>
          </div>
        </section>
      </div>

      {/* Footer */}
      <div className="text-center text-dracula-comment border-t border-dracula-current-line pt-8">
        <p>Desenvolvido com ❤️ por Jean Mendanha e a comunidade • Powered by IA • Open Source Forever</p>
      </div>
    </div>
  )
}
