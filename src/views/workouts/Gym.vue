<template>
  <Workouts :days="days"/>
</template>

<script lang="ts">
import Vue from "vue"
import Workouts from "@/components/Workouts.vue"

export default Vue.extend({
  name: "Gym",
  components: { Workouts },
  data: () => ({
    days: [{
      name: "1. Push (Brust, Schulter, Trizeps)",
      icon: "mdi-numeric-1",
      workouts: [{
        name: "Flat Bench Press",
        sets: 4,
        reps: "Max, 12, 10, 8",
      }, {
        name: "Incline Dumbbell Press",
        sets: 3,
        reps: "10, 12, Max",
      }, {
        name: "Cable fly",
        sets: 3,
        reps: "12, 10, 8",
      }, {
        name: "Military Press",
        sets: 3,
        reps: "10, 12, Max"
      }, {
        name: "Side Lateral Raise",
        sets: 3,
        reps: "12, 10, 8"
      }, {
        name: "Skull Crushers",
        sets: 3,
        reps: "9–12",
      }, {
        name: "Triceps Pushdown – V-Bar Attachment",
        sets: 3,
        reps: "9–12",
      }, {
        name: "Butterfly",
        sets: 3,
        reps: "10-12",
      }]
    }, {
      name: "2. Pull (Rücken, Bizeps)",
      workouts: [{
        name: "Pull Up",
        sets: 3,
        reps: "Max",
      }, {
        name: "Front Lat Pulldown",
        sets: 4,
        reps: "Max, 12, 10, 8",
      }, {
        name: "Bent Over Barbell Rows",
        sets: 4,
        reps: "12, 10, 8, 6",
      }, {
        name: "Seated Cable Rows",
        sets: 4,
        reps: "Max, 12, 10, 8"
      }, {
        name: "Face Pull",
        sets: 3,
        reps: "8–12",
      }, {
        name: "Barbell Curl (EZ-bar)",
        sets: 3,
        reps: "Max, 10, 8",
      }, {
        name: "Concentration Curls",
        sets: 2,
        reps: "10",
      },
        {
          name: "Palms-Up Barbell Wrist Curl",
          sets: 3,
          reps: "Max",
        },
        {
          type: "Cycle",
          name: "HIIT",
          sets: 1,
          reps: 4,
          cycles: [{
            cycles: 4,
            workouts: ["Max Plank", "10 Squats", "10 Lunges", "10 Push Ups", "10 Leg Raise", "Max Mountain Climbers", "10 Pike Push Ups"]
          }]
        }]
    }, {
      name: "3. Legs (Beine, Cardio, Bauch)",
      workouts: [{
        name: "Squat",
        sets: 4,
        reps: "15, 12, 10, 8",
      }, {
        name: "Leg Press",
        sets: 3,
        reps: "12, 10, 8",
      }, {
        name: "Lying Leg Curls",
        sets: 3,
        reps: "10, 8, 6",
      }, {
        name: "Leg Extension",
        sets: 3,
        reps: "12, 10, 8"
      }, {
        name: "Seated Calf Raise",
        sets: 3,
        reps: "8-15",
      }, {
        name: "Smith Machine Calf Raise",
        sets: 3,
        reps: "8-15"
      }, {
        name: "Crunches",
        sets: 4,
        reps: "Max"
      }, {
        name: "Cardio",
        sets: 1,
        reps: "10 mins before/after workout"
      }]
    }, {
      name: "4. Push (Brust, Schulter, Trizeps)",
      workouts: [{
        name: "Flat Bench Press",
        sets: 4,
        reps: "Max, 12, 10, 8"
      }, {
        name: "Incline Barbell Bench Press",
        sets: 3,
        reps: "12, 10, 8"
      }, {
        name: "Decline Barbell Bench Press",
        sets: 3,
        reps: "12, 10, 8"
      }, {
        name: "Standing Dumbbell Triceps Extension",
        sets: 3,
        reps: "12, 12, 10"
      }, {
        name: "Triceps Kickback",
        sets: 3,
        reps: "12, 12, 10"
      }, {
        name: "Arnold Press",
        sets: 4,
        reps: "Max, 12, 12, 10"
      }, {
        name: "Side Lateral Raise",
        sets: 4,
        reps: "12, 12, 10, 8"
      }, {
        name: "Shrugs",
        sets: 3,
        reps: "8–10"
      }, {
        type: "Cycle",
        reps: 4,
        name: "HIIT",
        sets: 1,
        cycles: [{
          cycles: 4,
          workouts: ["10 Close Hand Chin Ups", "10 Pull Ups", "10 Dips", "10-20 Push Ups", "10 Leg Raises", "10 Squats", "10 Pull Ups"]
        }]
      }]
    }, {
      name: "5. Pull (Rücken, Bizeps)",
      workouts: [{
        name: "Deadlift",
        sets: 3,
        reps: "10, 8, 6"
      }, {
        name: "Front Lat Pulldown",
        sets: 4,
        reps: "Max, 12, 10, 8"
      }, {
        name: "Seated Cable Rows",
        sets: 4,
        reps: "Max, 12, 10, 8"
      }, {
        name: "Single Dumbbell Row",
        sets: 3,
        reps: "12, 12, 10"
      }, {
        name: "Barbell Curl (EZ-bar)",
        sets: 3,
        reps: "12, 12, 10"
      }, {
        name: "Preacher Curl",
        sets: 3,
        reps: "12, 10, 10"
      }, {
        name: "Cable Curl",
        sets: 3,
        reps: "12"
      }, {
        type: "Cycle",
        reps: 4,
        name: "HIIT",
        sets: 1,
        cycles: [{
          cycles: 4,
          workouts: ["20 Wide Push Ups", "20 Mountain Climbers", "60 Second Wall Sit", "15 Clap Push Ups", "30 Seconds Superman Hold", "30 Squats", "60 Second Plank"]
        }]
      }]
    }, {
      name: "6. Leichtes Cardio / HIIT",
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
      },
        {
          type: "Cycle",
          sets: 3,
          reps: 4,
          name: "HIIT (High Intensive Interval Training)",
          cycles: [{
            cycles: 4,
            workouts: ["15s Sprint", "45s Gehen"],
            color: "cyan accent-4"
          }, {
            cycles: 1,
            workouts: ["30s Sprint", "1:30m gehen + erholen"],
            color: "deep-purple darken-3"
          }, {
            cycles: 4,
            workouts: ["15s Sprint", "45s Gehen"],
            color: "cyan accent-4"
          }, {
            cycles: 1,
            workouts: ["30s Sprint", "1:30m gehen + erholen"],
            color: "deep-purple darken-3"
          }]
        }]
    }]
  })
})
</script>
<style>
tbody:hover {
  cursor: pointer;
}
</style>
