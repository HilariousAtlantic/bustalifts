import React from "react";
import { BrowserRouter, Switch, Route, Redirect } from "react-router-dom";
import { StateProvider } from "../state";
import Navbar from "./Navbar";
import WorkoutList from "./WorkoutList";
import Workout from "./Workout";

export default function App() {
  return (
    <StateProvider>
      <BrowserRouter>
        <div>
          <Navbar />
          <Switch>
            <Route exact path="/workouts" component={WorkoutList} />
            <Route exact path="/workouts/:id" component={Workout} />
            <Redirect to="/workouts" />
          </Switch>
        </div>
      </BrowserRouter>
    </StateProvider>
  );
}
