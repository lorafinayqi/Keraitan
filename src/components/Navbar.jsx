import clsx from "clsx";
import gsap from "gsap";
import { useWindowScroll } from "react-use";
import { useEffect, useRef, useState } from "react";
import { TiLocationArrow } from "react-icons/ti";

import Button from "./Button";

const navItems = [
  { label: "Youtube", href: "https://youtube.com/@kkn49unmulkelompok07?si=VnZLd2wOXys4ljFH" },
  { label: "Tiktok", href: "https://www.tiktok.com/@kuteam.camp?_t=ZS-8xG0JPvCYAz&_r=1" },
  { label: "Instagram", href: "https://www.instagram.com/kkn51.keraitan?igsh=MXQ5NW80MGVqaHFhdg==" },
  { label: "About", href: "#about" },
  { label: "Contact", href: "#contact" },
];

const NavBar = () => {
  const [isAudioPlaying, setIsAudioPlaying] = useState(false);
  const [isIndicatorActive, setIsIndicatorActive] = useState(false);

  const audioElementRef = useRef(null);
  const navContainerRef = useRef(null);

  const { y: currentScrollY } = useWindowScroll();
  const [isNavVisible, setIsNavVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  // Toggle audio + visual indicator
  const toggleAudioIndicator = () => {
    setIsAudioPlaying((prev) => !prev);
    setIsIndicatorActive((prev) => !prev);
  };

  // Play/pause audio on toggle
  useEffect(() => {
    if (!audioElementRef.current) return;
    if (isAudioPlaying) {
      audioElementRef.current.play().catch((err) => console.warn("Audio play error:", err));
    } else {
      audioElementRef.current.pause();
    }
  }, [isAudioPlaying]);

  // Auto play after first interaction (click/scroll/touch)
  useEffect(() => {
    const audio = audioElementRef.current;
    if (!audio) return;

    const handleFirstInteraction = () => {
      if (!isAudioPlaying) {
        audio.muted = false;
        audio.play().then(() => {
          setIsAudioPlaying(true);
          setIsIndicatorActive(true);
        }).catch((err) => {
          console.warn("Auto-play failed:", err);
        });

        // Remove listeners after first interaction
        window.removeEventListener("click", handleFirstInteraction);
        window.removeEventListener("scroll", handleFirstInteraction);
        window.removeEventListener("touchstart", handleFirstInteraction);
      }
    };

    window.addEventListener("click", handleFirstInteraction);
    window.addEventListener("scroll", handleFirstInteraction);
    window.addEventListener("touchstart", handleFirstInteraction);

    return () => {
      window.removeEventListener("click", handleFirstInteraction);
      window.removeEventListener("scroll", handleFirstInteraction);
      window.removeEventListener("touchstart", handleFirstInteraction);
    };
  }, [isAudioPlaying]);

  // Navbar show/hide on scroll
  useEffect(() => {
    if (currentScrollY === 0) {
      setIsNavVisible(true);
      navContainerRef.current?.classList.remove("floating-nav");
    } else if (currentScrollY > lastScrollY) {
      setIsNavVisible(false);
      navContainerRef.current?.classList.add("floating-nav");
    } else {
      setIsNavVisible(true);
      navContainerRef.current?.classList.add("floating-nav");
    }

    setLastScrollY(currentScrollY);
  }, [currentScrollY, lastScrollY]);

  // Animate navbar
  useEffect(() => {
    gsap.to(navContainerRef.current, {
      y: isNavVisible ? 0 : -100,
      opacity: isNavVisible ? 1 : 0,
      duration: 0.2,
    });
  }, [isNavVisible]);

  return (
    <div
      ref={navContainerRef}
      className="fixed inset-x-0 top-4 z-50 h-16 border-none transition-all duration-700 sm:inset-x-6"
    >
      <header className="absolute top-1/2 w-full -translate-y-1/2">
        <nav className="flex size-full items-center justify-between p-4">
          {/* Logo and Location Button */}
          <div className="flex items-center gap-7">
            <a href="/">
              <img src="/img/logo.png" alt="logo" className="w-10" />
            </a>

            <a href="https://maps.app.goo.gl/acavF1abEbTVpGhH7" target="_blank" rel="noopener noreferrer">
              <Button
                id="product-button"
                title="Keraitan Village"
                rightIcon={<TiLocationArrow />}
                containerClass="bg-blue-50 md:flex hidden items-center justify-center gap-1"
              />
            </a>
          </div>

          {/* Nav links and audio button */}
          <div className="flex h-full items-center">
            <div className="hidden md:block">
              {navItems.map((item, index) => (
                <a
                  key={index}
                  href={item.href}
                  className="nav-hover-btn"
                  {...(item.href.startsWith("http") && {
                    target: "_blank",
                    rel: "noopener noreferrer",
                  })}
                >
                  {item.label}
                </a>
              ))}
            </div>

            <button
              onClick={toggleAudioIndicator}
              className="ml-10 flex items-center space-x-0.5"
            >
              <audio
                ref={audioElementRef}
                className="hidden"
                src="/audio/loop.mp3"
                loop
              />
              {[1, 2, 3, 4].map((bar) => (
                <div
                  key={bar}
                  className={clsx("indicator-line", {
                    active: isIndicatorActive,
                  })}
                  style={{ animationDelay: `${bar * 0.1}s` }}
                />
              ))}
            </button>
          </div>
        </nav>
      </header>
    </div>
  );
};

export default NavBar;