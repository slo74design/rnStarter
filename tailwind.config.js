/** @type {import('tailwindcss').Config} */
module.exports = {
  // NOTE: Update this to include the paths to all of your component files.
  content: [
    "./app/index.tsx", 
    "./components/**/*.{js,jsx,ts,tsx}"
  ],
  presets: [require("nativewind/preset")],
  theme: {
    extend: {
      fontFamily: {
        "work-black" : ["WorkSans-Black", "sans-serif"],
        "work-bold" : ["WorkSans-Bold", "sans-serif"],
        "work-regular" : ["WorkSans-Regular", "sans-serif"],
        "work-light" : ["WorkSans-Light", "sans-serif"]
      }
    },
  },
  plugins: [],
}