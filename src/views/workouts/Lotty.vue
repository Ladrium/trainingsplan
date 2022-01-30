<template>
  <Workouts :days="days"/>
</template>

<script lang="ts">
import Vue from "vue"
import Workouts from "@/components/Workouts.vue"

export default Vue.extend({
  name: "Home",
  components: { Workouts },
  data: () => ({
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
          { name: "Flat Bench Press", reps: "12-15 + 8-12", sets: "2 + 4",  },
          { name: "(Knee) Push Ups", reps: "8-12", sets: " 4",  },
          { name: "Front Lat Pulldown", reps: "12-15", sets: " 4",  },
          { name: "Seated Cable Rows", reps: "12-15", sets: " 4",  }
        ]
      },
      {
        name: "3. Core & LISS Cardio",
        workouts: [
          { name: "Crunches", reps: "10", sets: " 2",  },
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
            name: "Barbell Hip Thrust",
            reps: "12-20",
            sets: "4",

          },
          {
            name: "Lying Leg Curls",
            reps: "12-15",
            sets: "4",

          },
          {
            name: "Barbell Glute Bridge",
            reps: "12-15",
            sets: "4",

          },
          { name: "Lunge", reps: "8-12", sets: "4",  },
          { name: "Smith Machine Calf Raise", reps: "12-15", sets: "4",  }
        ]
      },
      {
        name: "5. Oberkörper & HIIT Cardio",
        workouts: [
          {
            name: "Standing Barbell Shoulder Press",
            reps: "12-15 + 8-12",
            sets: "2 + 4",

          },
          { name: "Side Lateral Raise", reps: "12-15", sets: " 4",  },
          {
            name: "Barbell Curl (EZ-bar)",
            reps: "12-15",
            sets: " 4",
            img: "barcez"
          },
          { name: "Dips", reps: "12-15", sets: " 4",  },
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
