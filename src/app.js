import $ from 'jquery';
import Vue from 'vue';
require('./style/style.scss');

window.$ = window.jQuery = $;


$(function(){
  Vue.component('card', {
    props: ['image', 'title', 'description'],
    template: `
      <dl>
        <dt>{{ title }}</dt>
        <dd><img :src="image" alt=""></dd>
        <dd>{{ description }}</dd>
      </dl>
    `
  });
  new Vue({
    el: '#app-component'
  });
});

$(function(){
  new Vue({
    el: '#app',
    data: {
      message: 'Hello Vue!'
    }
  })
});

$(function(){
  new Vue({
    el: '#app-btn',
    data() {
      return {
        counter: 0
      };
    },
    methods: {
      add() {
        if (this.counter >= 0) {
          this.counter ++;
        } else {
          return;
        }
      },
      minus() {
        if (this.counter > 0) {
          this.counter --;
        } else {
          return;
        }
      }
    }
  })
})

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
            images: 'https://via.placeholder.com/150'
          },
          {
            id: 2,
            title: 'img-2',
            images: 'https://via.placeholder.com/150'
          },
          {
            id: 3,
            title: 'img-3',
            images: 'https://via.placeholder.com/150'
          }
        ]
      }
    }
  })
});
