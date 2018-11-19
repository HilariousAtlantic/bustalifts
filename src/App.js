import React, { createContext, useReducer } from "react";
import { BrowserRouter, Switch, Route, Redirect } from "react-router-dom";
import reducer from "./reducer";
import "./App.css";

const StateContext = createContext();

export default function App() {
  const [state, dispatch] = useReducer(reducer, {});
  return (
    <div className="App">
      <StateContext.Provider value={{ state, dispatch }}>
        <BrowserRouter>
          <Switch>
            <Route exact path="/workouts" component={WorkoutList} />
            <Route exact path="/workouts/:id" component={Workout} />
            <Redirect to="/workouts" />
          </Switch>
        </BrowserRouter>
      </StateContext.Provider>
    </div>
  );
}

function WorkoutList() {
  return <div />;
}

function Workout() {
  return <div />;
}
