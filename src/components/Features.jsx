import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import React, { useRef } from "react";
import { ScrollTrigger } from "gsap/all";

import exploreVideo from "../assets/videos/explore.mp4";
import explore1 from "../assets/images/explore1.jpg";
import explore2 from "../assets/images/explore2.jpg";

gsap.registerPlugin(ScrollTrigger);

const Features = () => {
  const videoref = useRef();

  useGSAP(() => {
    gsap.to("#features_title", {
      opacity: 1,
      y: 0,
      scrollTrigger: {
        trigger: "#features_title",
        start: "bottom 85%",
        end: "top 90%",
        scrub: 1,
      },
      ease: "expoScale(0.5,7,none)",
    });

    gsap.to("#exploreVideo", {
      scrollTrigger: {
        trigger: "#exploreVideo",
        toggleActions: "play pause reverse restart",
        start: "-10% bottom",
      },
      onComplete: () => {
        videoref.current.play();
      },
    });

    gsap.to(".g_grow", {
      opacity: 1,
      scale: 1,
      ease: "power1",
      touchAction: "restart reverse restart reverse",
      scrollTrigger: {
        trigger: ".g_grow",
        scrub: 5.5,
      },
    });

    gsap.to(".g_text", {
      opacity: 1,
      y: 0,
      ease: "power2.inOut",
      duration: 1,
      scrollTrigger: {
        trigger: ".g_text",
        start: "-20% bottom",
        end: "top 90%",
        scrub: 2.5,
      },
    });
  }, []);

  return (
    <section className="common-padding h-full bg-zinc relative overflow-hidden">
      <div className="screen-max-width">
        <div className="mb-12 w-full">
          <h1 id="features_title" className="section-heading">
            Explore the full story.
          </h1>
        </div>

        <div className="flex flex-col justify-start items-start overflow-hidden">
          <div className="md:mt-32 mt-28 mb-24 pl-24">
            <h2 className="text-5xl lg:text-7xl font-semibold">iPhone.</h2>
            <h2 className="text-5xl lg:text-7xl font-semibold">
              Forged in titanium.
            </h2>
          </div>

          <div className="flex-center flex-col sm:px-10">
            <div className="relative h-[50vh] w-full flex items-center">
              <video
                playsInline
                id="exploreVideo"
                className="w-full h-full object-cover object-center"
                preload="none"
                muted
                autoPlay
                ref={videoref}
              >
                <source src={exploreVideo} type="video/mp4" />
              </video>
            </div>
            <div className="flex flex-col w-full mt-5 relative">
              <div className="feature-video-container">
                <div className="overflow-hidden flex-1 h-[50vh]">
                  <img
                    src={explore1}
                    alt="titanium1"
                    className="feature-video g_grow"
                  />
                </div>
                <div className="overflow-hidden flex-1 h-[50vh]">
                  <img
                    src={explore2}
                    alt="titanium2"
                    className="feature-video g_grow"
                  />
                </div>
              </div>

              <div className="feature-text-container">
                <div className="flex-1 flex-center">
                  <p className="feature-text g_text">
                    iPhone 15 Pro is{" "}
                    <span className="text-white">
                      the first iPhone to feature an aerospace‑grade titanium
                      design
                    </span>
                    , using the same alloy that spacecraft use for missions to
                    Mars.
                  </p>
                </div>
                <div className="flex-1 flex-center">
                  <p className="feature-text g_text">
                    Titanium has one of the best strength‑to‑weight ratios of
                    any metal, making these our{" "}
                    <span className="text-white">lightest Pro models ever</span>
                    . You’ll notice the difference the moment you pick one up.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;
