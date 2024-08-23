// tailwind.config.js
module.exports = {
  content: [
    "./projects/**/*.html",
    "./projects/**/*.ts",
    "./projects/**/*.css", 
  ],
  theme: {
    extend: {

            colors: {
              'custom-gray-200': '#e5e7eb',
              'custom-gray-300': '#d1d5db',
              'custom-gray-700': '#374151',
              'custom-green': '#10b981',
              'custom-blue': '#3b82f6',
       
        variants: {},
        plugins: []
      }
      
    },
  },
  plugins: [],
};
