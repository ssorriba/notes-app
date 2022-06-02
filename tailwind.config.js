module.exports = {
  content: ["index.html", "./src/**/*.jsx"],
  theme: {
    extend: {
      gridTemplateColumns: {
        note: "1fr 3em",
      },
      gridTemplateRows: {
        note: "4em 1fr",
      },
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
      },
      backgroundColor: {
        "note-turquoise": "#B9E1DC",
        "note-redish": "#EE6F57",
      },
      colors: {
        "note-turquoise": "#B9E1DC",
        "note-brown": "#4D3732",
      },
    },
  },
  plugins: [],
};
