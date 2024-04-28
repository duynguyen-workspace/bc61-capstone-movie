import Login from "./src/pages/auth/Login/Login";

/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{html,js,jsx}"],
  theme: {
    extend: {
      container: {
        center: true,
      },
      colors: {
        form: "rgba(255, 255, 255, 255, 0.5)",
      },
    },
  },
  plugins: [],
};
