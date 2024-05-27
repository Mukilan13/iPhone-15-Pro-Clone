import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import watchSvg from "../assets/images/watch.svg";
import rightSvg from "../assets/images/right.svg";
import VideoCarousel from "./VideoCarousel";
import { ScrollTrigger } from "gsap/all";

gsap.registerPlugin(ScrollTrigger);

const Highlights = () => {
  useGSAP(() => {
    gsap.to("#title", {
      opacity: 1,
      y: 0,
      scrollTrigger: {
        trigger: "#title",
        start: "bottom 95%",
        end: "top 50%",
        scrub: true,
      },
      ease: "expoScale(0.5,7,none)",
    });

    gsap.to(".link", {
      opacity: 1,
      y: 0,
      stagger: 0.5,
      scrollTrigger: {
        trigger: ".link",
        start: "bottom 70%",
        end: "top 30%",
        scrub: true,
      },
      ease: "expoScale(0.5,7,none)",
    });
  }, []);

  return (
    <section
      id="highlights"
      className="w-screen overflow-hidden h-full common-padding bg-zinc"
    >
      <div className="px-20 max-xl:px-5 max-lg:px-2">
        <div className="w-full md:flex items-end max-lg:items-center justify-between flex-nowrap gap-5 max-lg:gap-2 pb-10">
          <h1 id="title" className="section-heading translate-y-[20px]">
            Get the highlights.
          </h1>

          <div className="flex flex-nowrap max-md:flex-col justify-between items-end max-md:items-start gap-5 max-md:gap-2">
            <p className="link">
              Watch the film
              <img src={watchSvg} alt="watch" className="ml-2" />
            </p>
            <p className="link">
              Watch the event
              <img src={rightSvg} alt="right" className="ml-2 mt-[1px]" />
            </p>
          </div>
        </div>

        <VideoCarousel />
      </div>
    </section>
  );
};

export default Highlights;
