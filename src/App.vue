<template>
  <v-app>
    <v-main>
      <router-view style="margin-bottom: 50px;"/>
    </v-main>
    <Nav/>
    <v-snackbar bottom right :value="updateExists" color="primary">
      Update Available!
      <template v-slot:action="{ attrs }">
        <v-btn @click="refreshApp" v-bind="attrs">
          Update
        </v-btn>
      </template>
    </v-snackbar>
  </v-app>
</template>

<script lang="ts">
import Vue from "vue";
import Nav from "./components/Navbar.vue";
import UpdateMixin from "./mixins/update";

export default Vue.extend({
  name: "App",
  mixins: [UpdateMixin],
  components: {
    Nav
  }
})
</script>
