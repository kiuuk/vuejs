import $ from "jquery";
import Vue from "vue";
import searchBox from "./components/searchbox";

require("./style/style.scss");

window.$ = window.jQuery = $;

new Vue({
  el: "#app",
  components: {
    "search-box": searchBox
  },
  data: {}
});
