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
          class="white--text align-end align-self-stretch"
          min="200"
          max-width="350"
          :src="current.img"
        >
          <v-card-title></v-card-title>
        </v-img>
        <v-card-text>
          <div>Sets: {{ current.sets }}</div>
          <div>Reps: {{ current.reps }}</div>
        </v-card-text>
      </v-card>
    </v-overlay>
    <v-list dark width="100%" elevation="5">
      <v-list-group
        v-for="(day, i) in days"
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
              v-for="(workout, j) in day.workouts"
              :key="workout.name"
              @click="o(); overlay = true; current = { name: workout.name, sets: workout.sets, reps: workout.reps, img: require(`@/assets/${workout.name}.png`)}"
            >
              <td>{{ workout.name }}</td>
              <td>{{ workout.sets }}</td>
              <td>{{ workout.reps }}</td>
              {{rename(i, j, workout.name) }}
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
let arr: { i: number, j: number, name: string }[] = [];

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
        reps: "8–10",
        img: "flatb"
      }, {
        name: "Incline Dumbbell Press",
        sets: 4,
        reps: "8–10",
        img: "incdp"
      }, {
        name: "Triceps Pushdown – V-Bar Attachment",
        sets: 3,
        reps: "9–12",
        img: "tpvba"
      }, {
        name: "Cable fly",
        sets: "3",
        reps: "8–12",
        img: "cabfly"
      }, {
        name: "Skull Crushers",
        sets: 3,
        reps: "9–12",
        img: "skuc"
      }, {
        name: "Decline Bench Press",
        sets: 3,
        reps: "8–10 reps each",
        img: "decbp"
      }, {
        name: "Butterfly",
        sets: 3,
        reps: "10-12",
        img: "butfly"
      }]
    }, {
      name: "2. Rücken + Bizeps",
      workouts: [{
        name: "Seated Cable Rows",
        sets: 3,
        reps: "8–10",
        img: "seatcr"
      }, {
        name: "Front Lat Pulldown",
        sets: 3,
        reps: "8–10",
        img: "frontlp"
      }, {
        name: "Bent Over Barbell Rows",
        sets: 2,
        reps: "8–10",
        img: "bentobr"
      }, {
        name: "Hammer Curls",
        sets: 3,
        reps: " 8–12",
        img: "hamc"
      }, {
        name: "Deadlift",
        sets: 2,
        reps: "8–10",
        img: "deadl"
      }, {
        name: "Barbell Curl (EZ-bar)",
        sets: 3,
        reps: "8–10",
        img: "barcez"
      }, {
        name: "Straight-Arm Pulldown",
        sets: 2,
        reps: "8–10",
        img: "strap"
      }, {
        name: "Concentration Curls",
        sets: 3,
        reps: "8–12",
        img: "conc"
      }]
    }, {
      name: "3. Core + Unterarme + Waden + Cardio",
      workouts: [{
        name: "Crunches",
        sets: 3,
        reps: "10-12",
        img: "crunc"
      }, {
        name: "Hanging Leg Raise",
        sets: 3,
        reps: "10-12",
        img: "hanlr"
      }, {
        name: "Russian Twist",
        sets: 2,
        reps: "12-15",
        img: "rust"
      }, {
        name: "Bycicle Crunches",
        sets: 10,
        reps: "Max",
        img: "bycrunc"
      }, {
        name: "Plank",
        sets: 2,
        reps: "Max Hold",
        img: "plank"
      }, {
        name: "Palms-Up Barbell Wrist Curl",
        sets: 3,
        reps: "Max",
        img: "palubwc"
      }, {
        name: "Seated Calf Raise",
        sets: 3,
        reps: "8-15",
        img: "seacr"
      }, {
        name: "Palm Down Barbell Wrist Curls",
        sets: 3,
        reps: "Max",
        img: ""
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
      },
      {
        name: "Military Press",
        sets: 3,
        reps: "8-12"
      },
       {
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
        img: "jog"
      }, {
        name: "Seilspringen",
        sets: 3,
        reps: "Max.",
        img: "seil"
      }, {
        name: "Hampelmann",
        sets: 3,
        reps: "Max.",
        img: "heli"
      }, {
        name: "Bergsteiger",
        sets: 3,
        reps: "20-25",
        img: "bs"
      }]
    }]
  }),
  methods: {
    rename(i: number, j: number, name: string) {
      arr.push({ i, j, name });
    },
    o() {
      // @ts-ignore
      console.log(arr);
    }
  }
})
</script>
<style>
tbody:hover {
  cursor: pointer;
}
</style>
