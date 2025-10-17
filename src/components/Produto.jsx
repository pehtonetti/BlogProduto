import React, { useEffect } from 'react';

const produtosMock = [
  { id: 1, nome: 'Produto A', imagem: '/assets/produto-a.svg', preco: 'R$ 19,90' },
  { id: 2, nome: 'Produto B', imagem: '/assets/produto-b.svg', preco: 'R$ 29,90' },
  { id: 3, nome: 'Produto C', imagem: '/assets/produto-c.svg', preco: 'R$ 39,90' },
  { id: 4, nome: 'Produto D', imagem: '/assets/produto-d.svg', preco: 'R$ 49,90' }
];

function Produto() {
  useEffect(() => {
    // Ao montar a página de produtos, certificar que o título fique visível
    const el = document.querySelector('.produtos h2');
    if (!el) return;
    // esperar o layout se estabilizar (fonts/asset loading)
    const t = setTimeout(() => {
      const header = document.querySelector('header');
      const headerHeight = header ? header.offsetHeight : 0;
      const top = el.getBoundingClientRect().top + window.scrollY - headerHeight - 8; // pequena folga
      window.scrollTo({ top, behavior: 'smooth' });
    }, 50);
    return () => clearTimeout(t);
  }, []);
  return (
    <section className="produtos container">
      <h2>Produtos</h2>
      <div className="grid">
        {produtosMock.map(p => (
          <article key={p.id} className="card produto">
            <img src={p.imagem} alt={p.nome} />
            <h3>{p.nome}</h3>
            <p className="preco">{p.preco}</p>
          </article>
        ))}
      </div>
    </section>
  );
}

export default Produto;
