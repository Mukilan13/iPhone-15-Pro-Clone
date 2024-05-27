import { useState } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import heroVideo from "../assets/videos/hero.mp4";
import smallHeroVideo from "../assets/videos/smallHero.mp4";
import { useEffect } from "react";

const Hero = () => {
  const [videoSrc, setVideoSrc] = useState(
    window.innerWidth < 768 ? smallHeroVideo : heroVideo
  );

  useGSAP(() => {
    gsap.to(".hero-title", { opacity: 1, delay: 2 });
    gsap.to(".stagger", { opacity: 1, y: -10, delay: 2, stagger: 0.3 });
  }, []);

  const handleVideoSrcSet = () => {
    if (window.innerWidth < 768) {
      setVideoSrc(smallHeroVideo);
    } else {
      setVideoSrc(heroVideo);
    }
  };

  useEffect(() => {
    window.addEventListener("resize", handleVideoSrcSet);

    return () => {
      window.removeEventListener("resize", handleVideoSrcSet);
    };
  }, []);

  return (
    <section className="w-full nav-height bg-black relative">
      <div className="h-5/6 w-full flex-center flex-col">
        <p className="hero-title max-md:mt-10">iPhone 15 Pro</p>
        <div className="md:w-10/12 w-9/12">
          <video
            className="pointer-events-none max-md:w-full max-md:h-[80%] max-sm:h-[90%]"
            autoPlay
            muted
            playsInline={true}
            key={videoSrc}
          >
            <source src={videoSrc} type="video/mp4" />
          </video>
        </div>
      </div>

      <div id="cta" className="flex flex-col items-center translate-y-[-100px] max-md:translate-y-[-80px] max-sm:translate-y-[-50px]">
        <a href="#highlights" className="btn stagger opacity-0">
          Buy
        </a>
        <p className="font-normal text-xl opacity-0 stagger">From ₹134900.00</p>
      </div>
    </section>
  );
};

export default Hero;
