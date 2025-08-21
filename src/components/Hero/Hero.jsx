import AnchorLink from "react-anchor-link-smooth-scroll";
import "./Hero.css";

export default function Hero() {
  return (
    <div className="hero" id="hero">
      <div>
        <img src="./images/luffy.png" className="luffy" />
      </div>

      <div>
        <h1 className="text11">Hey, I'm Mayank </h1>
      </div>

      <div className="text2">
        <h1 className="text22">Frontend Developer</h1>
      </div>
      <p className="text33">"Make it work, make it right, make it fast."</p>

      <div className="hero-end">
        <div className="end1">
          <AnchorLink className="anchor-link" href="#contact" offset={-30}>
            <p className="connect">Connect with me</p>
          </AnchorLink>
        </div>
        <div className="end2">
          <p className="resume">My Resume</p>
        </div>
      </div>
    </div>
  );
}
