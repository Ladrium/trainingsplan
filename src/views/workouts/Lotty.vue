<template>
  <v-container>
    <v-overlay :value="overlay">
      <v-btn fixed top right @click="overlay = false"
        >Exit
        <v-icon>mdi-exit-to-app</v-icon>
      </v-btn>
      <v-card class="mx-auto green accent-4" max-width="400" opacity=".9">
        <v-img class="white--text align-end" height="200px" :src="current.img">
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
                v-for="(workout, i) in day.workouts"
                :key="workout.name"
                @click="
                  overlay = true;
                  current = {
                    name: workout.name,
                    sets: workout.sets,
                    reps: workout.reps,
                    img: require(`@/assets/${j}-${i}.png`)
                  };
                "
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
import Vue from "vue";

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
    days: [
      {
        name: "1. Beine & Po",
        workouts: [
          {
            name: "Warm Up Wide Stance Bodyweight Squat",
            reps: "12-15",
            sets: " 2",
          },
          {
            name: "Wide Stance Barbell Squat",
            reps: "8-12",
            sets: " 4",
          },
          { name: "Romanian Deadlift", reps: "8-12", sets: " 4",  },
          {
            name: "Barbell Glute Bridge",
            reps: "12-15",
            sets: " 4",
          },
          { name: "Glute Kickback", reps: "12-15", sets: " 4" }
        ]
      },
      {
        name: "2. Oberkörper",
        workouts: [
          { name: "Warm Up Bench Press", reps: "12-15", sets: " 2",  },
          { name: "Bench Press", reps: "8-12", sets: " 4",  },
          { name: "(Knee) Push Ups", reps: "8-12", sets: " 4",  },
          { name: "Lat Pulldown", reps: "12-15", sets: " 4",  },
          { name: "Seated Cable Row", reps: "12-15", sets: " 4",  }
        ]
      },
      {
        name: "3. Core & LISS Cardio",
        workouts: [
          { name: "Warm Up Crunches", reps: "10", sets: " 2",  },
          {
            name: "Roman Chair Leg Raise",
            reps: "12-15",
            sets: " 4",
            
          },
          {
            name: "Roman Chair Oblique Leg Raise",
            reps: "12-15",
            sets: " 4",
            
          },
          {
            name: "LISS Cardio - Lauftband/Fahrrad",
            reps: "c.a. 30 min",
            sets: 1,
            
          }
        ]
      },
      {
        name: "4. Beine",
        workouts: [
          {
            name: "Warm Up Stiff-Legged Barbell Deadlift",
            reps: "12-20",
            sets: " 2",
            
          },
          {
            name: "Stiff-Legged Barbell Deadlift",
            reps: "12-15",
            sets: " 4",
            
          },
          {
            name: "Barbell Glute Bridge",
            reps: "12-15",
            sets: " 4",
            
          },
          { name: "Reverse Lunge", reps: "8-12", sets: " 4",  },
          { name: "Standing Calf Raise", reps: "12-15", sets: " 4",  }
        ]
      },
      {
        name: "5. Oberkörper & HIIT Cardio",
        workouts: [
          {
            name: "Warm Up standing Barbell Shoulder Press",
            reps: "12-15",
            sets: " 2",
            
          },
          {
            name: "Standing Barbell Shoulder Press",
            reps: "8-12",
            sets: " 4",
            
          },
          { name: "Side Lateral Raise", reps: "12-15", sets: " 4",  },
          {
            name: "EZ Barbell Bicep Curl",
            reps: "12-15",
            sets: " 4",
            
          },
          { name: "Tricep Dips", reps: "12-15", sets: " 4",  },
          { name: "HIIT Cardio" }
        ]
      }
    ]
  })
});
</script>
<style>
tbody:hover {
  cursor: pointer;
}
</style>
