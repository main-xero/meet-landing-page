import heroLeft from "../assets/desktop/image-hero-left.png";
import heroRight from "../assets/desktop/image-hero-right.png";
import Logo from "../assets/logo.svg";

export default function Header() {
  return (
    <div class="container">
      <img src={Logo} class="logo" alt="logo" />

      <section className="hero">
        <img src={heroLeft} class="hero-left" alt="left-hero" />

        <div class="hero-description">
          <h1>Group Chat<br/> for Everyone</h1>
          <p>
            Meet makes it easy to connect with others face-to-face virtually and
            collaborate across any device.
          </p>
          <button class="green">Download <span>v1.3</span></button>
          <button class="purple">What is it?</button>
        </div>
        <img src={heroRight} class="hero-right" alt="hero-right" />
      </section>
    </div>
  );
}
