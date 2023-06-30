/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      screens: {
        'mobile2':'374px',
        'mobile3': '424px',
        'desktop-minimizar':'520px',
        'tablet-670':'670px',
        'tablet-mitad':'550px',
        'tablet':'767px',
        'tablet1004':'1004px',
        'laptop':'1024px',
        'desktopmd': '1833px',
        'desktopmd2': '1965px',
        'desktop': '2000px',
        '2.5xl':'1600px',
        '2.7xl':'1668px',
        '2.8xl':'1700px',
        '3xl': '1534px',
      }
    },
  },
  plugins: [require('@tailwindcss/aspect-ratio'),],
}
