import { motion } from "framer-motion";

const AnimatedBackground = () => {
  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
      {/* Animated gradient base */}
      <div className="absolute inset-0 animated-gradient-bg" />
      
      {/* Floating orbs */}
      <motion.div
        className="floating-orb w-[600px] h-[600px] -top-48 -left-48"
        style={{ background: "hsl(195 100% 50% / 0.15)" }}
        animate={{
          x: [0, 100, -50, 0],
          y: [0, -80, 60, 0],
          scale: [1, 1.2, 0.9, 1],
        }}
        transition={{
          duration: 25,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
      
      <motion.div
        className="floating-orb w-[500px] h-[500px] top-1/3 -right-32"
        style={{ background: "hsl(270 100% 60% / 0.12)" }}
        animate={{
          x: [0, -80, 40, 0],
          y: [0, 60, -100, 0],
          scale: [1, 0.8, 1.1, 1],
        }}
        transition={{
          duration: 30,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
      
      <motion.div
        className="floating-orb w-[400px] h-[400px] bottom-1/4 left-1/4"
        style={{ background: "hsl(180 100% 50% / 0.1)" }}
        animate={{
          x: [0, 50, -80, 0],
          y: [0, -40, 80, 0],
          scale: [1, 1.15, 0.85, 1],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      <motion.div
        className="floating-orb w-[350px] h-[350px] bottom-20 right-1/4"
        style={{ background: "hsl(195 100% 50% / 0.08)" }}
        animate={{
          x: [0, -60, 30, 0],
          y: [0, 50, -60, 0],
        }}
        transition={{
          duration: 18,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      {/* Subtle grid overlay */}
      <div 
        className="absolute inset-0 opacity-[0.02]"
        style={{
          backgroundImage: `
            linear-gradient(hsl(195 100% 50%) 1px, transparent 1px),
            linear-gradient(90deg, hsl(195 100% 50%) 1px, transparent 1px)
          `,
          backgroundSize: '100px 100px',
        }}
      />
      
      {/* Noise texture overlay */}
      <div 
        className="absolute inset-0 opacity-[0.015]"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 400 400' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
        }}
      />
    </div>
  );
};

export default AnimatedBackground;
