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
        "dark-jungle-green": "#041b15ff",
        xanadu: "#71816dff",
        "mikado-yellow": "#ffc53aff",
        "alice-blue": "#e7ecefff",
        "yale-blue": "#054a91ff",
        "note-turquoise": "#B9E1DC",
        "note-redish": "#EE6F57",
        "note-red": "#CB3737",
      },
      colors: {
        "dark-jungle-green": "#041b15ff",
        xanadu: "#71816dff",
        "mikado-yellow": "#ffc53aff",
        "alice-blue": "#e7ecefff",
        "yale-blue": "#054a91ff",
        "note-turquoise": "#B9E1DC",
        "note-brown": "#4D3732",
        "note-red": "#CB3737",
      },
    },
  },
  plugins: [],
};
