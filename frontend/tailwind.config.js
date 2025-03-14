/** @type {import('tailwindcss').Config} */
module.exports = {
    darkMode: "class", // Enables dark mode switching
    content: [
      "./app/**/*.{js,ts,jsx,tsx}",
      "./pages/**/*.{js,ts,jsx,tsx}",
      "./components/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
      extend: {
        colors: {
          primary: "##FF0000", // Indigo
          secondary: "#F43F5E", // Rose
          background: "#F3F4F6", // Light Gray
          text: "#111827", // Dark Gray
        },
      },
    },
    plugins: [],
  };
  