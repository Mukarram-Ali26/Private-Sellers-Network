import Image from "next/image";
import HeroLoadAnimation from "../components/HeroLoadAnimation";
import WaitlistModal from "../components/WaitlistModal";

const communityItems = [
  "CPG Brands",
  "FMCG Brands",
  "Apparel",
  "Fashion",
  "Beauty & Personal Care",
  "Pet Supplies",
  "Sports & Outdoors",
  "Baby Products",
];
const accessItems = [
  { label: "Investor Room", icon: "/icon-dollar.png" },
  { label: "Capital Fund", icon: "/icon-bank.png" },
  { label: "Accelerator Program", icon: "/icon-rocket.png" },
];

export default function Home() {
  return (
    <main className="homepage-shell">
      <section className="coded-hero" aria-label="Private Sellers Network hero">
        <HeroLoadAnimation />
        <Image src="/cpg-background.png" alt="" width={520} height={390} className="side-art side-art-left" priority />
        <Image src="/fmcg-background.png" alt="" width={520} height={390} className="side-art side-art-right" priority />

        <a className="top-left-brand" href="#" aria-label="Private Sellers Network home">
          <Image src="/logo-transparent.png" alt="" width={68} height={76} className="top-left-logo" priority />
          <span>Private Sellers<br />Network</span>
        </a>

        <div className="hero-main">
          <div className="hero-content-card">
            <p className="hero-subtitle">
              <span className="hero-word">Where&nbsp;</span>
              <span className="hero-word">real&nbsp;</span>
              <span className="hero-word">brand&nbsp;</span>
              <span className="hero-word">owners</span>
              <br />
              <span className="hero-word">share&nbsp;</span>
              <span className="hero-word hero-emphasis">profit-driving&nbsp;</span>
              <span className="hero-word">hacks.</span>
            </p>
          </div>
          <WaitlistModal />
        </div>
      </section>

      
      <section className="fashion-image-section" aria-label="Fashion showcase">
        <Image src="/fashion-fullscreen.png" alt="Fashion" width={1472} height={736} className="fashion-showcase-image" />
      </section>
      <section className="launch-stages-section" aria-label="Launch stages">
        <h2 className="launch-stages-heading">Launch stages</h2>
        <ul className="launch-stages-list">
          <li><strong>Stage 1:</strong> Online community launch on Slack in July 2026</li>
          <li><strong>Stage 2:</strong> Start webinars to deliver what is promised</li>
          <li><strong>Stage 3:</strong> Offline events in different cities in USA &amp; UK</li>
        </ul>
      </section>
      <section className="access-strip-section" aria-label="Private Sellers Network access options">
        <h2 className="access-strip-heading">What you get</h2>
        <div className="access-strip">
          {accessItems.map((item, index) => (
            <span className="access-strip-item" key={item.label}>
              {index > 0 && <span className="access-strip-dot" />}
              <span className="access-strip-content">
                <Image src={item.icon} alt="" width={54} height={54} className="access-strip-icon" />
                <span>{item.label}</span>
              </span>
            </span>
          ))}
        </div>
      </section>
      <section className="retailers-section" aria-label="Our retailers">
        <div className="retailers-panel">
          <div className="retailers-copy">
            <h2>Community<br />Belongs To</h2>
            <a href="#" className="shop-button">Join Now</a>
          </div>

          <div className="retailer-marquee" aria-hidden="true">
            {[0, 1].map((columnIndex) => (
              <div className={`retailer-column column-${columnIndex + 1}`} key={columnIndex}>
                {communityItems.map((name, index) => (
                  <div className="retailer-card community-card" key={`${name}-${columnIndex}-${index}`}>
                    <span className="retailer-logo community-logo">{name}</span>
                  </div>
                ))}
              </div>
            ))}
          </div>
        </div>
      </section>

      <a className="whatsapp-float" href="https://wa.me/+447462262659" target="_blank" rel="noopener noreferrer" aria-label="Chat on WhatsApp">
        <svg viewBox="0 0 32 32" aria-hidden="true">
          <path d="M16 3.2c-7.1 0-12.8 5.6-12.8 12.5 0 2.3.7 4.6 1.9 6.5L3.8 28.8l6.8-1.8c1.7.9 3.5 1.3 5.4 1.3 7.1 0 12.8-5.6 12.8-12.5S23.1 3.2 16 3.2Zm0 22.8c-1.7 0-3.3-.4-4.7-1.3l-.3-.2-4 1.1 1.1-3.9-.2-.4c-1.1-1.6-1.6-3.5-1.6-5.5 0-5.6 4.4-10.1 9.8-10.1s9.8 4.5 9.8 10.1S21.4 26 16 26Zm5.5-7.5c-.3-.1-1.8-.9-2.1-1-.3-.1-.5-.1-.7.2-.2.3-.8 1-.9 1.2-.2.2-.3.2-.6.1-.3-.1-1.2-.4-2.3-1.4-.8-.7-1.4-1.6-1.6-1.9-.2-.3 0-.5.1-.6.1-.1.3-.3.4-.5.1-.2.2-.3.3-.5.1-.2 0-.4 0-.5-.1-.1-.7-1.7-1-2.3-.3-.6-.5-.5-.7-.5h-.6c-.2 0-.5.1-.8.4-.3.3-1 1-1 2.4s1.1 2.8 1.2 3c.1.2 2.1 3.2 5.1 4.5.7.3 1.3.5 1.7.6.7.2 1.4.2 1.9.1.6-.1 1.8-.7 2-1.4.2-.7.2-1.3.2-1.4-.1-.2-.3-.3-.6-.4Z" />
        </svg>
      </a>
    </main>
  );
}






























