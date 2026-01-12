// Carousel.jsx
import React, { useEffect, useRef } from "react";
import gsap from "gsap";

const Carousel = ({ images }) => {
  const containerRef = useRef(null);
  const itemsRef = useRef([]);

  const imgs =
    images || ["/tshirt-1.png", "/tshirt-2.png", "/tshirt-3.png", "/tshirt-4.png", "/tshirt-5.png"];

  useEffect(() => {
    const container = containerRef.current;
    const items = itemsRef.current.filter(Boolean);
    const count = items.length;

    if (!container || count === 0) return;

    const rect = container.getBoundingClientRect();
    const size = Math.min(rect.width, rect.height);
    const radius = size * 0.85; // size of the 3D circle

    let rotation = 0; // global angle
    const step = (Math.PI * 2) / count;

    const update = () => {
      items.forEach((el, i) => {
        const angle = rotation + i * step;

        const x = Math.sin(angle) * radius;
        const z = Math.cos(angle) * radius;

        // scale & opacity based on depth (z)
        const scale = gsap.utils.mapRange(-radius, radius, 0.6, 1.2, z);
        const opacity = gsap.utils.mapRange(-radius, radius, 0.3, 1, z);
        const zIndex = Math.round(
          gsap.utils.mapRange(-radius, radius, 0, 1000, z)
        );

        gsap.set(el, {
          x,
          z,
          scale,
          opacity,
          rotationY: 0, // always facing front
          transformOrigin: "50% 50%",
          zIndex,
        });
      });
    };

    const tick = () => {
      rotation += 0.002; // speed of rotation
      update();
    };

    // initial position
    update();
    gsap.ticker.add(tick);

    return () => {
      gsap.ticker.remove(tick);
    };
  }, [images]);

  return (
    <div
      ref={containerRef}
      className="relative w-[280px] h-[280px] md:w-[360px] md:h-[360px] lg:w-[420px] lg:h-[520px]"
      style={{
        perspective: "700px", // key for depth
      }}
    >
      <div
        className="absolute inset-0"
        style={{
          transformStyle: "preserve-3d",
        }}
      >
        {imgs.map((src, i) => (
          <div
            key={i}
            ref={(el) => (itemsRef.current[i] = el)}
            style={{
              width: "240px",
              height: "180px",
              position: "absolute",
              top: "10%",
              left: "15%",
              transformStyle: "preserve-3d",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <img
              src={src}
              alt={`tshirt-${i}`}
              className="h-40 md:h-48 lg:h-60 object-contain drop-shadow-[0_8px_20px_rgba(0,0,0,0.6)]"
              draggable={false}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Carousel;
