import React, { createContext, useContext, useReducer } from "react";

const StateContext = createContext();

const initialState = {
  workouts: [
    {
      id: "23ewqw1",
      date: "Monday, November 19",
      weight: 176,
      exercises: [
        { id: "sdfdfd", name: "Bench Press", sets: 3, reps: 5, weight: 135 },
        { id: "sdfdsf", name: "Chinups", sets: 3, reps: 5, weight: null },
        { id: "asdffd", name: "Squat", sets: 3, reps: 5, weight: 185 }
      ]
    },
    {
      id: "3432jhkh3",
      date: "Wednesday, November 21",
      weight: 180,
      exercises: [
        { id: "sdfdfd", name: "Overhead Press", sets: 3, reps: 5, weight: 135 },
        { id: "sdfdsf", name: "Barbell Rows", sets: 3, reps: 5, weight: null },
        { id: "asdffd", name: "Deadlift", sets: 1, reps: 5, weight: 185 }
      ]
    },
    {
      id: "234lkj34",
      date: "Friday, November 23",
      weight: 152,
      exercises: [
        { id: "sdfdfd", name: "Bench Press", sets: 3, reps: 5, weight: 135 },
        { id: "sdfdsf", name: "Chinups", sets: 3, reps: 5, weight: null },
        { id: "asdffd", name: "Squat", sets: 3, reps: 5, weight: 185 }
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
