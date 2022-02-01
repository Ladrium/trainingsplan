<template>
  <v-container>
        <v-simple-table dark>
          <template v-slot:default>
            <thead>
            <tr>
              <th class="text-left">
                Name
              </th>
              <th class="text-left">
                Reached
              </th>
            </tr>
            </thead>
            <tbody>
            <tr
              v-for="(goal) in goals"
              :key="goal"
            >
              <td>{{ goal }}</td>
              <td><v-icon>{{ $store.state.goals.includes(goal) ? "mdi-check-diagram" : "mdi-alpha-x"}}</v-icon></td>
            </tr>
            </tbody>
          </template>
        </v-simple-table>
  </v-container>
</template>

<script lang="ts">
import Vue from "vue"

export default Vue.extend({
  name: "Calisthenic Goals",
  data: () => ({
    goals: ["L-Sit", "Forearm Stand", "Frog Stand", "Superman Push Ups", "Elbow Lever", "Skin The Cat", "Handstand", "Muscle Up"]
  })
})
</script>
