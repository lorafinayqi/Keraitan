import { gsap } from "gsap";
import { useState, useRef, useEffect } from "react";

export const VideoPreview = ({ children }) => {
  const [isHovering, setIsHovering] = useState(false);

  const sectionRef = useRef(null);
  const contentRef = useRef(null);

  // Handles mouse movement over the container
  const handleMouseMove = ({ clientX, clientY, currentTarget }) => {
    if (!sectionRef.current || !contentRef.current) return;

    const rect = currentTarget.getBoundingClientRect();
    const xOffset = clientX - (rect.left + rect.width / 2);
    const yOffset = clientY - (rect.top + rect.height / 2);

    if (isHovering) {
      gsap.to(sectionRef.current, {
        x: xOffset,
        y: yOffset,
        rotationY: xOffset / 2,
        rotationX: -yOffset / 2,
        transformPerspective: 500,
        duration: 0.6,
        ease: "power1.out",
      });

      gsap.to(contentRef.current, {
        x: -xOffset,
        y: -yOffset,
        duration: 0.6,
        ease: "power1.out",
      });
    }
  };

  useEffect(() => {
    if (!sectionRef.current || !contentRef.current) return;

    if (!isHovering) {
      gsap.to(sectionRef.current, {
        x: 0,
        y: 0,
        rotationY: 0,
        rotationX: 0,
        duration: 0.6,
        ease: "power1.out",
      });

      gsap.to(contentRef.current, {
        x: 0,
        y: 0,
        duration: 0.6,
        ease: "power1.out",
      });
    }
  }, [isHovering]);

  return (
    <section
      ref={sectionRef}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovering(true)}
      onMouseLeave={() => setIsHovering(false)}
      className="absolute z-50 size-full overflow-hidden rounded-lg"
      style={{
        perspective: "500px",
        transformStyle: "preserve-3d",
      }}
    >
      <div
        ref={contentRef}
        className="origin-center rounded-lg"
        style={{
          transformStyle: "preserve-3d",
        }}
      >
        {children}
      </div>
    </section>
  );
};

export default VideoPreview;