<template>
  <v-container>
    <v-overlay :value="overlay">
      <v-btn fixed top right @click="overlay = false">Exit
        <v-icon>mdi-exit-to-app</v-icon>
      </v-btn>
      <v-card
        class="mx-auto accent-4"
        :class="color"
        max-width="400"
        opacity=".9"
      >
        <v-img
          class="white--text align-end align-self-stretch"
          min="200"
          max-width="350"
          :src="current.img"
        >
          <v-card-title class="text-overline">{{ current.name }}</v-card-title>
        </v-img>
        <v-card-text>
          <div>Sets: {{ current.sets }}</div>
          <div>Reps: {{ current.reps }}</div>
        </v-card-text>
      </v-card>
    </v-overlay>
    <v-overlay :value="cOverlay">
      <v-btn fixed top right @click="cOverlay = false">Exit
        <v-icon>mdi-exit-to-app</v-icon>
      </v-btn>
      <v-card
        class="mx-auto green accent-4"
        max-width="400"
        opacity=".9"
      >
        <v-card-text>
          <div class="text-overline">{{ current.overline }}</div>
          <v-timeline align-top dense>
            <v-timeline-item v-for="cycle in current.cycles" :color="cycle.color" small :key="cycle">
              <div class="font-weight-normal">
                <strong>{{ cycle.cycles }}</strong> Cycles
                <div v-for="w in cycle.workouts">{{ w }}</div>
              </div>
            </v-timeline-item>
          </v-timeline>
          <v-card-actions>
            <v-btn color="primary">Start</v-btn>
          </v-card-actions>
        </v-card-text>
      </v-card>
    </v-overlay>
    <v-list dark width="100%" elevation="5">
      <v-list-group
        v-for="(day) in days"
        :key="day.name"
        v-model="day.active"
        no-action
      >
        <template v-slot:activator>
          <v-list-item-content>
            <v-list-item-title v-text="day.name"></v-list-item-title>
          </v-list-item-content>
        </template>
        <v-simple-table>
          <template v-slot:default>
            <thead>
            <tr>
              <th class="text-left">
                Name
              </th>
              <th class="text-left">
                Sets
              </th>
              <th>
                Reps
              </th>
            </tr>
            </thead>
            <tbody>
            <tr
              v-for="(workout) in day.workouts"
              :key="workout.name"
              @click="openOverlay(workout)"
            >
              <td>{{ workout.name }}</td>
              <td>{{ workout.sets }}</td>
              <td>{{ workout.reps }}</td>
            </tr>
            </tbody>
          </template>
        </v-simple-table>
      </v-list-group>
    </v-list>
  </v-container>
</template>

<script lang="ts">
import Vue from "vue"

const routes = { lotty: "indigo", gym: "cyan", goals: "teal"};

export default Vue.extend({
  name: "Workouts",
  props: ["days"],
  data: () => ({
    overlay: false,
    cOverlay: false,
    current: {},
  }),
  methods: {
    openOverlay(workout: any) {
      if (workout.type === "Cycle") {
        // @ts-ignore
        this.cOverlay = true;
        // @ts-ignore
        this.current = { cycles: workout.cycles, overline: workout.name };
      } else {
        // @ts-ignore
        this.overlay = true;
        // @ts-ignore
        this.current = {
          name: workout.name,
          sets: workout.sets,
          reps: workout.reps,
          img: require(`@/assets/${workout.name}.png`)
        }
      }
    }
  },
  computed: {
    color() {
      const route = this.$route.path.split("/");
      // @ts-ignore
      return routes[route[route.length - 1] || "gym"];
    }
  }
})
</script>
