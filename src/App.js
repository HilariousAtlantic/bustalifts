import React from "react";
import { BrowserRouter, Switch, Route, Redirect } from "react-router-dom";
import { StateProvider } from "./state";
import "./App.css";

export default function App() {
  return (
    <div className="App">
      <StateProvider>
        <BrowserRouter>
          <Switch>
            <Route exact path="/workouts" component={WorkoutList} />
            <Route exact path="/workouts/:id" component={Workout} />
            <Redirect to="/workouts" />
          </Switch>
        </BrowserRouter>
      </StateProvider>
    </div>
  );
}

function WorkoutList() {
  return <div />;
}

function Workout() {
  return <div />;
}
