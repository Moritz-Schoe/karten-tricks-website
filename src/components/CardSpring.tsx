"use client";

import { useEffect, useRef, useState } from "react";

const CARDS = [
  { rank: "A", suit: "♠", faceUp: true,  dark: true  },
  { rank: "K", suit: "♥", faceUp: true,  dark: false },
  { rank: "Q", suit: "♦", faceUp: true,  dark: false },
  { rank: "J", suit: "♠", faceUp: false, dark: true  },
  { rank: "10", suit: "♥", faceUp: true, dark: false },
  { rank: "9", suit: "♣", faceUp: false, dark: true  },
  { rank: "8", suit: "♦", faceUp: true,  dark: false },
  { rank: "7", suit: "♠", faceUp: false, dark: true  },
  { rank: "6", suit: "♥", faceUp: true,  dark: false },
  { rank: "5", suit: "♣", faceUp: false, dark: true  },
  { rank: "4", suit: "♦", faceUp: true,  dark: false },
];

// Varying parallax depths so cards appear at different z-layers
const DEPTHS = [0.22, 0.58, 0.34, 0.78, 0.16, 0.68, 0.42, 0.52, 0.28, 0.72, 0.38];

const N = CARDS.length;

// Cards cascade diagonally from bottom-left → top-right, shown in side view
const POSITIONS = CARDS.map((_, i) => {
  const t = i / (N - 1); // 0 → 1
  return {
    x: 3 + t * 86,                // 3% → 89% (left → right)
    y: 85 - t * 70,               // 85% → 15% (bottom → top)
    // 2D tilt: cards follow the diagonal, slightly angled
    rot2d: -22 + i * 1.2,
    // Y-axis rotation for side-view (edge-on perspective)
    rotY: 64 + (i % 3) * 4,      // 64° – 72°, slight variation per card
    depth: DEPTHS[i],
    floatDelay: i * 0.32,
  };
});

export default function CardSpring() {
  const [mouse, setMouse] = useState({ x: 0, y: 0 });
  const target = useRef({ x: 0, y: 0 });
  const raf = useRef<number>(0);

  useEffect(() => {
    const onMove = (e: MouseEvent) => {
      target.current = {
        x: (e.clientX / window.innerWidth - 0.5) * 2,  // -1 → 1
        y: (e.clientY / window.innerHeight - 0.5) * 2,
      };
    };
    window.addEventListener("mousemove", onMove, { passive: true });

    // Smooth lerp loop
    const loop = () => {
      setMouse(p => ({
        x: p.x + (target.current.x - p.x) * 0.07,
        y: p.y + (target.current.y - p.y) * 0.07,
      }));
      raf.current = requestAnimationFrame(loop);
    };
    raf.current = requestAnimationFrame(loop);

    return () => {
      window.removeEventListener("mousemove", onMove);
      cancelAnimationFrame(raf.current);
    };
  }, []);

  return (
    <div
      className="pointer-events-none absolute inset-0 overflow-hidden"
      aria-hidden="true"
    >
      {CARDS.map((card, i) => {
        const p = POSITIONS[i];
        // Deeper cards move more with mouse (parallax layers)
        const px = mouse.x * p.depth * 32;
        const py = mouse.y * p.depth * 18;

        return (
          <div
            key={i}
            className="absolute"
            style={{
              left: `${p.x}%`,
              top: `${p.y}%`,
              // Side-view: combine 2D diagonal tilt + 3D Y-axis rotation (edge-on)
              transform: `translate(calc(-50% + ${px}px), calc(-50% + ${py}px)) rotate(${p.rot2d}deg) perspective(700px) rotateY(${p.rotY}deg)`,
              willChange: "transform",
              opacity: 0.45,
            }}
          >
            {/* Inner wrapper for the float animation so it doesn't conflict with parallax transform */}
            <div
              style={{
                animation: `card-float ${2.6 + p.depth * 1.2}s ease-in-out ${p.floatDelay}s infinite alternate`,
              }}
            >
              <CardFace {...card} />
            </div>
          </div>
        );
      })}
    </div>
  );
}

function CardFace({
  rank,
  suit,
  faceUp,
  dark,
}: {
  rank: string;
  suit: string;
  faceUp: boolean;
  dark: boolean;
}) {
  const suitColor = dark ? "#1A1B26" : "#D2A63C";
  const shadow = "drop-shadow(0 6px 18px rgba(0,0,0,0.18))";

  if (!faceUp) {
    return (
      <svg
        width="80"
        height="112"
        viewBox="0 0 80 112"
        xmlns="http://www.w3.org/2000/svg"
        style={{ filter: shadow, display: "block" }}
      >
        <rect width="80" height="112" rx="7" fill="#1A1B26" />
        <rect
          x="5" y="5" width="70" height="102" rx="5"
          fill="none" stroke="#D2A63C" strokeWidth="1.5" opacity="0.55"
        />
        {/* Diagonal cross */}
        <line x1="6" y1="6" x2="74" y2="106" stroke="#D2A63C" strokeWidth="0.7" opacity="0.22" />
        <line x1="74" y1="6" x2="6" y2="106" stroke="#D2A63C" strokeWidth="0.7" opacity="0.22" />
        {/* Centre diamond */}
        <polygon
          points="40,44 56,56 40,68 24,56"
          fill="none" stroke="#D2A63C" strokeWidth="1.5" opacity="0.65"
        />
        <polygon
          points="40,50 49,56 40,62 31,56"
          fill="#D2A63C" opacity="0.35"
        />
      </svg>
    );
  }

  return (
    <svg
      width="80"
      height="112"
      viewBox="0 0 80 112"
      xmlns="http://www.w3.org/2000/svg"
      style={{ filter: shadow, display: "block" }}
    >
      {/* Card body */}
      <rect width="80" height="112" rx="7" fill="white" />
      <rect
        x="0.5" y="0.5" width="79" height="111" rx="6.5"
        fill="none" stroke="rgba(0,0,0,0.07)" strokeWidth="1"
      />

      {/* Top-left corner */}
      <text
        x="8" y="19"
        fontFamily="Georgia, 'Times New Roman', serif"
        fontSize="15"
        fontWeight="bold"
        fill={suitColor}
      >
        {rank}
      </text>
      <text
        x="8" y="31"
        fontFamily="Georgia, 'Times New Roman', serif"
        fontSize="13"
        fill={suitColor}
      >
        {suit}
      </text>

      {/* Large centre suit */}
      <text
        x="40" y="60"
        fontFamily="Georgia, 'Times New Roman', serif"
        fontSize="34"
        textAnchor="middle"
        dominantBaseline="middle"
        fill={suitColor}
      >
        {suit}
      </text>

      {/* Bottom-right corner (180° rotated) */}
      <g transform="rotate(180 40 56)">
        <text
          x="8" y="19"
          fontFamily="Georgia, 'Times New Roman', serif"
          fontSize="15"
          fontWeight="bold"
          fill={suitColor}
        >
          {rank}
        </text>
        <text
          x="8" y="31"
          fontFamily="Georgia, 'Times New Roman', serif"
          fontSize="13"
          fill={suitColor}
        >
          {suit}
        </text>
      </g>
    </svg>
  );
}
