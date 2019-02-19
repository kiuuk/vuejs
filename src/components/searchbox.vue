<template>
  <div class="container pt-5">
    <form>
      <div class="form-group">
        <label for="searchInput">Search Suggestion</label>
        <input
          type="text"
          class="form-control"
          id="searchInput"
          v-model="search"
          @input="onChange"
          @keydown.down="onArrowDown"
          @keydown.up="onArrowUp"
          @keydown.enter="onEnter"
        >
        <div class="list-group" v-show="isOpen">
          <a
            href="#"
            class="list-group-item list-group-item-action"
            v-for="(result,idx) in results"
            :key="idx"
            @click="setResult(result)"
            :class="{ 'is-active': idx === arrowCounter }"
          >{{result.name}}</a>
        </div>
      </div>
    </form>
  </div>
</template>

<script>
import axios from "axios";

export default {
  data() {
    return {
      search: "",
      users: [],
      results: [],
      isOpen: false,
      arrowCounter: -1
    };
  },
  mounted() {
    axios
      .get("https://jsonplaceholder.typicode.com/users")
      .then(response => {
        this.users = response.data;
      })
      .catch(error => {
        console.log(error);
        this.errored = true;
      })
      .finally(() => (this.loading = false));
  },
  methods: {
    onChange() {
      this.isOpen = true;
      this.filterResults();
    },
    filterResults() {
      this.results = this.users.filter(
        user => user.name.toLowerCase().indexOf(this.search.toLowerCase()) > -1
      );
    },
    setResult(result) {
      this.search = result.name;
      this.isOpen = false;
    },
    onArrowDown() {
      if (this.arrowCounter < this.results.length) {
        this.arrowCounter = this.arrowCounter + 1;
      }
    },
    onArrowUp() {
      if (this.arrowCounter < this.results.length) {
        this.arrowCounter = this.arrowCounter - 1;
      }
    },
    onEnter() {
      this.search = this.results[this.arrowCounter].name;
      this.isOpen = false;
      this.arrowCounter = -1;
    }
  }
};
</script>

<style scoped>
</style>
