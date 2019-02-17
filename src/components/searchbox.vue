<template>
  <div class="container pt-5">
    <form>
      <div class="form-group">
        <label for="searchInput">Search Suggestion</label>
        <input type="text" class="form-control" id="searchInput" placeholder>
        <div class="list-group">
          <a
            href="#"
            class="list-group-item list-group-item-action"
            v-for="user in users"
            :key="user.id"
          >{{user.name}}</a>
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
      users: []
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
  }
};
</script>

<style scoped>
</style>
