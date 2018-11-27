import React from "react";
import { BrowserRouter, Switch, Route, Redirect } from "react-router-dom";
import { StateProvider } from "state";
import Navbar from "components/Navbar";
import WorkoutList from "components/WorkoutList";
import Workout from "components/Workout";

export default function App() {
  return (
    <StateProvider>
      <BrowserRouter>
        <>
          <Navbar />
          <Switch>
            <Route exact path="/workouts" component={WorkoutList} />
            <Route exact path="/workouts/:id" component={Workout} />
            <Redirect to="/workouts" />
          </Switch>
        </>
      </BrowserRouter>
    </StateProvider>
  );
}
