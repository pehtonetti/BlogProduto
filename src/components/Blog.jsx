import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Home from './Home';
import Sobre from './Sobre';
import Contato from './Contato';
import Produto from './Produto';

function Blog() {
  return (
    <Router>
      <header>
        <div className="container">
          <h1>Meu Blog Pessoal</h1>
          <nav>
            <ul>
              <li><Link to="/">Início</Link></li>
              <li><Link to="/sobre">Sobre</Link></li>
              <li><Link to="/contato">Contato</Link></li>
              <li><Link to="/produtos">Produtos</Link></li>
            </ul>
          </nav>
        </div>
      </header>
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/sobre" element={<Sobre />} />
          <Route path="/contato" element={<Contato />} />
          <Route path="/produtos" element={<Produto />} />
        </Routes>
      </main>
      <footer>
        <div className="container">
          <p>&copy; 2025 Meu Blog</p>
        </div>
      </footer>
    </Router>
  );
}

export default Blog;