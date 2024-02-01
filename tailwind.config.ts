import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        blue: {
          50: '#eef9ff',
          100: '#d8f2ff',
          200: '#bae8ff',
          300: '#8bdcff',
          400: '#54c6ff',
          500: '#2ca8ff',
          600: '#2392fb',
          700: '#0e73e7',
          800: '#125cbb',
          900: '#154f93',
          950: '#123059',
        },
        gray: {
          50: '#f6f5f5',
          100: '#e8e6e5',
          200: '#d3d0ce',
          300: '#b4afac',
          400: '#8e8782',
          500: '#736c67',
          600: '#625c58',
          700: '#534f4b',
          800: '#484542',
          900: '#3f3d3a',
          950: '#181716',
        },
        white: '#fbfaf4',
        green: {
          50: '#f5f8f5',
          100: '#dfe8e1',
          200: '#bed1c3',
          300: '#96b29e',
          400: '#72927d',
          500: '#567661',
          600: '#435e4d',
          700: '#394c41',
          800: '#303f36',
          900: '#2b362f',
          950: '#151e18',
        },
        red: {
          50: '#fdf3f3',
          100: '#fbe6e5',
          200: '#f9d0cf',
          300: '#f3b0ae',
          400: '#ea837f',
          500: '#db4d48',
          600: '#ca3d38',
          700: '#a9302c',
          800: '#8c2b28',
          900: '#752a27',
          950: '#3f1210',
        },
      },
      backgroundImage: {
        'hero-pattern': "url('https://images.unsplash.com/photo-1604328471151-b52226907017?q=80&w=2671&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')",
        'footer-texture': "url('/img/footer-texture.png')",
      },
    }
  },
  plugins: [],
};
export default config;
