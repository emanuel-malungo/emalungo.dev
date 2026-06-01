import React from "react";

export default function AuroraGlow() {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">

      {/* Background ambient */}
      <div
        className="absolute inset-0"
        style={{
          background: `
            radial-gradient(
              circle at 50% 35%,
              rgba(139,92,246,0.08),
              transparent 60%
            )
          `,
        }}
      />

      {/* Huge white fog */}
      <div
        className="
          absolute
          left-1/2
          bottom-[-1000px]
          -translate-x-1/2
          w-[2400px]
          h-[2400px]
          rounded-full
          opacity-80
          blur-[280px]
        "
        style={{
          background:
            "radial-gradient(circle, transparent 62%, rgba(255,255,255,.7) 70%, transparent 78%)",
        }}
      />

      {/* Purple main glow */}
      <div
        className="
          absolute
          left-1/2
          bottom-[-1500px]
          -translate-x-1/2
          w-[2200px]
          h-[2200px]
          rounded-full
          opacity-100
          blur-[100px]
        "
        style={{
          background:
            "radial-gradient(circle, transparent 60%, rgba(124,58,237,1) 69%, rgba(139,92,246,.9) 74%, transparent 82%)",
        }}
      />

      {/* Bright core */}
      <div
        className="
          absolute
          left-1/2
          bottom-[-1500px]
          -translate-x-1/2
          w-[2100px]
          h-[2100px]
          rounded-full
          opacity-100
          blur-[35px]
        "
        style={{
          background:
            "radial-gradient(circle, transparent 66%, rgba(255,255,255,1) 72%, transparent 76%)",
        }}
      />

      {/* Inner purple beam */}
      <div
        className="
          absolute
          left-1/2
          bottom-[-1480px]
          -translate-x-1/2
          w-[2000px]
          h-[2000px]
          rounded-full
          opacity-90
          blur-[60px]
        "
        style={{
          background:
            "radial-gradient(circle, transparent 68%, rgba(168,85,247,.9) 74%, transparent 80%)",
        }}
      />

      {/* Center glow */}
      <div
        className="
          absolute
          left-1/2
          top-[45%]
          -translate-x-1/2
          w-[900px]
          h-[500px]
          rounded-full
          blur-[150px]
          opacity-40
        "
        style={{
          background:
            "radial-gradient(circle, rgba(255,255,255,.5), transparent 70%)",
        }}
      />

      {/* Fade bottom */}
      <div className="absolute inset-x-0 bottom-0 h-64 bg-gradient-to-t from-black via-black/90 to-transparent" />
    </div>
  );
}