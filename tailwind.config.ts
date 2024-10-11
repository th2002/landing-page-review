import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        background: 'var(--background)',
        foreground: 'var(--foreground)',
        primary: {
          DEFAULT: 'var(--primary)',
          foreground: 'var(--primary-foreground)',
        },
        secondary: {
          DEFAULT: 'var(--secondary)',
          foreground: 'var(--secondary-foreground)',
        },
        muted: {
          DEFAULT: 'var(--muted)',
          foreground: 'var(--muted-foreground)',
        },
        accent: {
          DEFAULT: 'var(--accent)',
          foreground: 'var(--accent-foreground)',
        },
      },
      maxWidth: {
        'screen-3xl': 'calc(1920px - 100px)',
      },
      height: {
        'hero-section': 'calc(100vh - 80px)',
      },
      aspectRatio: {
        'auto-133/66': 'auto 133/66',
        'portfolio-img': 'auto 1520 / 1140',
      },
    },
    fontFamily: {
      primary: 'var(--primary-font)',
    },
  },
  plugins: [],
};
export default config;
