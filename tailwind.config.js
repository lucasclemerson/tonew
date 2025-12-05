export default {
  extend: {},
  theme: {
    screens: {
      xs: '360px',   // 👈 breakpoint personalizado
      sm: '640px',
      md: '768px',
      lg: '1024px',
      xl: '1280px',
    },
  },
  content: [
    "./src/**/*.{html,js,php}",
    "./*.{html,js,php}"
  ]
}
