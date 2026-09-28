import React, { useState } from 'react'
import { createRoot } from 'react-dom/client'
import { ArrowDownRight, ArrowRight, ArrowUpRight, BookOpen, Bookmark, Instagram, Menu, Search, X } from 'lucide-react'
import './style.css'

const articles = [
  {
    category: 'ENSAIO',
    title: 'A arte de ler devagar em um mundo apressado',
    excerpt: 'Sobre voltar às páginas, perder a hora e deixar que uma boa história mude o ritmo dos nossos dias.',
    author: 'Marina Duarte',
    date: '12 ago, 2026',
    time: '6 min de leitura',
    image: 'photo-1507842217343-583bb7270b66',
    alt: 'Corredor de uma biblioteca com estantes repletas de livros',
    className: 'article-wide',
  },
  {
    category: 'LISTAS',
    title: 'Cinco livros para ler com a janela aberta',
    excerpt: 'Uma seleção feita para tardes compridas, café fresco e nenhuma vontade de sair de casa.',
    author: 'João Faria',
    date: '08 ago, 2026',
    time: '4 min de leitura',
    image: 'photo-1481627834876-b7833e8f5570',
    alt: 'Livros empilhados em uma estante de madeira',
    className: 'article-small',
  },
  {
    category: 'ENTREVISTA',
    title: '“Escrever é prestar atenção”: uma conversa com Ana Martins',
    excerpt: 'A autora fala de memória, cidades pequenas e dos livros que nos ensinam a olhar de novo.',
    author: 'Clara Nunes',
    date: '03 ago, 2026',
    time: '8 min de leitura',
    image: 'photo-1455390582262-044cdead277a',
    alt: 'Caderno aberto com anotações ao lado de uma xícara',
    className: 'article-small',
  },
]

const topics = ['Literatura brasileira', 'Clássicos', 'Poesia', 'Não ficção', 'Clube do livro']

function Photo({ id, alt, className = '' }) {
  return <img className={className} src={`https://images.unsplash.com/${id}?auto=format&fit=crop&w=1200&q=85`} alt={alt} />
}

