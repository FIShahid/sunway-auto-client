module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {},
  },
  daisyui: {
    themes: [
      {
        mytheme: {
        
"primary": "#83c643",
        
"secondary": "#9ab5f9",
        
"accent": "#c5f9a7",
        
"neutral": "#233038",
        
"base-100": "#E6E0EB",
        
"info": "#31ADD3",
        
"success": "#68E8C6",
        
"warning": "#F89635",
        
"error": "#E02966",
        },
      },
    ],
  },
  plugins: [require("daisyui")],
}