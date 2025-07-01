# 📅 CalendarioTech

<div align="center">

![CalendarioTech Logo](https://img.shields.io/badge/CalendarioTech-Hub%20Central-bd93f9?style=for-the-badge&logo=calendar&logoColor=white)

**Hub Central para Eventos de Tecnologia**

Uma plataforma minimalista e centralizada para descoberta e divulgação de eventos tech, construída com IA e dedicada à comunidade.

[![Next.js](https://img.shields.io/badge/Next.js-15-black?style=flat-square&logo=next.js)](https://nextjs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.0-blue?style=flat-square&logo=typescript)](https://www.typescriptlang.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind-CSS-38bdf8?style=flat-square&logo=tailwind-css)](https://tailwindcss.com/)
[![License](https://img.shields.io/badge/License-MIT-green?style=flat-square)](LICENSE)

[🚀 SITE](https://v0-calendario-tech-platform.vercel.app/) • [📖 Manifesto](https://calendario-tech.vercel.app/manifesto) • [🐛 Issues](https://github.com/jeanmendanhaa/calendario-tech/issues) • [💬 Discussões](https://github.com/jeanmendanhaa/calendario-tech/discussions)

</div>

---

## 🎯 Objetivo

O **CalendarioTech** surge como uma solução para a fragmentação das informações sobre eventos de tecnologia no Brasil. Nossa missão é criar um portal unificado onde a comunidade tech possa:

- 📅 **Descobrir eventos** de forma centralizada
- 📝 **Submeter eventos** para aprovação
- 📚 **Compartilhar artigos** técnicos e científicos
- 🤝 **Conectar-se** com outros profissionais da área

## ✨ Funcionalidades

### 🗓️ Agenda Dinâmica
- Calendário mensal interativo
- Visualização de eventos por data
- Cards informativos com hover
- Navegação fluida entre meses

### 📋 Sistema de Submissão
- **Eventos**: Formulário completo com validação
- **Artigos**: Publicação de conteúdo técnico
- Sistema de aprovação administrativa
- Feedback em tempo real

### 🔐 Painel Administrativo
- Autenticação segura
- Moderação de eventos e artigos
- Interface intuitiva para aprovação/rejeição
- Gestão centralizada de conteúdo

### 🎨 Design Moderno
- **Dracula Theme** elegante e profissional
- Interface responsiva
- Componentes reutilizáveis
- Experiência de usuário otimizada

## 🛠️ Tecnologias Utilizadas

### Frontend
- **[Next.js 15](https://nextjs.org/)** - Framework React com App Router
- **[TypeScript](https://www.typescriptlang.org/)** - Tipagem estática
- **[Tailwind CSS](https://tailwindcss.com/)** - Framework CSS utilitário
- **[shadcn/ui](https://ui.shadcn.com/)** - Componentes UI modernos
- **[Lucide React](https://lucide.dev/)** - Ícones SVG

### Backend & Dados
- **[Supabase](https://supabase.com/)** - Backend as a Service
- **[Vercel](https://vercel.com/)** - Deploy e hospedagem

### Ferramentas de Desenvolvimento
- **[V0 Vercel](https://v0.dev/)** - Geração de componentes com IA
- **[Google Gemini](https://gemini.google.com/)** - Assistência de desenvolvimento
- **[ESLint](https://eslint.org/)** - Linting de código
- **[Prettier](https://prettier.io/)** - Formatação de código

## 🚀 Como Executar Localmente

### Pré-requisitos
- Node.js 18+ 
- npm, yarn ou pnpm
- Git

### Instalação

1. **Clone o repositório**
\`\`\`bash
git clone https://github.com/jeanmendanhaa/calendario-tech.git
cd calendario-tech
\`\`\`

2. **Instale as dependências**
\`\`\`bash
npm install
# ou
yarn install
# ou
pnpm install
\`\`\`

3. **Configure as variáveis de ambiente**
\`\`\`bash
cp .env.example .env.local
\`\`\`

Edite o arquivo `.env.local` com suas configurações:
\`\`\`env
# Supabase
NEXT_PUBLIC_SUPABASE_URL=your_supabase_url
NEXT_PUBLIC_SUPABASE_ANON_KEY=your_supabase_anon_key

# Admin (opcional para desenvolvimento)
ADMIN_USERNAME=JeanMendanha
ADMIN_PASSWORD=21121991
\`\`\`

4. **Execute o servidor de desenvolvimento**
\`\`\`bash
npm run dev
# ou
yarn dev
# ou
pnpm dev
\`\`\`

5. **Acesse a aplicação**
Abra [http://localhost:3000](http://localhost:3000) no seu navegador.

## 📁 Estrutura do Projeto

\`\`\`
calendario-tech/
├── app/                    # App Router (Next.js 15)
│   ├── admin/             # Páginas administrativas
│   ├── articles/          # Seção de artigos
│   ├── manifesto/         # Página do manifesto
│   ├── submit-event/      # Formulário de eventos
│   ├── submit-article/    # Formulário de artigos
│   ├── layout.tsx         # Layout principal
│   ├── page.tsx           # Página inicial
│   └── globals.css        # Estilos globais
├── components/            # Componentes React
│   ├── ui/               # Componentes base (shadcn/ui)
│   ├── admin/            # Componentes administrativos
│   ├── calendar.tsx      # Componente do calendário
│   ├── event-card.tsx    # Card de eventos
│   ├── article-card.tsx  # Card de artigos
│   └── navigation.tsx    # Navegação principal
├── lib/                  # Utilitários e configurações
│   ├── types.ts          # Definições de tipos
│   ├── data.ts           # Gerenciamento de dados
│   ├── auth.ts           # Autenticação
│   └── utils.ts          # Funções utilitárias
├── hooks/                # Custom hooks
├── public/               # Arquivos estáticos
└── README.md            # Este arquivo
\`\`\`

## 🤝 Como Contribuir

Adoramos contribuições da comunidade! Aqui está como você pode ajudar:

### 🐛 Reportando Bugs
1. Verifique se o bug já foi reportado nas [Issues](https://github.com/jeanmendanhaa/calendario-tech/issues)
2. Crie uma nova issue com:
   - Descrição clara do problema
   - Passos para reproduzir
   - Screenshots (se aplicável)
   - Informações do ambiente

### 💡 Sugerindo Funcionalidades
1. Abra uma [Discussion](https://github.com/jeanmendanhaa/calendario-tech/discussions)
2. Descreva a funcionalidade desejada
3. Explique o caso de uso
4. Aguarde feedback da comunidade

### 🔧 Contribuindo com Código

1. **Fork o projeto**
\`\`\`bash
git clone https://github.com/seu-usuario/calendario-tech.git
\`\`\`

2. **Crie uma branch para sua feature**
\`\`\`bash
git checkout -b feature/nova-funcionalidade
\`\`\`

3. **Faça suas alterações**
   - Siga os padrões de código existentes
   - Adicione testes se necessário
   - Atualize a documentação

4. **Commit suas mudanças**
\`\`\`bash
git commit -m "feat: adiciona nova funcionalidade"
\`\`\`

5. **Push para sua branch**
\`\`\`bash
git push origin feature/nova-funcionalidade
\`\`\`

6. **Abra um Pull Request**
   - Descreva suas mudanças
   - Referencie issues relacionadas
   - Aguarde review

### 📝 Padrões de Commit
Utilizamos [Conventional Commits](https://www.conventionalcommits.org/):

- `feat:` Nova funcionalidade
- `fix:` Correção de bug
- `docs:` Documentação
- `style:` Formatação
- `refactor:` Refatoração
- `test:` Testes
- `chore:` Tarefas de manutenção

## 🧪 Análise do Código Gerado por IA

Este projeto é um experimento único que demonstra como a IA pode acelerar o desenvolvimento. Áreas de interesse para análise:

### 🔍 Pontos de Análise
- **Qualidade do código** gerado pelo V0 Vercel
- **Padrões de arquitetura** sugeridos pela IA
- **Otimizações** e melhorias possíveis
- **Acessibilidade** e boas práticas
- **Performance** e otimização

### 📊 Métricas de Interesse
- Tempo de desenvolvimento vs. desenvolvimento tradicional
- Qualidade do código gerado vs. escrito manualmente
- Manutenibilidade e escalabilidade
- Aderência às melhores práticas

### 🎯 Oportunidades de Melhoria
Contribuidores são encorajados a:
- Refatorar código gerado por IA
- Implementar testes automatizados
- Melhorar acessibilidade
- Otimizar performance
- Adicionar documentação

## 📈 Roadmap

### 🚀 Versão 1.0 (Atual)
- [x] Calendário interativo
- [x] Sistema de submissão
- [x] Painel administrativo
- [x] Seção de artigos
- [x] Design Dracula Theme

### 🎯 Versão 1.1 (Próxima)
- [ ] Integração com banco de dados real
- [ ] Sistema de notificações por email
- [ ] Filtros avançados de busca
- [ ] Export para Google Calendar
- [ ] API pública

### 🌟 Versão 2.0 (Futuro)
- [ ] Sistema de usuários
- [ ] Favoritos e lembretes
- [ ] Integração com redes sociais
- [ ] App mobile (React Native)
- [ ] Sistema de recomendações

## 📄 Licença

Este projeto está licenciado sob a [Licença MIT](LICENSE) - veja o arquivo LICENSE para detalhes.

## 👥 Comunidade

### 💬 Onde Conversar
- **[GitHub Discussions](https://github.com/jeanmendanhaa/calendario-tech/discussions)** - Discussões gerais
- **[Issues](https://github.com/jeanmendanhaa/calendario-tech/issues)** - Bugs e funcionalidades
- **[Twitter](https://twitter.com/jeanmendanhaa)** - Updates e novidades

### 🏆 Contribuidores

Agradecemos a todos que contribuem para o projeto:

<!-- ALL-CONTRIBUTORS-LIST:START -->
<table>
  <tr>
    <td align="center">
      <a href="https://github.com/jeanmendanhaa">
        <img src="https://github.com/jeanmendanhaa.png" width="100px;" alt="Jean Mendanha"/>
        <br />
        <sub><b>Jean Mendanha</b></sub>
      </a>
      <br />
      <span title="Criador">🚀</span>
    </td>
  </tr>
</table>
<!-- ALL-CONTRIBUTORS-LIST:END -->

## 🙏 Agradecimentos

- **[Vercel](https://vercel.com/)** pelo V0 e hospedagem
- **[Google](https://google.com/)** pelo Gemini
- **[Supabase](https://supabase.com/)** pela infraestrutura
- **Comunidade Open Source** pela inspiração
- **Todos os contribuidores** que tornam este projeto possível

---

<div align="center">

**Desenvolvido com ❤️ por [Jean Mendanha](https://github.com/jeanmendanhaa) e a comunidade**

**Powered by IA • Open Source Forever**

[⭐ Star no GitHub](https://github.com/jeanmendanhaa/calendario-tech) • [🐛 Reportar Bug](https://github.com/jeanmendanhaa/calendario-tech/issues) • [💡 Sugerir Feature](https://github.com/jeanmendanhaa/calendario-tech/discussions)

</div>
