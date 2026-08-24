import type { Config } from "tailwindcss";

const config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        action: {
          primary: '#4B3FBF',
          hover: '#3C3198',
        },
        ink: {
          primary: '#292363',
        },
        copy: {
          primary: '#50576A',
          muted: '#50576A',
          inverse: '#FFFFFF',
        },
        surface: {
          base: '#FFFFFF',
          soft: '#F7F6FC',
        },
        line: {
          default: '#E4E2EF',
        },
        emphasis: {
          primary: '#C8A00A',
        },
        gray: {
          50: '#F7F6FC',
          200: '#E4E2EF',
          300: '#E4E2EF',
          500: '#50576A',
          600: '#50576A',
        },
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
      maxWidth: {
        'container': '1280px',
      },
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
  ],
} satisfies Config;

export default config; 