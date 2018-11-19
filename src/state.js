import React, { createContext, useContext, useReducer } from "react";

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
          sets: [
            { id: "6sdfds87fds8", reps: 5, weight: 135, progress: 5 },
            { id: "7dsf78dsfds8", reps: 5, weight: 135, progress: 5 },
            { id: "7sd7fdsf7sd6", reps: 5, weight: 135, progress: 5 }
          ]
        },
        {
          id: "sdfdsf",
          name: "Chinups",
          summary: "3×5 BW",
          sets: [
            { id: "6sdfds87fds8", reps: 5, weight: null, progress: 5 },
            { id: "7dsf78dsfds8", reps: 5, weight: null, progress: 5 },
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
            { id: "6sdfds87fds8", reps: 5, weight: 85, progress: 5 },
            { id: "7dsf78dsfds8", reps: 5, weight: 85, progress: 5 },
            { id: "7sd7fdsf7sd6", reps: 5, weight: 85, progress: 5 }
          ]
        },
        {
          id: "sdfdsf",
          name: "Barebell Rows",
          summary: "3×5 155lb",
          sets: [
            { id: "6sdfds87fds8", reps: 5, weight: 155, progress: 5 },
            { id: "7dsf78dsfds8", reps: 5, weight: 155, progress: 5 },
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
            { id: "6sdfds87fds8", reps: 5, weight: 135, progress: 5 },
            { id: "7dsf78dsfds8", reps: 5, weight: 135, progress: 5 },
            { id: "7sd7fdsf7sd6", reps: 5, weight: 135, progress: 5 }
          ]
        },
        {
          id: "sdfdsf",
          name: "Chinups",
          summary: "3×5 BW",
          sets: [
            { id: "6sdfds87fds8", reps: 5, weight: null, progress: 5 },
            { id: "7dsf78dsfds8", reps: 5, weight: null, progress: 5 },
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
  ]
};

export function useGlobalState() {
  return useContext(StateContext);
}

export function StateProvider({ children }) {
  const [state, dispatch] = useReducer(reducer, initialState);
  return (
    <StateContext.Provider value={{ state, dispatch }}>
      {children}
    </StateContext.Provider>
  );
}

export function reducer(state, action) {
  const reducer = ACTION_TYPE_TO_REDUCER[action.type];
  return reducer ? reducer(state, action) : state;
}

const ACTION_TYPE_TO_REDUCER = {};
