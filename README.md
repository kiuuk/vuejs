# vuejs
vue.js setup

npm init -y

npm install webpack webpack-cli path webpack-dev-server --save-dev
  webpack.config.js
  package.json
    "scripts": {
      "prod": "webpack --mode=production",
      "dev": "webpack --mode=development",
      "watch": "webpack-dev-server --mode=development --hot"
    },

npm install jquery
  app.js
    import $ from 'jquery';
    window.$ = window.jQuery = $;
