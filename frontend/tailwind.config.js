/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      width: {
        main: "1350px",
        business: "1000px",
        "img-business": "170px",
      },
      height: {
        nav: "60px",
        header: "200px",
        footer: "200px",
        "img-business": "170px",
      },
      lineHeight: {
        nav: "60px",
      },
      maxWidth: {
        business: "1000px",
        main: "1350px",
      },
      minWidth: {
        100: "100px",
      },
      minHeight: {
        36: "144px",
      },
      padding: {
        nav: "60px",
        footer: "200px",
      },
      colors: {
        first: "rgb(34,31,32)",
        second: "rgb(233,233,233)",
        third: "rgb(46,42,43)",
        text1: "rgb(155,154,154)",
        w: "rgb(255,255,255)",
        b: "rgb(0,0,0)",
        a: "rgb(0, 90, 255)",
        red: "rgb(234, 30, 48)",
        blue: "rgb(103, 183, 220)",
        yellow: "rgb(255,158,52)",
        link: "rgb(0,90,255)",
        bred: "rgb(248,90,90)",
        byellow: "rgb(247,190,6)",
        bgreen: "rgb(80,183,4)",
      },
      screens: {
        mobile: { max: "780px" },
        tablet: { min: "780px", max: "1350px" },
      },
      borderWidth: {
        half: "0.5px",
      },
    },
  },
  plugins: [],
};
