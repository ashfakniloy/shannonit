module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "custom-gray": "#363636",
        "custom-gray2": "#ccc9c2",
        "custom-gray3": "#7d7d7d",
        "custom-gray4": "#F8F8F8",
        "custom-orange": "#d79b81",
      },
      fontFamily: {
        Raleway: ["Raleway, sans-serif"],
        Montserrat: ["Montserrat, sans-serif"],
        Poppins: ["Poppins, sans-serif"],
      },
    },

    container: {
      center: true,
      screens: {
        lg: "1180px",
        xl: "1180px",
        "2xl": "1180px",
      },
    },
  },
  plugins: [],
};
