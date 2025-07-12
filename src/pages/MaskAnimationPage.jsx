import { useState, useEffect, useRef } from "react";
import { gsap } from "gsap";
import { FaTimesCircle } from "react-icons/fa";

const characters = [
  {
    name: "L",
    fullName: "L Lawliet",
    score: 95.5,
    maskImage: "img/l-mask.png",
    bgImage: "img/l.webp",
    bgColor: "#b8cbcb",
    description:
      "L is a genius detective in the Death Note series. He has extraordinary deductive abilities and becomes Light Yagami's main opponent.",
  },
  {
    name: "Kira",
    fullName: "Light Yagami",
    score: 90.2,
    maskImage: "img/k-mask.png",
    bgImage: "img/kira.webp",
    bgColor: "#cdbbb8",
    description:
      "Light Yagami is a brilliant student who finds the Death Note and begins killing criminals under the name 'Kira', with ambitions to create a world without crime.",
  },
];

export default function MaskAnimationPage() {
  const [activeSection, setActiveSection] = useState(null);
  const [isMobile, setIsMobile] = useState(false);
  const sectionsRef = useRef([]);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  useEffect(() => {
    const applyScrollLock = () => {
      const lock = activeSection !== null ? "hidden" : "auto";
      document.documentElement.style.overflow = lock;
      document.body.style.overflow = lock;
      document.documentElement.style.overflowX = "hidden";
      document.body.style.overflowX = "hidden";
    };

    applyScrollLock();
    window.addEventListener("resize", applyScrollLock);
    return () => window.removeEventListener("resize", applyScrollLock);
  }, [activeSection]);

  const resetSection = (section) => {
    const maskEl = section.querySelector(".mask");
    const bgEl = section.querySelector(".bg");

    gsap.set(maskEl, {
      scale: 1,
      opacity: 1,
      visibility: "visible",
      pointerEvents: "auto",
      display: "block",
    });

    gsap.set(bgEl, {
      backgroundPosition: "center center",
      scale: 1,
    });

    gsap.set(section.querySelector(".text"), {
      left: isMobile ? "0" : "100%",
      bottom: isMobile ? "-100%" : "auto",
    });
  };

  const handleButtonClick = (sectionIndex) => {
    sectionsRef.current.forEach((section, idx) => {
      if (idx !== sectionIndex) resetSection(section);
    });

    const section = sectionsRef.current[sectionIndex];
    const maskEl = section.querySelector(".mask");
    const textEl = section.querySelector(".text");
    const bgEl = section.querySelector(".bg");

    setActiveSection(sectionIndex);

    window.scrollTo({
      top: section.offsetTop,
      behavior: "smooth",
    });

    gsap.set(maskEl, {
      transformOrigin: "center",
      willChange: "transform, opacity",
    });

    gsap.to(maskEl, {
      scale: 5,
      opacity: 0,
      duration: 1,
      ease: "power2.out",
      onComplete: () => {
        maskEl.style.visibility = "hidden";
        maskEl.style.pointerEvents = "none";
      },
    });

    gsap.to(bgEl, {
      backgroundPosition: isMobile ? "top left" : "left",
      scale: 1.2,
      duration: 1.2,
      ease: "power2.out",
    });

    textEl.style.position = "fixed";
    textEl.style.inset = "0";
    textEl.style.zIndex = "50";

    gsap.to(textEl, {
      left: isMobile ? "0" : "40%",
      bottom: isMobile ? "0" : "auto",
      width: isMobile ? "100%" : "60%",
      height: "100%",
      duration: 1,
      ease: "power2.out",
      onComplete: () => {
        textEl.style.position = "absolute";
        textEl.style.inset = "";
        textEl.style.zIndex = "";
      },
    });
  };

  const handleCloseClick = (sectionIndex) => {
    const section = sectionsRef.current[sectionIndex];
    const maskEl = section.querySelector(".mask");
    const textEl = section.querySelector(".text");
    const bgEl = section.querySelector(".bg");

    gsap.set(maskEl, {
      visibility: "visible",
      pointerEvents: "auto",
      scale: 5,
      opacity: 0,
      display: "block",
    });

    gsap.to(maskEl, {
      scale: 1,
      opacity: 1,
      duration: 0.8,
      ease: "power2.in",
    });

    gsap.to(bgEl, {
      backgroundPosition: "center center",
      scale: 1,
      duration: 0.8,
      ease: "power2.in",
    });

    textEl.style.position = "fixed";
    textEl.style.inset = "0";
    textEl.style.zIndex = "50";

    gsap.to(textEl, {
      left: isMobile ? "0" : "100%",
      bottom: isMobile ? "-100%" : "auto",
      duration: 0.8,
      ease: "power2.in",
      onComplete: () => {
        setActiveSection(null);
        resetSection(section);
        textEl.style.position = "absolute";
        textEl.style.inset = "";
        textEl.style.zIndex = "";
      },
    });
  };

  return (
    <div className="font-['IBM_Plex_Serif'] w-full min-h-screen overflow-hidden">
      {characters.map((character, index) => (
        <section
          key={index}
          ref={(el) => (sectionsRef.current[index] = el)}
          className={`${character.name.toLowerCase()} relative w-full h-screen overflow-hidden`}
        >
          <div
            className="mask absolute inset-0 z-10 w-full h-full bg-cover bg-center p-6 md:p-12 transition-all duration-1000 max-w-full"
            style={{
              backgroundImage: `url('${character.maskImage}')`,
              transformOrigin: "center",
              willChange: "transform, opacity",
            }}
          >
            <button
              onClick={() => handleButtonClick(index)}
              className="absolute bottom-8 md:bottom-16 left-1/2 transform -translate-x-1/2 border border-white text-white px-6 py-2 md:px-8 md:py-3 font-bold bg-transparent rounded hover:bg-white hover:text-gray-800 transition-all duration-500 text-sm md:text-base"
            >
              Who is this?
            </button>
          </div>

          <span
            onClick={() => handleCloseClick(index)}
            className={`close fixed top-24 right-6 md:right-12 w-10 h-10 md:w-12 md:h-12 text-yellow-500 cursor-pointer z-[100] ${
              activeSection === index ? "" : "hidden"
            }`}
            style={{
              marginTop: "env(safe-area-inset-top, 0)",
            }}
          >
            <FaTimesCircle className="w-full h-full" />
          </span>

          <div className="inner absolute inset-0 overflow-hidden z-0 max-w-full">
            <div
              className="bg absolute inset-0 bg-center bg-no-repeat z-0 transition-all duration-1000 max-w-full"
              style={{
                backgroundImage: `url('${character.bgImage}')`,
                backgroundColor: character.bgColor,
                backgroundSize: "cover",
                transformOrigin: "center center",
                willChange: "transform, backgroundPosition",
                left: 0,
              }}
            />

            <div
              className="text absolute bg-white z-10 flex items-center transition-all duration-1000 max-w-full"
              style={{
                width: isMobile ? "100%" : "60%",
                height: "100%",
                left: isMobile ? "0" : "100%",
                bottom: "0",
                top: "0",
              }}
            >
              <div className="box p-6 md:p-16 max-w-[1000px] mx-auto">
                <h3 className="text-2xl md:text-4xl mb-4 md:mb-6">
                  {character.fullName}
                </h3>
                <p className="text-gray-600 mb-4 text-sm md:text-base">
                  {character.description}
                </p>
                <div className="mt-6">
                  <p className="text-xs text-gray-500">Character Score</p>
                  <p className="text-2xl font-bold text-gray-700">
                    {character.score}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
      ))}
    </div>
  );
}