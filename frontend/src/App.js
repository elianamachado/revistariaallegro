import { useState, useEffect } from "react";
import "./App.css";

function App() {
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'historia', 'produtos', 'diferenciais', 'localizacao'];
      const scrollPosition = window.scrollY + 100;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const produtos = [
    { icon: "📚", nome: "Revistas", descricao: "Variedade de títulos nacionais e importados" },
    { icon: "🗞️", nome: "Jornais", descricao: "Principais jornais diários e semanais" },
    { icon: "📕", nome: "Gibis", descricao: "Quadrinhos clássicos e lançamentos" },
    { icon: "🃏", nome: "Álbuns de Figurinhas", descricao: "Figurinhas e álbuns de coleção" },
    { icon: "✏️", nome: "Passatempos", descricao: "Caça-palavras, cruzadas, sudoku" },
    { icon: "⚡", nome: "Cards Pokémon", descricao: "Cartinhas e itens colecionáveis" },
    { icon: "👾", nome: "HQs", descricao: "História em quadrinhos variadas" },
    { icon: "🥥", nome: "Conveniência", descricao: "Água de coco, refrigerantes, snacks" },
  ];

  const diferenciais = [
    {
      icon: "🕐",
      titulo: "18 Anos de Tradição",
      descricao: "Preservando a cultura das revistarias desde 2007"
    },
    {
      icon: "❤️",
      titulo: "Atendimento Personalizado",
      descricao: "Conhece seus gostos e sempre encontre o que procura"
    },
    {
      icon: "⭐",
      titulo: "Variedade Única",
      descricao: "De clássicos a lançamentos, tudo em um só lugar"
    },
    {
      icon: "✨",
      titulo: "Experiência Nostálgica",
      descricao: "O prazer de folhear páginas reais"
    }
  ];

  return (
    <div className="App">
      {/* Navigation */}
      <nav className="navbar" data-testid="main-navigation">
        <div className="nav-container">
          <div className="nav-brand" data-testid="brand-logo">Allegro</div>
          <div className="nav-links">
            <button 
              className={activeSection === 'home' ? 'active' : ''} 
              onClick={() => scrollToSection('home')}
              data-testid="nav-home-btn"
            >
              Início
            </button>
            <button 
              className={activeSection === 'historia' ? 'active' : ''} 
              onClick={() => scrollToSection('historia')}
              data-testid="nav-historia-btn"
            >
              História
            </button>
            <button 
              className={activeSection === 'produtos' ? 'active' : ''} 
              onClick={() => scrollToSection('produtos')}
              data-testid="nav-produtos-btn"
            >
              Produtos
            </button>
            <button 
              className={activeSection === 'localizacao' ? 'active' : ''} 
              onClick={() => scrollToSection('localizacao')}
              data-testid="nav-localizacao-btn"
            >
              Contato
            </button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="hero-section" data-testid="hero-section">
        <div className="hero-content">
          <div className="hero-badge" data-testid="hero-badge">Desde 2007</div>
          <h1 className="hero-title" data-testid="hero-title">
            Revistaria <span className="title-highlight">Allegro</span>
          </h1>
          <p className="hero-subtitle" data-testid="hero-subtitle">
            Preservando a magia da leitura há 18 anos no coração do Sam's Club Campinas
          </p>
          <div className="hero-buttons">
            <button 
              className="btn btn-primary" 
              onClick={() => scrollToSection('produtos')}
              data-testid="hero-products-btn"
            >
              📚 Conheça Nossos Produtos
            </button>
            <button 
              className="btn btn-secondary" 
              onClick={() => window.open('https://www.instagram.com/revistaria_allegro/', '_blank')}
              data-testid="hero-instagram-btn"
            >
              📷 Instagram
            </button>
          </div>
        </div>
        <div className="hero-decoration">
          <div className="floating-book book-1">📚</div>
          <div className="floating-book book-2">📖</div>
          <div className="floating-book book-3">📕</div>
        </div>
      </section>

      {/* História Section */}
      <section id="historia" className="historia-section" data-testid="historia-section">
        <div className="container">
          <div className="section-header">
            <h2 className="section-title" data-testid="historia-title">Nossa História</h2>
            <p className="section-subtitle" data-testid="historia-subtitle">
              Uma jornada de 18 anos dedicada à cultura e ao conhecimento
            </p>
          </div>
          <div className="historia-content">
            <div className="card historia-card">
              <div className="card-content" data-testid="historia-card">
                <div className="historia-icon">🏪</div>
                <h3>Tradição que Resiste ao Tempo</h3>
                <p>
                  Desde 2007, a Revistaria Allegro é um ponto de encontro cultural no Sam's Club de Campinas. 
                  Em um mundo cada vez mais digital, mantemos viva a tradição das revistarias, onde o prazer 
                  de folhear páginas reais e descobrir novos mundos permanece intacto.
                </p>
                <p>
                  Localizada no subsolo do Sam's Club, somos mais que uma revistaria - somos um refúgio para 
                  leitores, colecionadores e entusiastas da cultura impressa. Nossa missão é preservar essa 
                  experiência única e proporcionar momentos especiais através da leitura.
                </p>
                <div className="historia-stats">
                  <div className="stat-item" data-testid="stat-years">
                    <div className="stat-number">18+</div>
                    <div className="stat-label">Anos de História</div>
                  </div>
                  <div className="stat-item" data-testid="stat-customers">
                    <div className="stat-number">1000+</div>
                    <div className="stat-label">Clientes Mensais</div>
                  </div>
                  <div className="stat-item" data-testid="stat-products">
                    <div className="stat-number">500+</div>
                    <div className="stat-label">Produtos Diferentes</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Produtos Section */}
      <section id="produtos" className="produtos-section" data-testid="produtos-section">
        <div className="container">
          <div className="section-header">
            <h2 className="section-title" data-testid="produtos-title">Nossos Produtos</h2>
            <p className="section-subtitle" data-testid="produtos-subtitle">
              Uma variedade completa para todos os gostos e idades
            </p>
          </div>
          <div className="produtos-grid">
            {produtos.map((produto, index) => (
              <div key={index} className="card produto-card" data-testid={`produto-card-${index}`}>
                <div className="card-content">
                  <div className="produto-icon">{produto.icon}</div>
                  <h3 className="produto-nome">{produto.nome}</h3>
                  <p className="produto-descricao">{produto.descricao}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Diferenciais Section */}
      <section id="diferenciais" className="diferenciais-section" data-testid="diferenciais-section">
        <div className="container">
          <div className="section-header">
            <h2 className="section-title" data-testid="diferenciais-title">Por Que Escolher a Allegro?</h2>
            <p className="section-subtitle" data-testid="diferenciais-subtitle">
              Mais que uma revistaria, uma experiência cultural
            </p>
          </div>
          <div className="diferenciais-grid">
            {diferenciais.map((item, index) => (
              <div key={index} className="diferencial-item" data-testid={`diferencial-item-${index}`}>
                <div className="diferencial-icon">{item.icon}</div>
                <h3 className="diferencial-titulo">{item.titulo}</h3>
                <p className="diferencial-descricao">{item.descricao}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Localização e Contato */}
      <section id="localizacao" className="localizacao-section" data-testid="localizacao-section">
        <div className="container">
          <div className="section-header">
            <h2 className="section-title" data-testid="localizacao-title">Venha Nos Visitar</h2>
            <p className="section-subtitle" data-testid="localizacao-subtitle">
              Estamos esperando por você no Sam's Club Campinas
            </p>
          </div>
          <div className="localizacao-content">
            <div className="card localizacao-card">
              <div className="card-content" data-testid="localizacao-card">
                <div className="localizacao-info">
                  <div className="info-item" data-testid="info-endereco">
                    <div className="info-icon">📍</div>
                    <div>
                      <h4>Endereço</h4>
                      <p>Rod. Dom Pedro I, KM 132 - s/n</p>
                      <p>Parque Imperador, Campinas - SP</p>
                      <p>CEP: 13097-100</p>
                      <p className="info-destaque">Sam's Club - Subsolo / Piso do Estacionamento</p>
                      <a 
                        href="https://www.google.com/maps/search/?api=1&query=Rod.+Dom+Pedro+I,+KM+132,+Parque+Imperador,+Campinas+-+SP,+13097-100" 
                        className="info-link map-link" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        data-testid="maps-link"
                      >
                        📍 Ver no Google Maps
                      </a>
                    </div>
                  </div>
                  <div className="info-item" data-testid="info-telefone">
                    <div className="info-icon">📞</div>
                    <div>
                      <h4>Telefone Sam's Club</h4>
                      <a href="tel:+551933036200" className="info-link">(19) 3303-6200</a>
                    </div>
                  </div>
                  <div className="info-item" data-testid="info-whatsapp">
                    <div className="info-icon">💬</div>
                    <div>
                      <h4>WhatsApp Revistaria</h4>
                      <a href="https://wa.me/5519320703222" className="info-link" target="_blank" rel="noopener noreferrer">
                        (19) 3207-0322
                      </a>
                    </div>
                  </div>
                  <div className="info-item" data-testid="info-instagram">
                    <div className="info-icon">📷</div>
                    <div>
                      <h4>Instagram</h4>
                      <a 
                        href="https://www.instagram.com/revistaria_allegro/" 
                        className="info-link" 
                        target="_blank" 
                        rel="noopener noreferrer"
                      >
                        @revistaria_allegro
                      </a>
                    </div>
                  </div>
                </div>
                <div className="cta-box" data-testid="cta-box">
                  <h3>Venha tomar uma água de coco geladíssima! 🥥</h3>
                  <p>Aproveite para conhecer nossa variedade de produtos enquanto relaxa</p>
                  <button 
                    className="btn btn-whatsapp" 
                    onClick={() => window.open('https://wa.me/5519320703222', '_blank')}
                    data-testid="cta-whatsapp-btn"
                  >
                    💬 Fale Conosco no WhatsApp
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer" data-testid="footer">
        <div className="container">
          <div className="footer-content">
            <div className="footer-brand">
              <h3>Revistaria Allegro</h3>
              <p>Preservando a cultura da leitura desde 2007</p>
            </div>
            <div className="footer-links">
              <a href="https://www.instagram.com/revistaria_allegro/" target="_blank" rel="noopener noreferrer" data-testid="footer-instagram">
                📷
              </a>
              <a href="https://wa.me/5519320703222" target="_blank" rel="noopener noreferrer" data-testid="footer-whatsapp">
                💬
              </a>
            </div>
          </div>
          <div className="footer-bottom">
            <p>© 2025 Revistaria Allegro. Todos os direitos reservados.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
