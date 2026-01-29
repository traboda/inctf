module.exports = {
  content: ['./src/**/*.{jsx,tsx}', './pages/**/*.{jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: '#F13F17',
        obsidian: '#020617',
        'sky-digital': '#38BDF8',
        'alert-crimson': '#E11D48',
        'slate-satellite': '#94A3B8',
        'ghost-white': '#F8FAFC',
      },
      fontFamily: {
        tactical: ['"JetBrains Mono"', 'monospace'],
        heading: ['"Inter"', 'sans-serif'],
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
