import type { Config } from 'tailwindcss';

const fluid = (px: number, base = 14.4) => `calc(${px} / ${base} * 1vw)`;

export default {
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  theme: {
    screens: { md: '768px', lg: '1024px', xl: '1440px' },
    extend: {
      colors: {
        bg: '#f5f5f6',
        surface: '#ffffff',
        'surface-2': '#fafafa',
        'surface-3': '#f5f5f7',
        ink: '#000000',
        'ink-2': '#5a5b62',
        'ink-3': 'rgba(0,0,0,0.6)',
        stroke: 'rgba(0,0,0,0.1)',
        divider: 'rgba(0,0,0,0.06)',
      },
      fontFamily: { sans: ['Manrope', 'Arial', 'sans-serif'] },
      borderRadius: {
        card: '24px',
        panel: '16px',
        media: '12px',
        btn: '12px',
        tile: '36px',
        field: '20px',
      },
      backgroundImage: {
        'brand-text': 'linear-gradient(90deg,#ff6d3c 0%,#ff6ba7 46%,#bb6dff 100%)',
        'brand-surface':
          'linear-gradient(157deg,#fff 17.71%,#ffcdb3 43.16%,#ffa4b6 58.2%,#ffb2e9 73.32%,#d4d6ff 90.8%,#fff 103.16%)',
        'brand-border': 'linear-gradient(135deg,#ff6d3d 0%,#ff6ca7 52%,#bb6dff 100%)',
      },
      transitionTimingFunction: { motion: 'cubic-bezier(0.16,1,0.3,1)' },
      fontSize: {
        'sec-title': [fluid(52), { lineHeight: '1.2308', letterSpacing: fluid(-1) }],
        'card-title': [fluid(24), { lineHeight: '1.3334', letterSpacing: fluid(-1) }],
        'body-16': [fluid(16), { lineHeight: '1.5' }],
        'body-14': [fluid(14), { lineHeight: '1.4286' }],
      },
    },
  },
} satisfies Config;

