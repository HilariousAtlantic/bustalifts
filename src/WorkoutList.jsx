import React from "react";
import styled from "styled-components";
import { NavLink } from "react-router-dom";
import { useGlobalState } from "./state";

export default function StatefulWorkoutList({ match }) {
  const { state } = useGlobalState();
  return <WorkoutList workouts={state.workouts} baseUrl={match.url} />;
}

export function WorkoutList({ workouts, baseUrl }) {
  return (
    <Style.WorkoutList>
      <Style.Header>Workouts</Style.Header>
      {workouts.map(workout => (
        <Workout
          key={workout.id}
          url={`${baseUrl}/${workout.id}`}
          {...workout}
        />
      ))}
    </Style.WorkoutList>
  );
}

function Workout({ date, exercises, id, url }) {
  return (
    <Style.Workout>
      <Style.WorkoutLink to={url} />
      <Style.WorkoutDate>{date}</Style.WorkoutDate>
      {exercises.map(exercise => (
        <Style.Exercise key={exercise.id}>
          <Style.ExerciseName>{exercise.name}</Style.ExerciseName>
          {exercise.sets}x{exercise.reps}{" "}
          {exercise.weight ? `${exercise.weight}lb` : "BW"}
        </Style.Exercise>
      ))}
    </Style.Workout>
  );
}

const Style = {
  WorkoutList: styled.div`
    padding: 16px;
  `,
  WorkoutLink: styled(NavLink)`
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
  `,
  Header: styled.h1`
    font-size: 24px;
    margin: 8px;
  `,
  Workout: styled.div`
    position: relative;
    display: flex;
    flex-direction: column;
    padding: 16px;
    background: #ffffff;
    box-shadow: 2px 2px 16px rgba(0, 0, 0, 0.15);
    margin-top: 16px;
  `,
  WorkoutDate: styled.span`
    font-size: 18px;
    line-height: 32px;
  `,
  Exercise: styled.div`
    display: flex;
    margin-top: 8px;
  `,
  ExerciseName: styled.span`
    width: 128px;
    font-weight: bold;
  `
};
