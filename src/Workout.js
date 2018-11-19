import React from "react";
import styled from "styled-components";
import Exercise from "./Exercise";

import { useGlobalState } from "./state";

export default function StatefulWorkout({ id, date, exercises, match }) {
  const { state } = useGlobalState();
  const workout = state.workouts.find(w => w.id === match.params.id);
  return <Workout {...workout} />;
}

export function Workout({ id, date, weight, exercises }) {
  return (
    <Style.Workout>
      <Style.Header>{date}</Style.Header>
      {exercises.map(exercise => (
        <Exercise {...exercise} key={exercise.id} />
      ))}
      <Style.BodyWeight>
        <Style.Label>Body Weight</Style.Label>
        <Style.Weight>{`${weight}lb`}</Style.Weight>
      </Style.BodyWeight>
    </Style.Workout>
  );
}

const Style = {
  Workout: styled.div`
    padding: 16px;
  `,
  Header: styled.h1`
    font-size: 24px;
    margin: 8px;
  `,
  BodyWeight: styled.div`
    display: flex;
    justify-content: space-between;
    font-size: 18px;
    padding: 16px;
    margin-top: 16px;
    box-shadow: 2px 2px 16px rgba(0, 0, 0, 0.15);
  `,
  Label: styled.div``,
  Weight: styled.div`
    padding: 0 2px 2px;
    border-bottom: solid 2px lightgray;
  `
};