function App() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [email, setEmail] = useState('')
  const [subscribed, setSubscribed] = useState(false)

  function handleSubscribe(event) {
    event.preventDefault()
    if (email.trim()) setSubscribed(true)
  }

  return (
    <>
      <div className="topline">
        <span>UM CANTO PARA QUEM AMA LER</span>
        <span className="topline-center">EDIÇÃO Nº 08 <span className="topline-dot">✳</span> AGOSTO, 2026</span>
        <a href="#newsletter">RECEBA NOSSA CARTA <ArrowUpRight size={12} /></a>
      </div>

      <header className="site-header">
        <a className="wordmark" href="#inicio" aria-label="Biblioblog, início">biblio<span>blog</span><i>.</i></a>
        <nav className={menuOpen ? 'main-nav is-open' : 'main-nav'} aria-label="Navegação principal">
          <a href="#leituras" onClick={() => setMenuOpen(false)}>Leituras</a>
          <a href="#ensaios" onClick={() => setMenuOpen(false)}>Ensaios</a>
          <a href="#clube" onClick={() => setMenuOpen(false)}>Clube do livro</a>
          <a href="#sobre" onClick={() => setMenuOpen(false)}>Sobre</a>
        </nav>
        <div className="header-actions">
          <button className="icon-button search-button" aria-label="Buscar"><Search size={19} strokeWidth={1.7} /></button>
          <a className="header-cta" href="#newsletter">Nossa carta <ArrowUpRight size={15} /></a>
          <button className="icon-button menu-button" aria-label={menuOpen ? 'Fechar menu' : 'Abrir menu'} onClick={() => setMenuOpen(!menuOpen)}>
            {menuOpen ? <X size={21} /> : <Menu size={21} />}
          </button>
        </div>
      </header>

      <main id="inicio">
        <section className="hero" aria-labelledby="hero-title">
          <div className="hero-copy">
            <div className="eyebrow"><span className="eyebrow-mark">✳</span> PALAVRAS PARA HABITAR</div>
            <h1 id="hero-title">Toda leitura<br />é um jeito de<br /><em>voltar pra casa.</em></h1>
            <p>Um espaço para descobrir histórias, dividir ideias e encontrar companhia entre as páginas.</p>
            <a href="#leituras" className="text-link">Explore nossas leituras <ArrowDownRight size={17} /></a>
            <div className="hero-edition"><span>08</span><span>EDIÇÃO<br />DE AGOSTO</span><i></i></div>
          </div>
          <div className="hero-image-wrap">
            <Photo id="photo-1519682337058-a94d519337bc" alt="Leitora sentada perto de uma janela iluminada, com um livro nas mãos" className="hero-image" />
            <div className="image-caption"><span>01 / 04</span><span>UM TEMPO SÓ SEU</span></div>
            <div className="hero-stamp"><BookOpen size={18} strokeWidth={1.5} /><span>LEIA<br />SEM PRESSA</span></div>
          </div>
          <div className="hero-side-note">CULTIVANDO O PRAZER DA LEITURA DESDE 2021 <span>↓</span></div>
        </section>

        <section className="featured" id="ensaios">
          <div className="section-heading">
            <div><span className="eyebrow">EM DESTAQUE <span className="eyebrow-mark">✳</span></span><h2>Histórias que <em>ficam.</em></h2></div>
            <a className="text-link all-link" href="#leituras">Ver todas as leituras <ArrowUpRight size={16} /></a>
          </div>
          <div className="article-grid" id="leituras">
            {articles.map((article, index) => (
              <article className={`article ${article.className}`} key={article.title}>
                <a className="article-image-link" href="#newsletter" aria-label={`Ler: ${article.title}`}>
                  <Photo id={article.image} alt={article.alt} className="article-image" />
                  <span className="image-index">0{index + 1}</span>
                  <span className="save-button" aria-label="Salvar leitura"><Bookmark size={17} /></span>
                </a>
                <div className="article-meta"><span>{article.category}</span><i></i><span>{article.time}</span></div>
                <h3><a href="#newsletter">{article.title}</a></h3>
                <p>{article.excerpt}</p>
                <div className="article-byline"><span>POR {article.author.toUpperCase()}</span><span>{article.date}</span></div>
              </article>
            ))}
          </div>
        </section>

        <section className="reading-room" id="clube">
          <div className="room-copy">
            <span className="eyebrow">UM CLUBE, MUITAS HISTÓRIAS <span className="eyebrow-mark">✳</span></span>
            <h2>Livros bons<br />ficam ainda<br /><em>melhores juntos.</em></h2>
            <p>Um livro por mês, conversas sem pressa e um lugar à mesa esperando por você.</p>
            <a href="#newsletter" className="button-link">Conheça o clube <ArrowRight size={17} /></a>
          </div>
          <div className="room-photo-wrap">
            <Photo id="photo-1513475382585-d06e58bcb0e0" alt="Livros e café preparados para um encontro de leitura" className="room-photo" />
            <span className="room-photo-label">LEITURAS COMPARTILHADAS, DESDE 2021</span>
          </div>
          <blockquote>“Um leitor vive mil vidas antes de morrer.”<cite>— George R. R. Martin</cite></blockquote>
        </section>

        <section className="topics" id="sobre">
          <div className="topics-title"><span className="eyebrow">POR ONDE COMEÇAR?</span><h2>Encontre sua <em>próxima história.</em></h2></div>
          <div className="topic-list">{topics.map((topic, index) => <a href="#leituras" key={topic}><span>0{index + 1}</span>{topic}<ArrowUpRight size={17} /></a>)}</div>
        </section>

        <section className="newsletter" id="newsletter">
          <div className="newsletter-spark">✳</div>
          <div className="newsletter-copy"><span className="eyebrow">UMA CARTA, DE VEZ EM QUANDO</span><h2>Palavras que<br /><em>fazem companhia.</em></h2><p>Novas leituras e pequenas descobertas, direto na sua caixa de entrada.</p></div>
          <form className="newsletter-form" onSubmit={handleSubscribe}>
            <label htmlFor="email">SEU MELHOR E-MAIL</label>
            <div className="email-field"><input id="email" type="email" placeholder="voce@email.com" value={email} onChange={event => setEmail(event.target.value)} required /><button type="submit" aria-label="Inscrever-se"><ArrowRight size={19} /></button></div>
            <span className="form-note">{subscribed ? 'Você está na lista. Até logo, leitor(a)!' : 'Sem pressa, sem spam. Cancele quando quiser.'}</span>
          </form>
        </section>
      </main>

      <footer className="site-footer">
        <a className="wordmark footer-wordmark" href="#inicio">biblio<span>blog</span><i>.</i></a>
        <span className="footer-note">FEITO COM CALMA E UMA PILHA DE LIVROS.</span>
        <div className="footer-links"><a href="#sobre">Sobre nós</a><a href="#leituras">Arquivo</a><a href="#instagram" aria-label="Instagram"><Instagram size={17} /></a></div>
        <span className="copyright">© 2026 BIBLIOBLOG</span>
      </footer>
    </>
  )
}

export default App

createRoot(document.getElementById('root')).render(<App />)