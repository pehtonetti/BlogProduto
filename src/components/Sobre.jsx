import React from "react";

function Sobre() {
    return (
        <section className="sobre container">
            <div className="card">
                <h2>Sobre</h2>
                <p>
                    Sou desenvolvedor e mantenho este blog para compartilhar conhecimento e
                    experiências em front‑end.
                </p>

                <article>
                    <h3>Informações Pessoais</h3>
                    <ul>
                        <li><strong>Nome:</strong> João Silva</li>
                        <li><strong>Profissão:</strong> Desenvolvedor Web</li>
                        <li><strong>Localização:</strong> São Paulo - Brasil</li>
                        <li><strong>Interesses:</strong> React, HTML5, CSS3, UI/UX</li>
                    </ul>
                </article>

                <article>
                    <h3>Sobre o Site</h3>
                    <p>
                        Este site foi criado para demonstrar o uso correto dos elementos
                        semânticos do HTML5 dentro de um projeto React. Cada parte da
                        estrutura tem um papel definido na organização do conteúdo.
                    </p>
                </article>
            </div>
        </section>
    );
}

export default Sobre;
