import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    colors: {
      black: '#000',
      grey : '#555',
     'light-grey': "#F3F3F3",
     orange: '#ffa45c',
     white:  '#FFF',
     'black-2': "#222",
     transparent: 'transparent',
     

    },
    extend: {
      fontFamily: {
        spartan: ['Spartan', 'san-serif'],
      }
    },
  },
  plugins: [],
};
export default config;
