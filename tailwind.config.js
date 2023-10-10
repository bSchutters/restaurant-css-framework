/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{html,js}"],
  theme: {
    colors: {
      "dark-prim": "#2F323D",
      "light-prim": "#FFFCF0",
      secondary: "#BAA27C",
      accent: "#CB6644",
    },
    extend: {
      fontFamily: {
        "Ranade-Regular": ["Ranade-Regular"],
        "Ranade-Medium": ["Ranade-Medium"],
        "Ranade-Bold": ["Ranade-Bold"],
        Stardom: ["Stardom"],
      },
      height: {
        "80vh": "80vh",
      },
    },
  },
  plugins: [],
};
