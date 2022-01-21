<template>
  <v-app>
    <v-main>
      <router-view/>
    </v-main>
    <Nav/>
  </v-app>
</template>

<script lang="ts">
import Vue from "vue";
import Nav from "./components/Navbar.vue";

export default Vue.extend({
  name: "App",
  components: {
    Nav
  },
  data: () => ({
    //
  })
})
</script>
