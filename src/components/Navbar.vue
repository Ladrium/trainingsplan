<template>
  <div>
    <v-navigation-drawer
      :class="color"
      class="accent-4 hidden-sm-and-down"
      permanent
      fixed
    >
      <v-list>
        <v-list-item>
          <v-list-item-title class="text-h6">
            Trainings Plan
          </v-list-item-title>
        </v-list-item>
        <v-list-item
          v-for="item in items"
          :key="item.title"
          link
          @click="color = item.color"
          route :to="item.route"
        >
          <v-list-item-icon>
            <v-icon>{{ item.icon }}</v-icon>
          </v-list-item-icon>

          <v-list-item-content>
            <v-list-item-title>{{ item.title }}</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>
    <v-bottom-navigation
      v-model="value"
      :background-color="color"
      dark
      shift
      fixed
      class="hidden-md-and-up accent-4"
    >
      <v-btn v-for="item in items" :key="item.title" style="background: transparent; height: 100%; width: 20%;" @click="color = item.color" route :to="item.route">
        <span>{{ item.title }}</span>
        <v-icon>{{ item.icon }}</v-icon>
      </v-btn>
    </v-bottom-navigation>
  </div>
</template>

<script lang="ts">
import Vue from "vue"

const routes = { lotty: "indigo", gym: "cyan", home: "teal"}

export default Vue.extend({
  name: "Navbar",
  data: () => ({
    items: [{
      title: "Lotty",
      icon: "mdi-face-woman-shimmer-outline",
      route: "/workouts/lotty"
    }, {
      title: "Home",
      icon: "mdi-home",
      route: "/workouts/home"
    }, {
      title: "Gym",
      icon: "mdi-weight-lifter",
      route: "/workouts/gym"
    }]
  }),
  computed: {
    color() {
      const route = this.$route.path.split("/");
      // @ts-ignore
      return routes[route[route.length - 1]];
    }
  }
})
</script>
<style scoped>
</style>
