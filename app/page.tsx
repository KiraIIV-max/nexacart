"use client";

import { useState } from "react";

const products = [
  {
    category: "Audio",
    name: "Studio Headphones",
    price: "$249",
    rating: "4.9",
    visual: "headphones",
    badge: "Bestseller",
  },
  {
    category: "Wearables",
    name: "Everyday Watch",
    price: "$189",
    rating: "4.8",
    visual: "watch",
    badge: "New arrival",
  },
  {
    category: "Accessories",
    name: "Carryall Backpack",
    price: "$129",
    rating: "4.9",
    visual: "backpack",
    badge: "",
  },
  {
    category: "Workspace",
    name: "Arc Desk Lamp",
    price: "$96",
    rating: "4.7",
    visual: "lamp",
    badge: "",
  },
];

type IconName = "bag" | "sun" | "moon" | "arrow" | "shield" | "truck" | "refresh" | "star" | "check";

const benefits: { icon: IconName; title: string; text: string }[] = [
  {
    icon: "shield",
    title: "Checkout, secured",
    text: "Your details stay protected at every step, with trusted payment options.",
  },
  {
    icon: "truck",
    title: "Delivery that delights",
    text: "Thoughtful packaging and reliable tracking, right to your doorstep.",
  },
  {
    icon: "refresh",
    title: "Easy does it",
    text: "A smooth, no-fuss returns experience if something isn't quite right.",
  },
];

function Icon({
  name,
  size = 20,
}: {
  name: IconName;
  size?: number;
}) {
  const shared = {
    width: size,
    height: size,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: 1.7,
    strokeLinecap: "round" as const,
    strokeLinejoin: "round" as const,
    "aria-hidden": true as const,
  };

  switch (name) {
    case "bag":
      return <svg {...shared}><path d="M5 8h14l1 13H4L5 8Z" /><path d="M9 9V6a3 3 0 0 1 6 0v3" /></svg>;
    case "sun":
      return <svg {...shared}><circle cx="12" cy="12" r="4" /><path d="M12 2v2m0 16v2M4.93 4.93l1.42 1.42m11.3 11.3 1.42 1.42M2 12h2m16 0h2M4.93 19.07l1.42-1.42m11.3-11.3 1.42-1.42" /></svg>;
    case "moon":
      return <svg {...shared}><path d="M20.9 13A9 9 0 0 1 11 3.1 9 9 0 1 0 20.9 13Z" /></svg>;
    case "arrow":
      return <svg {...shared}><path d="M5 12h14m-6-6 6 6-6 6" /></svg>;
    case "shield":
      return <svg {...shared}><path d="M12 22s8-4 8-11V5l-8-3-8 3v6c0 7 8 11 8 11Z" /><path d="m9 12 2 2 4-4" /></svg>;
    case "truck":
      return <svg {...shared}><path d="M3 6h11v12H3z" /><path d="M14 10h4l3 3v5h-7" /><circle cx="7.5" cy="18" r="2" /><circle cx="17.5" cy="18" r="2" /></svg>;
    case "refresh":
      return <svg {...shared}><path d="M20 7v5h-5M4 17v-5h5" /><path d="M5.6 9a7 7 0 0 1 11.6-2L20 12M4 12l2.8 5a7 7 0 0 0 11.6-2" /></svg>;
    case "star":
      return <svg {...shared} fill="currentColor" stroke="none"><path d="m12 2 2.8 6.3 6.9.6-5.2 4.6 1.5 6.7-6-3.5-6 3.5 1.5-6.7-5.2-4.6 6.9-.6L12 2Z" /></svg>;
    case "check":
      return <svg {...shared}><path d="m5 12 4 4L19 6" /></svg>;
  }
}

