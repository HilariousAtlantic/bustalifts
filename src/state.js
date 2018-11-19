import React, { createContext, useContext, useReducer } from "react";
import update from "immutability-helper";

const StateContext = createContext();

const initialState = {
  workouts: [
    {
      id: "23ewqw1",
      date: "Monday, November 19",
      weight: 176,
      exercises: [
        {
          id: "sdfdfd",
          name: "Bench Press",
          summary: "3×5 135lb",
          sets: ["6sdfds87fds8", "7dsf78dsfds8", "7sd7fdsf7sd6"]
        },
        {
          id: "sdfdsf",
          name: "Chinups",
          summary: "3×5 BW",
          sets: ["324jkkj32khj", "3k324jh3jk23", "3j23kj23jlk2"]
        },
        {
          id: "asdffd",
          name: "Squat",
          summary: "3×5 185lb",
          sets: ["324hj2323j43", "324jk3j423lk", "234kj2kl343k"]
        }
      ]
    },
    {
      id: "3432jhkh3",
      date: "Wednesday, November 21",
      weight: 180,
      exercises: [
        {
          id: "sdfdfd",
          name: "Overhead Press",
          summary: "3×5 85lb",
          sets: [
            { id: "6sdfds87fds8", reps: 5, weight: 85, progress: null },
            { id: "7dsf78dsfds8", reps: 5, weight: 85, progress: null },
            { id: "7sd7fdsf7sd6", reps: 5, weight: 85, progress: null }
          ]
        },
        {
          id: "sdfdsf",
          name: "Barebell Rows",
          summary: "3×5 155lb",
          sets: [
            { id: "6sdfds87fds8", reps: 5, weight: 155, progress: null },
            { id: "7dsf78dsfds8", reps: 5, weight: 155, progress: null },
            { id: "7sd7fdsf7sd6", reps: 5, weight: 155, progress: null }
          ]
        },
        {
          id: "asdffd",
          name: "Deadlift",
          summary: "1×5 205lb",
          sets: [
            { id: "6sdfds87fds8", reps: 5, weight: 205, progress: null },
            { id: "7dsf78dsfds8", reps: 5, weight: 205, progress: null },
            { id: "7sd7fdsf7sd6", reps: 5, weight: 205, progress: null }
          ]
        }
      ]
    },
    {
      id: "234lkj34",
      date: "Friday, November 23",
      weight: 152,
      exercises: [
        {
          id: "sdfdfd",
          name: "Bench Press",
          summary: "3×5 135lb",
          sets: [
            { id: "6sdfds87fds8", reps: 5, weight: 135, progress: null },
            { id: "7dsf78dsfds8", reps: 5, weight: 135, progress: null },
            { id: "7sd7fdsf7sd6", reps: 5, weight: 135, progress: null }
          ]
        },
        {
          id: "sdfdsf",
          name: "Chinups",
          summary: "3×5 BW",
          sets: [
            { id: "6sdfds87fds8", reps: 5, weight: null, progress: null },
            { id: "7dsf78dsfds8", reps: 5, weight: null, progress: null },
            { id: "7sd7fdsf7sd6", reps: 5, weight: null, progress: null }
          ]
        },
        {
          id: "asdffd",
          name: "Squat",
          summary: "3×5 185lb",
          sets: [
            { id: "6sdfds87fds8", reps: 5, weight: 185, progress: null },
            { id: "7dsf78dsfds8", reps: 5, weight: 185, progress: null },
            { id: "7sd7fdsf7sd6", reps: 5, weight: 185, progress: null }
          ]
        }
      ]
    }
  ],
  setsById: {
    "6sdfds87fds8": {
      id: "6sdfds87fds8",
      reps: 5,
      weight: 135,
      progress: null
    },
    "7dsf78dsfds8": {
      id: "7dsf78dsfds8",
      reps: 5,
      weight: 135,
      progress: null
    },
    "7sd7fdsf7sd6": {
      id: "7sd7fdsf7sd6",
      reps: 5,
      weight: 135,
      progress: null
    },
    "324jkkj32khj": {
      id: "324jkkj32khj",
      reps: 5,
      weight: null,
      progress: null
    },
    "3k324jh3jk23": {
      id: "jk324jh3jk23",
      reps: 5,
      weight: null,
      progress: null
    },
    "3j23kj23jlk2": {
      id: "3j23kj23jlk2",
      reps: 5,
      weight: null,
      progress: null
    },
    "324hj2323j43": {
      id: "324hj2323j43",
      reps: 5,
      weight: 185,
      progress: null
    },
    "324jk3j423lk": {
      id: "324jk3j423lk",
      reps: 5,
      weight: 185,
      progress: null
    },
    "234kj2kl343k": { id: "234kj2kl343k", reps: 5, weight: 185, progress: null }
  }
};

export function useGlobalState() {
  return useContext(StateContext);
}

export function StateProvider({ children }) {
  const [state, dispatch] = useReducer(reducer, initialState);
  const selectors = getSelectors(state);
  return (
    <StateContext.Provider value={{ state, selectors, dispatch }}>
      {children}
    </StateContext.Provider>
  );
}

function getSelectors(state) {
  return {
    workouts: getWorkoutsSelector(state)
  };
}

function getWorkoutsSelector(state) {
  return state.workouts.map(workout => {
    return {
      ...workout,
      exercises: workout.exercises.map(exercise => {
        return {
          ...exercise,
          sets: exercise.sets.map(setId => state.setsById[setId])
        };
      })
    };
  });
}

export function reducer(state, action) {
  const reducer = ACTION_TYPE_TO_REDUCER[action.type];
  return reducer ? reducer(state, action) : state;
}

const ACTION_TYPE_TO_REDUCER = {
  UPDATE_SET_PROGRESS: updateSetProgress
};

function updateSetProgress(state, action) {
  return update(state, {
    setsById: {
      [action.id]: { progress: { $set: action.progress } }
    }
  });
}
