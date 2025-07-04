import { useState, useRef } from "react";
import { TiLocationArrow } from "react-icons/ti";

// ---------- BentoTilt ----------
export const BentoTilt = ({ children, className = "" }) => {
  const [transformStyle, setTransformStyle] = useState("");
  const itemRef = useRef(null);

  const handleMouseMove = (event) => {
    if (!itemRef.current) return;

    const { left, top, width, height } = itemRef.current.getBoundingClientRect();
    const relativeX = (event.clientX - left) / width;
    const relativeY = (event.clientY - top) / height;

    const tiltX = (relativeY - 0.5) * 5;
    const tiltY = (relativeX - 0.5) * -5;

    setTransformStyle(
      `perspective(700px) rotateX(${tiltX}deg) rotateY(${tiltY}deg) scale3d(.95, .95, .95)`
    );
  };

  const handleMouseLeave = () => {
    setTransformStyle("");
  };

  return (
    <div
      ref={itemRef}
      className={className}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{ transform: transformStyle }}
    >
      {children}
    </div>
  );
};

// ---------- BentoCard ----------
export const BentoCard = ({
  src,
  title,
  description,
  isComingSoon,
  comingSoonLink,
}) => {
  const [cursorPosition, setCursorPosition] = useState({ x: 0, y: 0 });
  const [hoverOpacity, setHoverOpacity] = useState(0);

  const hoverButtonRef = useRef(null);
  const videoRef = useRef(null);

  const handleMouseMove = (event) => {
    if (!hoverButtonRef.current) return;
    const rect = hoverButtonRef.current.getBoundingClientRect();
    setCursorPosition({
      x: event.clientX - rect.left,
      y: event.clientY - rect.top,
    });
  };

  const handleEnter = () => {
    setHoverOpacity(1);
    if (videoRef.current) videoRef.current.play().catch(() => {});
  };

  const handleLeave = () => {
    setHoverOpacity(0);
    if (videoRef.current) {
      videoRef.current.pause();
      videoRef.current.currentTime = 0;
    }
  };

  const handleTouchStart = () => {
    if (videoRef.current) videoRef.current.play().catch(() => {});
  };

  const handleTouchEnd = () => {
    if (videoRef.current) {
      videoRef.current.pause();
      videoRef.current.currentTime = 0;
    }
  };

  return (
    <div
      className="relative size-full"
      onMouseEnter={handleEnter}
      onMouseLeave={handleLeave}
      onTouchStart={handleTouchStart}
      onTouchEnd={handleTouchEnd}
      onTouchCancel={handleTouchEnd}
    >
      <video
        ref={videoRef}
        src={src}
        loop
        muted
        playsInline
        className="absolute left-0 top-0 size-full object-cover object-center"
      />
      <div className="relative z-10 flex size-full flex-col justify-between p-5 text-blue-50">
        <div>
          <h1 className="bento-title special-font">{title}</h1>
          {description && (
            <p className="mt-3 max-w-64 text-xs md:text-base">{description}</p>
          )}
        </div>

        {isComingSoon && (
          <a
            href={comingSoonLink || "#"}
            ref={hoverButtonRef}
            onMouseMove={handleMouseMove}
            className="border-hsla relative flex w-fit cursor-pointer items-center gap-1 overflow-hidden rounded-full bg-yellow-600 px-5 py-2 text-xs uppercase text-white font-bold"
          >
            <div
              className="pointer-events-none absolute -inset-px opacity-0 transition duration-300"
              style={{
                opacity: hoverOpacity,
                background: `radial-gradient(100px circle at ${cursorPosition.x}px ${cursorPosition.y}px, #f2caac, #00000026)`,
              }}
            />
            <TiLocationArrow className="relative z-20" />
            <p className="relative z-20">Link Site </p>
          </a>
        )}
      </div>
    </div>
  );
};

// ---------- Features Section ----------
const Features = () => (
  <section className="bg-black pb-52">
    <div className="container mx-auto px-3 md:px-10">
      <div className="px-5 py-32">
        <p className="font-circular-web text-lg text-blue-50">
          Into the Heart of Keraitan
        </p>
        <p className="max-w-md font-circular-web text-lg text-blue-50 opacity-50">
          Immerse yourself in the warmth of Keraitan, where culture, nature, and tradition blend into a deeply connected village experience.
        </p>
      </div>

      <BentoTilt className="border-hsla relative mb-7 h-96 w-full overflow-hidden rounded-md md:h-[65vh]">
        <BentoCard
          src="videos/feature-1.mp4"
          title={<>Kerait<b>a</b>n</>}
          description="A village that turns every visit into a meaningful cultural journey."
          isComingSoon
          comingSoonLink="/vision-mission"
        />
      </BentoTilt>

      <div className="grid h-[135vh] w-full grid-cols-2 grid-rows-3 gap-7">
        <BentoTilt className="bento-tilt_1 row-span-1 md:col-span-1 md:row-span-2">
          <BentoCard
            src="videos/feature-2.mp4"
            title={<>SO<b>T</b>K</>}
            description="Struktur Organisasi dan Tata Kerja Desa Keraitan"
            isComingSoon
            comingSoonLink="/sotk"
          />
        </BentoTilt>

        <BentoTilt className="bento-tilt_1 row-span-1 ms-32 md:col-span-1 md:ms-0">
          <BentoCard
            src="videos/feature-3.mp4"
            title={<>Info<b>gr</b>afis</>}
            description="Infografis Desa Keraitan"
            isComingSoon
            comingSoonLink="/demografi"
          />
        </BentoTilt>

        <BentoTilt className="bento-tilt_1 me-14 md:col-span-1 md:me-0">
          <BentoCard
            src="videos/feature-4.mp4"
            title={<>SD<b>G</b>S</>}
            description="Skor SDGS Desa Keraitan"
            isComingSoon
            comingSoonLink="/sdgs"
          />
        </BentoTilt>

        <BentoTilt className="bento-tilt_2">
        <a
          href="https://kkn-10.vercel.app/"
          target="_blank"
          rel="noopener noreferrer"
          className="flex size-full flex-col justify-between bg-yellow-600 p-5 no-underline"
          >
        <h1 className="bento-title special-font max-w-64 text-black">
          S<b>t</b>ay tu<b>n</b>ed for <b>m</b>ore.
       </h1>
    <TiLocationArrow className="m-5 scale-[5] self-end text-black" />
        </a>
        </BentoTilt>

        <BentoTilt className="bento-tilt_2">
          <video
            src="videos/feature-5.mp4"
            loop
            muted
            autoPlay
            className="size-full object-cover object-center"
          />
        </BentoTilt>
      </div>
    </div>
  </section>
);

export default Features;