module.exports = {
  darkMode: 'class', 
  content: ['./src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        lightBg: '#ffffff',
        lightText: '#000000',
        darkBg: '#1a202c',
        darkText: '#ffffff',
      },
      fontFamily: {
        inter: ['Inter', 'sans-serif'],
        montserrat: ['Montserrat', 'sans-serif'],
        poppins: ['Poppins', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
