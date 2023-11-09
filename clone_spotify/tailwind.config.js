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
        "graySpotify": "#efefef",
      },
      spacing: {
        "2px": "2px",
        "213px": "13.3125rem",
        "285px": "285px",
        "497px": "31.0625rem",
        "415px": "25.9375rem",
        "360px": "22.5rem",
        "388px": "24.25rem",
        "400px": "25rem",
        "470px": "29.375rem",
        "780px": "48.75rem",
        "740px": "46.25rem",
        "940px": "58.75rem",
      },
      maxWidth: {
        '400px': '25rem',
      },
      boxShadow: {
        "shadowSpotify": "rgb(255, 255, 255) 0px 0px 0px 0px, rgba(0, 0, 0, 0.3) 0px 0px 8px"
      }
    },
  },
  plugins: [],
}

