const animations = {
  animated: {
    opacity: 1,
    x: 0,
    y: 0,
    transition: {
      type: "spring",
      stiffness: 120,
      damping: 15,
      mass: 0.5,
      staggerChildren: 0.1
    }
  },
  // Tactical Reveal: Snappy scale + blur in
  tacticalFocus: {
    opacity: 1,
    scale: 1,
    filter: "blur(0px)",
    transition: {
      type: "spring",
      stiffness: 150,
      damping: 20,
      mass: 0.8,
      staggerChildren: 0.08
    }
  },
  // Initial States for Tactical Reveal
  hiddenScale: { opacity: 0, scale: 0.95, filter: "blur(5px)" },
  hiddenBlur: { opacity: 0, filter: "blur(8px)" },

  // Decoding Text Effect (for Framer Motion)
  decoding: {
    opacity: 1,
    transition: {
      staggerChildren: 0.05,
      staggerDirection: 1
    }
  },
  hiddenDecoding: {
    opacity: 0
  },
  charReveal: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.05 } // Fast snap for each char
  },
  hiddenChar: {
    opacity: 0,
    x: -5
  }
};

export default animations;