/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        "blueSpotify": "#1d75de",
        "blueSpotifyHover": "#1A69C7",
        "blackSpotify": "#191414",
      },
      spacing: {
        "497px": "31.0625rem",
        "415px": "25.9375rem",
        "388px": "24.25rem",
      },
    },
  },
  plugins: [],
}

