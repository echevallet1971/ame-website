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
        // Ask My Envoy Brand Colors - Easy to update!
        brand: {
          'royal-blue': '#0A32B4',      // RGB(10, 50, 180)
          'royal-blue-dark': '#051954',  // Darker for backgrounds/text
          'royal-blue-deeper': '#02102D', // Even darker
          'teal': '#1496B4',             // RGB(20, 150, 180)
          'mint': '#28B496',             // RGB(40, 180, 150)
          'green': '#1EAA32',            // RGB(30, 170, 50)
          'gold': '#C8A00A',             // RGB(200, 160, 10)
          'purple': '#8C1EB4',           // RGB(140, 30, 180)
          // Base colors from Figma
          'black': '#000000',
          'white': '#FFFFFF',
          'gray': '#404040',
          'border': '#E5E5E5',
        },
        // Semantic colors - point to brand colors for easy updating
        primary: '#0A32B4',              // Royal Blue
        secondary: '#1496B4',            // Teal
        accent: '#28B496',               // Mint
        success: '#1EAA32',              // Green
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