<template>
  <v-container>
    <v-overlay :value="overlay">
      <v-btn fixed top right @click="overlay = false">Exit
        <v-icon>mdi-exit-to-app</v-icon>
      </v-btn>
      <v-card
        class="mx-auto green accent-4"
        max-width="400"
        opacity=".9"
      >
        <v-img
          class="white--text align-end"
          height="200px"
          :src="current.img"
        >
          <v-card-title></v-card-title>
        </v-img>
        <v-card-text>
          <div>Sets: {{current.sets}}</div>
          <div>Reps: {{current.reps}}</div>
        </v-card-text>
      </v-card>
    </v-overlay>
    <v-list dark width="100%" elevation="5">
      <v-list-group
        v-for="(day, j) in days"
        :key="day.name"
        v-model="day.active"
        no-action
      >
        <template v-slot:activator>
          <v-list-item-content>
            <v-list-item-title v-text="day.name"></v-list-item-title>
          </v-list-item-content>
        </template>

        <v-list-item
          v-for="(workout, i) in day.workouts"
          :key="workout.title"
          link
          @click="overlay = true; current = { name: workout.name, sets: workout.sets, reps: workout.reps, img: require(`@/assets/${i}-${j}.png`)}"
        >
          <v-list-item-content>
            <v-list-item-title v-text="workout.name"></v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list-group>
    </v-list>
  </v-container>
</template>

<script lang="ts">
import Vue from "vue"

const noimg = true;

export default Vue.extend({
  name: "Home",
  data: () => ({
    overlay: false,
    current: {
      name: "",
      sets: 0,
      reps: "",
      img: ""
    },
    days: [{
      name: "1. Brust + Trizeps",
      icon: "mdi-numeric-1",
      workouts: [{
        name: "Flat Bench Press",
        sets: 4,
        reps: "8–10"
      }, {
        name: "Incline Dumbbell Press",
        sets: 4,
        reps: "8–10"
      }, {
        name: "Triceps Pushdown – V-Bar Attachment",
        sets: 3,
        reps: "9–12"
      }, {
        name: "Decline Dumbbell Flyes",
        sets: "3",
        reps: "8–12"
      }, {
        name: "Skull Crushers",
        sets: 3,
        reps: "9–12"
      }, {
        name: "Decline Bench Press",
        sets: 3,
        reps: "8–10 reps each"
      }, {
        name: "Butterfly",
        sets: 3,
        reps: "10-12"
      }]
    }, {
      name: "2. Rücken + Bizeps",
      workouts: [{
        name: "Seated Cable Rows",
        sets: 2,
        reps: "8–10"
      }, {
        name: "Front Lat Pulldown",
        sets: 2,
        reps: "8–10"
      }, {
        name: "Bent Over Barbell Rows",
        sets: 2,
        reps: "8–10"
      }, {
        name: "Hammer Curls",
        sets: 3,
        reps: " 8–12"
      }, {
        name: "Deadlift",
        sets: 2,
        reps: "8–10"
      }, {
        name: "Barbell Curl (EZ-bar)",
        sets: 3,
        reps: "8–10"
      }, {
        name: "Straight-Arm Pulldown",
        sets: 2,
        reps: "8–10"
      }, {
        name: "Concentration Curls",
        sets: 3,
        reps: "8–12"
      }]
    }, {
      name: "3. Core + Unterarme + Waden + Cardio",
      workouts: [{
        name: "Crunches",
        sets: 3,
        reps: "10-12",
      }, {
        name: "Hanging Leg Raise",
        sets: 3,
        reps: "10-12"
      }, {
        name: "Russian Twist",
        sets: 1,
        reps: "12-15"
      }, {
        name: "Bycicle Crunches",
        sets: 20,
        reps: "Max"
      }, {
        name: "Plank",
        sets: 3,
        reps: "Max Hold"
      }, {
        name: "Palms-Up Barbell Wrist Curl",
        sets: 3,
        reps: "Max"
      }, {
        name: "Seated Calf Raise",
        sets: 3,
        reps: "8-15"
      }, {
        name: "Palm Down Barbell Wrist Curls",
        sets: 3,
        reps: "Max",
      }, {
        name: "Smith Machine Calf Raise",
        sets: 3,
        reps: "8-15"
      }, {
        name: "Cardio",
        sets: 1,
        reps: "10 mins before/after workout"
      }]
    }, {
      name: "4. Schultern + Trizeps",
      workouts: [{
        name: "Seated Dumbbell Press",
        sets: 4,
        reps: "8–10"
      }, {
        name: "Incline Shoulder Press",
        sets: 4,
        reps: "10-12"
      }, {
        name: "Dips",
        sets: 4,
        reps: "8–10"
      }, {
        name: "Side Lateral Raise",
        sets: 4,
        reps: "8–12"
      }, {
        name: "Standing Dumbbell Triceps Extension",
        sets: 4,
        reps: "8–12"
      }, {
        name: "Front Lateral Raise",
        sets: 4,
        reps: "8–12"
      }, {
        name: "Triceps Pushdown — Rope Attachment",
        sets: 4,
        reps: "8–12"
      }, {
        name: "Reverse Flyes",
        sets: 4,
        reps: "8–12"
      }, {
        name: "Shrugs",
        sets: 3,
        reps: "8–10"
      }]
    }, {
      name: "5. Beine + Bizeps",
      workouts: [{
        name: "Squats",
        sets: 4,
        reps: "6–8"
      }, {
        name: "Wide-Grip Standing Barbell Curl",
        sets: 4,
        reps: "8–12"
      }, {
        name: "Leg Press",
        sets: 3,
        reps: "8–10"
      }, {
        name: "Spider Curl",
        sets: 4,
        reps: "8–10"
      }, {
        name: "Smith Machine Calf Raise",
        sets: 4,
        reps: "8–12"
      }, {
        name: "Lying Leg Curls",
        sets: 3,
        reps: "8–12"
      }, {
        name: "Machine Bicep Curl",
        sets: 3,
        reps: "8–12"
      }, {
        name: "Leg Extensions",
        sets: 3,
        reps: "8–12"
      }]
    }, {
      name: "6. Leichtes Cardio",
      workouts: [{
        name: "Joggen",
        sets: 1,
        reps: "5-20 min",
        noimg
      }, {
        name: "Seilspringen",
        sets: 3,
        reps: "Max.",
        noimg
      }, {
        name: "Hampelmann",
        sets: 3,
        reps: "Max",
        noimg
      }, {
        name: "Bergsteiger",
        sets: 3,
        reps: "20-25",
        noimg
      }]
    }]
  })
})
</script>
