import React from "react";
import { BrowserRouter, Switch, Route, Redirect } from "react-router-dom";
import { StateProvider } from "./state";
import WorkoutList from "./WorkoutList";

export default function App() {
  return (
    <StateProvider>
      <BrowserRouter>
        <Switch>
          <Route exact path="/workouts" component={WorkoutList} />
          <Route exact path="/workouts/:id" component={Workout} />
          <Redirect to="/workouts" />
        </Switch>
      </BrowserRouter>
    </StateProvider>
  );
}

function Workout() {
  return <div />;
}
