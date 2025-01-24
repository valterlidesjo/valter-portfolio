import { BannerLayer, ParallaxBanner } from "react-scroll-parallax";
import "./styles/_helloBanner.scss";


export const HelloBanner = () => {
  
    const headline: BannerLayer = {
      translateY: [-35, 40],
      scale: [1, 1.05, "easeOutCubic"],
      shouldAlwaysCompleteAnimation: true,
      expanded: false,
      speed: -20,
      children: (
        <div className="inset center parallax-banner-content">
          <h1 className="headline white">Hello and Welcome</h1>
        </div>
      )
    };

    const fadeOverlay: BannerLayer = {
      opacity: [1, 1], // Håll konstant opacitet eftersom detta lager inte ska animeras
      shouldAlwaysCompleteAnimation: true,
      expanded: true, // Expandera lagret för att täcka hela området
      children: (
        <div className="fade-gradient" />
      )
    };
    
    
  
    return (
      <>
      <ParallaxBanner
        layers={[fadeOverlay, headline]}
        className="full"
      />
      <div className="fade-gradient-container"></div>
      </>
    );
  };