export default function Home() {
  const [cartCount, setCartCount] = useState(0);

  function toggleTheme() {
    const nextTheme = document.documentElement.dataset.theme === "dark" ? "light" : "dark";
    window.localStorage.setItem("nexacart-theme", nextTheme);
    document.documentElement.dataset.theme = nextTheme;
  }

  return (
    <main>
      <div className="announcement">
        <span className="announcement-dot" />
        A little something for your next good find
        <a href="#featured">Explore the edit <span aria-hidden="true">→</span></a>
      </div>

      <header className="site-header">
        <a className="brand" href="#" aria-label="NexaCart home">
          <span className="brand-mark"><Icon name="bag" size={18} /></span>
          <span>Nexa<span className="brand-light">Cart</span></span>
        </a>
        <nav className="main-nav" aria-label="Main navigation">
          <a className="nav-active" href="#home">Home</a>
          <a href="#featured">Discover</a>
          <a href="#story">Our story</a>
        </nav>
        <div className="header-actions">
          <button
            className="icon-button theme-toggle"
            type="button"
            onClick={toggleTheme}
            aria-label="Toggle color theme"
            title="Toggle color theme"
          >
            <span className="theme-icon-moon"><Icon name="moon" size={18} /></span>
            <span className="theme-icon-sun"><Icon name="sun" size={18} /></span>
          </button>
          <a
            className="cart-button"
            href="#featured"
            aria-label={`Shopping bag, ${cartCount} ${cartCount === 1 ? "item" : "items"}`}
          >
            <Icon name="bag" size={18} />
            <span className="cart-label">Bag</span>
            <span className="cart-count" aria-live="polite" aria-atomic="true">{cartCount}</span>
          </a>
        </div>
      </header>

      <section className="hero section-wrap" id="home">
        <div className="hero-copy">
          <div className="eyebrow hero-eyebrow"><span /> THE GOOD-FIND STORE</div>
          <h1 className="hero-title">
            Find your
            <span>everyday <em>extra.</em></span>
          </h1>
          <p className="hero-description">
            Thoughtful things for the way you live, work, and unwind. Good design, fair prices, delivered with care.
          </p>
          <div className="hero-actions">
            <a className="button button-primary" href="#featured">
              Find your next favorite <Icon name="arrow" size={17} />
            </a>
            <a className="text-link" href="#story">A little about us <span aria-hidden="true">↗</span></a>
          </div>
          <div className="hero-proof">
            <div className="avatar-stack" aria-hidden="true">
              <span className="avatar avatar-one">J</span>
              <span className="avatar avatar-two">M</span>
              <span className="avatar avatar-three">A</span>
              <span className="avatar avatar-four">+</span>
            </div>
            <div className="proof-copy"><span className="proof-stars">★★★★★</span><br /><strong>Loved by 12,000+ happy homes</strong></div>
          </div>
        </div>

        <div className="hero-art" aria-label="A curated selection of products" role="img">
          <div className="art-orbit orbit-one" />
          <div className="art-orbit orbit-two" />
          <div className="hero-sun" />
          <div className="hero-plant plant-left"><i /><i /><i /><b /></div>
          <div className="hero-plant plant-right"><i /><i /><i /><b /></div>
          <div className="hero-platform platform-back" />
          <div className="hero-platform platform-front" />
          <div className="hero-product product-headphones">
            <div className="headband" />
            <div className="earcup earcup-left" />
            <div className="earcup earcup-right" />
            <div className="headphone-shine" />
          </div>
          <div className="hero-product product-mug">
            <div className="mug-handle" />
            <div className="mug-rim" />
            <div className="mug-mark">N</div>
          </div>
          <div className="hero-product product-book">
            <span>OBJECTS<br />FOR SLOW<br />MORNINGS</span>
            <i />
          </div>
          <div className="floating-note note-top"><span className="note-icon"><Icon name="check" size={15} /></span><span><strong>Good things,</strong><br />picked with care</span></div>
          <div className="floating-note note-bottom"><span className="note-sparkle">✳</span><span><strong>A little more you.</strong><br />A lot less ordinary.</span></div>
          <div className="art-caption">THE EVERYDAY EDIT <span>NO. 01</span></div>
        </div>
      </section>

      <div className="trust-strip">
        <span>GOOD THINGS, NO GUESSWORK</span>
        <i />
        <span>SECURE CHECKOUT</span>
        <i />
        <span>FREE SHIPPING OVER $75</span>
        <i />
        <span>MADE TO BE KEPT</span>
      </div>

      <section className="featured-section section-wrap" id="featured">
        <div className="section-heading">
          <div>
            <div className="eyebrow">A FEW THINGS WE LOVE</div>
            <h2>The good stuff<span className="heading-period">.</span></h2>
            <p>Useful, lovely, and a little bit unexpected.</p>
          </div>
          <a href="#featured" className="view-all">See everything <Icon name="arrow" size={16} /></a>
        </div>
        <div className="product-grid">
          {products.map((product, index) => (
            <article className={`product-card reveal reveal-${index + 1}`} key={product.name}>
              <div className={`product-visual visual-${product.visual}`}>
                {product.badge && <span className="product-badge">{product.badge}</span>}
                <button
                  className="quick-add"
                  type="button"
                  aria-label={`Add ${product.name} to bag`}
                  onClick={() => setCartCount((count) => count + 1)}
                >
                  <span aria-hidden="true">+</span>
                </button>
                {product.visual === "headphones" && <div className="mini-headphones"><i /><b /><b /></div>}
                {product.visual === "watch" && <div className="mini-watch"><i /><b><span>10:09</span></b><i /></div>}
                {product.visual === "backpack" && <div className="mini-backpack"><i /><b /><span /></div>}
                {product.visual === "lamp" && <div className="mini-lamp"><i /><b /><span /></div>}
                <div className="visual-shadow" />
              </div>
              <div className="product-meta"><span>{product.category}</span><span className="rating"><Icon name="star" size={12} /> {product.rating}</span></div>
              <div className="product-title-row"><h3>{product.name}</h3><span>{product.price}</span></div>
              <p className="product-subtitle">A small upgrade, a big difference.</p>
            </article>
          ))}
        </div>
      </section>

      <section className="story-section" id="story">
        <div className="story-inner section-wrap">
          <div className="story-art" aria-hidden="true">
            <div className="story-sun" />
            <div className="story-vase"><i /><b /></div>
            <div className="story-leaf leaf-one" /><div className="story-leaf leaf-two" /><div className="story-leaf leaf-three" />
            <div className="story-book book-one" /><div className="story-book book-two" />
            <span className="story-stamp">LESS, BUT<br />LOVELIER</span>
          </div>
          <div className="story-copy">
            <div className="eyebrow">A NOTE FROM NEXACART</div>
            <h2>More intention.<br /><em>Less scrolling.</em></h2>
            <p>We think the best things aren&apos;t the loudest ones. So we look for useful, well-made pieces you&apos;ll reach for every day — and leave the rest behind.</p>
            <a className="text-link" href="#benefits">Here&apos;s what makes us different <span aria-hidden="true">↗</span></a>
          </div>
        </div>
      </section>

      <section className="benefits-section section-wrap" id="benefits">
        <div className="benefits-heading">
          <div className="eyebrow">THE NEXACART WAY</div>
          <h2>Good from click to doorstep.</h2>
        </div>
        <div className="benefit-grid">
          {benefits.map((benefit, index) => (
            <article className={`benefit-card reveal reveal-${index + 1}`} key={benefit.title}>
              <div className="benefit-icon"><Icon name={benefit.icon} size={21} /></div>
              <span className="benefit-number">0{index + 1}</span>
              <h3>{benefit.title}</h3>
              <p>{benefit.text}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="newsletter-section section-wrap">
        <div className="newsletter-card">
          <div className="newsletter-copy">
            <span className="newsletter-kicker">A GOOD EMAIL, OCCASIONALLY</span>
            <h2>A little joy in your inbox.</h2>
            <p>Fresh finds, thoughtful notes, and a first look at what&apos;s new. Never the noise.</p>
          </div>
          <a className="button button-light" href="mailto:hello@nexacart.com">Say hello <Icon name="arrow" size={17} /></a>
          <div className="newsletter-decoration" aria-hidden="true">✳</div>
        </div>
      </section>

      <footer className="site-footer">
        <div className="footer-main section-wrap">
          <a className="brand footer-brand" href="#" aria-label="NexaCart home">
            <span className="brand-mark"><Icon name="bag" size={18} /></span>
            <span>Nexa<span className="brand-light">Cart</span></span>
          </a>
          <span className="footer-tagline">Shop smarter. Checkout securely.</span>
          <span className="footer-note">A little more lovely, every day. <span>© 2026 NexaCart</span></span>
        </div>
      </footer>
    </main>
  );
}
