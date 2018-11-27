import React from "react";
import styled from "styled-components";
import { NavLink } from "react-router-dom";
import { useStore } from "state/store";

export default function StatefulWorkoutList({ match }) {
  const { selectors } = useStore();
  return <WorkoutList workouts={selectors.workouts} baseUrl={match.url} />;
}

export function WorkoutList({ workouts, baseUrl }) {
  return (
    <Styled.WorkoutList>
      <Styled.Header>Workouts</Styled.Header>
      {workouts.map(workout => (
        <Workout
          key={workout.id}
          url={`${baseUrl}/${workout.id}`}
          {...workout}
        />
      ))}
    </Styled.WorkoutList>
  );
}

function Workout({ date, exercises, id, url }) {
  return (
    <Styled.Workout>
      <Styled.WorkoutLink to={url} />
      <Styled.WorkoutDate>{date}</Styled.WorkoutDate>
      {exercises.map(exercise => (
        <Styled.Exercise key={exercise.id}>
          <Styled.ExerciseName>{exercise.name}</Styled.ExerciseName>
          {exercise.summary}
        </Styled.Exercise>
      ))}
    </Styled.Workout>
  );
}

const Styled = {
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
    width: 160px;
    font-weight: bold;
  `
};
