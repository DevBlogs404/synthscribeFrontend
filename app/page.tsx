import Image from "next/image";
import Link from "next/link";

const HeroSection = () => {
  return (
    <section className="hero">
      <div className="hero-content">
        <h1>Welcome to SynthScribe</h1>
        <p>Your AI-powered creative hub for images, information, and more.</p>
        <button>Get Started</button>
      </div>
      <div className="hero-image">
        <img src="/images/hero-image.png" alt="AI-powered Creativity" />
      </div>
    </section>
  );
};

const FeaturesSection = () => {
  return (
    <section className="features">
      <div className="feature">
        <img src="/images/image-creation-icon.png" alt="Image Creation" />
        <h2>Image Creation</h2>
        <p>Create stunning images with the power of AI.</p>
      </div>
      {/* Repeat similar structure for other features */}
    </section>
  );
};

const HowItWorksSection = () => {
  return (
    <section className="how-it-works">
      <h2>How SynthScribe Works</h2>
      <div className="steps">
        <div className="step">
          <div className="step-number">1</div>
          <div className="step-content">
            <h3>Upload or Create</h3>
            <p>Start by uploading images or creating content.</p>
          </div>
        </div>
        {/* Repeat similar structure for other steps */}
      </div>
    </section>
  );
};

const Header = () => {
  return (
    <header className="app-header">
      <div className="logo">
        <img src="/images/synthscribe-logo.png" alt="SynthScribe Logo" />
        <span>SynthScribe</span>
      </div>
      <nav>
        <ul>
          <li>
            <a href="#home">Home</a>
          </li>
          <li>
            <Link href="image">Image Creation</Link>
          </li>
          <li>
            <a href="#info">Information Retrieval</a>
          </li>
          <li>
            <a href="#speech">Speech Tools</a>
          </li>
          <li>
            <a href="#about">About Us</a>
          </li>
          <li>
            <a href="#contact">Contact</a>
          </li>
        </ul>
      </nav>
      <div className="user-auth">
        <button>Login</button>
        <button>Sign Up</button>
      </div>
    </header>
  );
};

export default function Home() {
  return (
    <>
      <Header />
      <HeroSection />
      <FeaturesSection />
      <HowItWorksSection />
    </>
  );
}
