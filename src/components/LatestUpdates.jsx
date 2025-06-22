import React, { useEffect, useRef } from "react";
import { updates } from "../data/updates";
import { gsap } from "gsap";
import Button from "./Button";
import { TiLocationArrow } from "react-icons/ti";

const LatestUpdates = () => {
  const sectionRef = useRef(null);
  const imageRefs = useRef([]);

  useEffect(() => {
    gsap.fromTo(
      sectionRef.current,
      { opacity: 0, y: 40 },
      { opacity: 1, y: 0, duration: 1, ease: "power3.out" }
    );
  }, []);

  const handleMouseMove = (e, idx) => {
    const img = imageRefs.current[idx];
    if (!img) return;

    const rect = img.getBoundingClientRect();
    const xPos = e.clientX - rect.left;
    const centerX = rect.width / 2;
    const rotateY = ((xPos - centerX) / centerX) * 10;

    gsap.to(img, {
      duration: 0.3,
      rotateY,
      transformPerspective: 800,
      transformOrigin: "center",
      ease: "power1.inOut",
      boxShadow: "0 15px 30px rgba(255, 193, 7, 0.4)", // Yellow glow
      scale: 1.03,
    });
  };

  const handleMouseLeave = (idx) => {
    const img = imageRefs.current[idx];
    if (!img) return;

    gsap.to(img, {
      duration: 0.4,
      rotateY: 0,
      boxShadow: "0px 0px 0px rgba(0, 0, 0, 0)",
      scale: 1,
      ease: "power2.out",
    });
  };

  return (
    <section ref={sectionRef} className="bg-[#dfdff0] py-20 px-8">
      <div className="max-w-7xl mx-auto grid md:grid-cols-3 gap-12 items-start">
        {/* LEFT */}
        <div className="md:col-span-1">
          <h2 className="text-5xl font-extrabold leading-none">
            <span className="block text-yellow-600 px-0">LATEST</span>
            <span className="block text-amber-600 px-0 mt-1">NEWS</span>
          </h2>
          <p className="text-sm mt-4 text-gray-700">
            Stay connected with the latest news, events, and developments from our village. Be a part of the growth and transformation of a community full of potential.
          </p>
          <a href="https://medium.com/@afripow" target="_blank" rel="noopener noreferrer">
            <Button 
             title="READ ALL NEWS"
             rightIcon={<TiLocationArrow />}
             containerClass="flex-center mt-6 gap-1"
            />
         </a>
        </div>

        {/* RIGHT */}
        <div className="md:col-span-2 grid sm:grid-cols-2 gap-6">
          {updates.map((item, idx) => (
            <a key={idx} href={item.link} target="_blank" rel="noopener noreferrer" className="block group">
              <div
                onMouseMove={(e) => handleMouseMove(e, idx)}
                onMouseLeave={() => handleMouseLeave(idx)}
                className="rounded-lg overflow-hidden"
              >
                <img
                  ref={(el) => (imageRefs.current[idx] = el)}
                  src={item.image}
                  alt={item.title}
                  className="w-full h-56 object-cover transition-transform will-change-transform"
                  style={{
                    transformStyle: "preserve-3d",
                    backfaceVisibility: "hidden",
                    borderRadius: "12px",
                  }}
                />
              </div>
              <time className="text-xs text-gray-600 mt-2 block">{item.date}</time>
              <h3 className="text-md font-semibold mt-1 leading-snug">
                {item.title}
              </h3>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default LatestUpdates;