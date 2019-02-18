<template>
  <div class="container pt-5">
    <form>
      <div class="form-group">
        <label for="searchInput">Search Suggestion</label>
        <input type="text" class="form-control" id="searchInput" v-model="search" @input="onChange">
        <div class="list-group" v-show="isOpen">
          <a
            href="#"
            class="list-group-item list-group-item-action"
            v-for="(result,idx) in results"
            :key="idx"
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
      isOpen: false
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
    }
  }
};
</script>

<style scoped>
</style>
