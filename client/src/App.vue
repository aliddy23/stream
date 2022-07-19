<template>
  <v-app>
    <v-app-bar app color="primary">
      <img
        src="@/assets/logo.png"
        class="mr-2"
        style="height: 50px; width: 50px"
      />
      <v-app-bar-title>Stream</v-app-bar-title>
    </v-app-bar>

    <v-main>
      <v-container style="max-width: 1185px">
        <v-list>
          <v-list-item
            v-for="item in movies"
            :key="item.url"
            @click="open(item.path)"
          >
            <v-list-item-title>{{ item.title }}</v-list-item-title>
          </v-list-item>
        </v-list>
      </v-container>
    </v-main>
  </v-app>
</template>

<script>
import axios from "axios";

export default {
  name: "App",
  data() {
    return {
      movies: [],
    };
  },
  created() {
    axios.get("/api").then((response) => {
      this.movies = response.data;
    });
  },
  methods: {
    open(path) {
      window.open(path);
    },
  },
};
</script>

<style scoped></style>