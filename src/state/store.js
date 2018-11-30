import React, { createContext, useContext, useReducer } from "react";
import reducer from "state/reducer";
import selectors from "state/selectors";

const StoreContext = createContext();

const initialState = {
  workouts: ["23ewqw1", "3432jhkh3", "234lkj34"],
  workoutsById: {
    "23ewqw1": {
      id: "23ewqw1",
      date: "Monday, November 19",
      weight: 176,
      exercises: ["2sdfdfd", "2sdfdsf", "2asdffd"]
    },
    "234lkj34": {
      id: "234lkj34",
      date: "Friday, November 23",
      weight: 152,
      exercises: ["4sdfdfd", "4sdfdsf", "4asdffd"]
    },
    "3432jhkh3": {
      id: "3432jhkh3",
      date: "Wednesday, November 21",
      weight: 180,
      exercises: ["3sdfdfd", "3sdfdsf", "3asdffd"]
    }
  },
  exercisesById: {
    "2sdfdfd": {
      id: "2sdfdfd",
      name: "Bench Press",
      summary: "3×5 135lb",
      sets: ["6sdfds87fds8", "7dsf78dsfds8", "7sd7fdsf7sd6"]
    },
    "2sdfdsf": {
      id: "2sdfdsf",
      name: "Chinups",
      summary: "3×5 BW",
      sets: ["324jkkj32khj", "3jk324jh3jk23", "3j23kj23jlk2"]
    },
    "2asdffd": {
      id: "2asdffd",
      name: "Squat",
      summary: "3×5 185lb",
      sets: ["324hj2323j43", "324jk3j423lk", "234kj2kl343k"]
    },
    "3sdfdfd": {
      id: "3sdfdfd",
      name: "Overhead Press",
      summary: "3×5 85lb",
      sets: ["9sdfds87fds8", "9dsf78dsfds8", "9sd7fdsf7sd6"]
    },
    "3sdfdsf": {
      id: "3sdfdsf",
      name: "Barebell Rows",
      summary: "3×5 155lb",
      sets: ["10dfds87fds8", "10sf78dsfds8", "10d7fdsf7sd6"]
    },
    "3asdffd": {
      id: "3asdffd",
      name: "Deadlift",
      summary: "1×5 205lb",
      sets: ["11dfds87fds8"]
    },
    "4sdfdfd": {
      id: "4sdfdfd",
      name: "Bench Press",
      summary: "3×5 135lb",
      sets: ["2sdfds87fds8", "2dsf78dsfds8", "2sd7fdsf7sd6"]
    },
    "4sdfdsf": {
      id: "4sdfdsf",
      name: "Chinups",
      summary: "3×5 BW",
      sets: ["224jkkj32khj", "2dsf78dsfds8", "2j23kj23jlk2"]
    },
    "4asdffd": {
      id: "4asdffd",
      name: "Squat",
      summary: "3×5 185lb",
      sets: ["224hj2323j43", "224jk3j423lk", "334kj2kl343k"]
    }
  },
  setsById: {
    "6sdfds87fds8": {
      id: "6sdfds87fds8",
      reps: 5,
      weight: 135,
      complete: false
    },
    "7dsf78dsfds8": {
      id: "7dsf78dsfds8",
      reps: 5,
      weight: 135,
      complete: false
    },
    "7sd7fdsf7sd6": {
      id: "7sd7fdsf7sd6",
      reps: 5,
      weight: 135,
      complete: false
    },
    "324jkkj32khj": {
      id: "324jkkj32khj",
      reps: 5,
      weight: null,
      complete: false
    },
    "3jk324jh3jk23": {
      id: "3jk324jh3jk23",
      reps: 5,
      weight: null,
      complete: false
    },
    "3j23kj23jlk2": {
      id: "3j23kj23jlk2",
      reps: 5,
      weight: null,
      complete: false
    },
    "324hj2323j43": {
      id: "324hj2323j43",
      reps: 5,
      weight: 185,
      complete: false
    },
    "324jk3j423lk": {
      id: "324jk3j423lk",
      reps: 5,
      weight: 185,
      complete: false
    },
    "234kj2kl343k": {
      id: "234kj2kl343k",
      reps: 5,
      weight: 185,
      complete: false
    },
    "9sdfds87fds8": {
      id: "9sdfds87fds8",
      reps: 5,
      weight: 85,
      complete: false
    },
    "9dsf78dsfds8": {
      id: "9dsf78dsfds8",
      reps: 5,
      weight: 85,
      complete: false
    },
    "9sd7fdsf7sd6": {
      id: "9sd7fdsf7sd6",
      reps: 5,
      weight: 85,
      complete: false
    },
    "10dfds87fds8": {
      id: "10dfds87fds8",
      reps: 5,
      weight: 155,
      complete: false
    },
    "10sf78dsfds8": {
      id: "10sf78dsfds8",
      reps: 5,
      weight: 155,
      complete: false
    },
    "10d7fdsf7sd6": {
      id: "10d7fdsf7sd6",
      reps: 5,
      weight: 155,
      complete: false
    },
    "11dfds87fds8": {
      id: "11dfds87fds8",
      reps: 5,
      weight: 205,
      complete: false
    },
    "2sdfds87fds8": {
      id: "2sdfds87fds8",
      reps: 5,
      weight: 135,
      complete: false
    },
    "2dsf78dsfds8": {
      id: "2dsf78dsfds8",
      reps: 5,
      weight: 135,
      complete: false
    },
    "2sd7fdsf7sd6": {
      id: "2sd7fdsf7sd6",
      reps: 5,
      weight: 135,
      complete: false
    },
    "224jkkj32khj": {
      id: "224jkkj32khj",
      reps: 5,
      weight: null,
      complete: false
    },
    "2k324jh3jk23": {
      id: "2k324jh3jk23",
      reps: 5,
      weight: null,
      complete: false
    },
    "2j23kj23jlk2": {
      id: "2j23kj23jlk2",
      reps: 5,
      weight: null,
      complete: false
    },
    "224hj2323j43": {
      id: "224hj2323j43",
      reps: 5,
      weight: 185,
      complete: false
    },
    "224jk3j423lk": {
      id: "224jk3j423lk",
      reps: 5,
      weight: 185,
      complete: false
    },
    "334kj2kl343k": {
      id: "334kj2kl343k",
      reps: 5,
      weight: 185,
      complete: false
    }
  }
};

export function useStore() {
  return useContext(StoreContext);
}

export function StoreProvider({ children }) {
  const [state, dispatch] = useReducer(reducer, initialState);
  const store = {
    state,
    selectors: selectors(state),
    dispatch: action => dispatch(action)
  };
  return (
    <StoreContext.Provider value={store}>{children}</StoreContext.Provider>
  );
}
