module.exports = {
  content: ['./src/**/*.{jsx,tsx}', './pages/**/*.{jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: '#38BDF8',
        obsidian: '#020617',
        'sky-digital': '#38BDF8',
        'alert-crimson': '#FF0000',
        'slate-satellite': '#94A3B8',
        'ghost-white': '#F8FAFC',
      },
      fontFamily: {
        tactical: ['"JetBrains Mono"', 'monospace'],
        mono: ['"JetBrains Mono"', 'monospace'],
        heading: ['"Inter"', 'sans-serif'],
        sans: ['"Inter"', 'sans-serif'],
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
