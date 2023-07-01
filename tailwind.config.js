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
        'tablet':'767px',
        'laptop':'1024px',
        'laptopL':'1440px',
        'laptopL2':'1535px',
      }
    },
  },
  plugins: [require('@tailwindcss/aspect-ratio'),],
}
