module.exports = {
  content: [
    './storage/framework/views/*.php',
    './resources/**/*.blade.php',
    './resources/**/*.js',
    './resources/**/*.vue',
    "./vendor/laravel/framework/src/Illuminate/Pagination/resources/views/*.blade.php",
    './public/js/controller/*.js',
    './public/js/model/*.js',
    './public/js/init.js',
],
  theme: {
    extend: {},
  },
  plugins: [
    require("daisyui"),
  ],
}
