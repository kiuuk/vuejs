import $ from 'jquery';
import Vue from 'vue';

window.$ = window.jQuery = $;

$(function(){
  new Vue({
    el: '#app',
    data: {
      message: 'Hello Vue!'
    }
  })
});

$(function(){
  new Vue(
  {
    el: '#app-list',
    data() {
      return {
        items: [
          {
            id: 1,
            title: 'img-1',
            images: 'https://dummyimage.com/120x120/efefef/999999&text=1'
          },
          {
            id: 2,
            title: 'img-2',
            images: 'https://dummyimage.com/120x120/efefef/999999&text=2'
          },
          {
            id: 3,
            title: 'img-3',
            images: 'https://dummyimage.com/120x120/efefef/999999&text=3'
          }
        ]
      }
    }
  })
});
