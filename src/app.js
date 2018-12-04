import $ from 'jquery';
import Vue from 'vue';

window.$ = window.jQuery = $;

$(function(){
  new Vue({
      el: '#app',
      data: {
        message: 'Hello Vue!'
      }
    });
});
