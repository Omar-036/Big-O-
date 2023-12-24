/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    screens: {
      sm: "480px",
      md: "768px",
      lg: "976px",
      xl: "1440px",
    },

    extend: {
      colors: {
        primaryDarkBlue: "#1803A5",
        primaryLightkBlue: "#408ec6",
        primaryDarkRed: "#7a2048",
        strongCyan: "hsl(171, 66%, 44%)",
        lightBlue: "hsl(233, 100%, 69%)",
        darkGrayishBlue: "hsl(210, 10%, 33%)",
        grayishBlue: "hsl(201, 11%, 66%)",
      },

      // fontFamily: {
      //   sans: ["Bai Jamjuree", "sans-serif"],
      // },

      animation: {
        "spin-slow": "spin 51s linear infinite",
      },
      spacing: {
        128: "32rem",
      },
    },
  },
  plugins: [],
};

/*eslint-env node*/

// module.exports = {
//   theme: {
//     extend: {
//       animation: {
//         "spin-slow": "spin 3s linear infinite",
//       },
//     },
//   },
// };

/** @type {import('tailwindcss').Config} */
/*eslint-env node*/
// module.exports = {
//   content: ["./src/**/*.{html,js}"],
//   theme: {
//     colors: {
//       blue: "#1fb6ff",
//       purple: "#7e5bef",
//       pink: "#ff49db",
//       orange: "#ff7849",
//       green: "#13ce66",
//       yellow: "#ffc82c",
//       "gray-dark": "#273444",
//       gray: "#8492a6",
//       "gray-light": "#d3dce6",
//     },
//     fontFamily: {
//       sans: ["Graphik", "sans-serif"],
//       serif: ["Merriweather", "serif"],
//     },
//     extend: {
//       spacing: {
//         "8xl": "96rem",
//         "9xl": "128rem",
//       },
//       borderRadius: {
//         "4xl": "2rem",
//       },
//     },
//   },
// };
