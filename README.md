# Blog de Produtos · React + Vite

SPA de estudo com rotas para Home, Sobre, Blog, Produtos e Contato. Projeto desenvolvido durante o curso Full-Stack do SENAC para praticar componentização e roteamento no React.

![React](https://img.shields.io/badge/React-19-61DAFB?logo=react&logoColor=black)
![React Router](https://img.shields.io/badge/React_Router-7-CA4245?logo=reactrouter&logoColor=white)
![Vite](https://img.shields.io/badge/Vite-646CFF?logo=vite&logoColor=white)
![Sass](https://img.shields.io/badge/Sass-CC6699?logo=sass&logoColor=white)

## Conceitos praticados

- Componentes funcionais e composição
- Rotas com **React Router**
- Estilização com **Sass** e variável CSS de altura do header atualizada com `ResizeObserver`
- Lint com ESLint (flat config)

## Como rodar

```bash
git clone https://github.com/pehtonetti/BlogProduto.git
cd BlogProduto
npm install
npm run dev
```

Acesse `http://localhost:5173`.

## Estrutura

```text
src/
├── components/   # Blog (rotas), Home, Sobre, Produto, Contato
├── styles/       # main.scss
├── App.jsx       # Layout e ajuste dinâmico do header
└── main.jsx      # Ponto de entrada
```

---

**Pedro Tonetti** · [Portfólio](https://pehtonetti.github.io/portifolio/)
