import { keyBy } from "lodash";

export default function selector(state) {
  const workouts = getWorkoutsSelector(state);
  return {
    workouts: workouts,
    workoutsById: keyBy(workouts, workout => workout.id)
  };
}

function getWorkoutsSelector(state) {
  return state.workouts.map(workoutId => {
    const workout = state.workoutsById[workoutId];
    return {
      ...workout,
      exercises: workout.exercises.map(exerciseId => {
        const exercise = state.exercisesById[exerciseId];
        return {
          ...exercise,
          sets: exercise.sets.map(setId => state.setsById[setId])
        };
      })
    };
  });
}
