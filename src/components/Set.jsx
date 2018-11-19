import React from "react";
import styled from "styled-components";
import { useGlobalState } from "../state";

export default function StatefulSet({ id, ...set }) {
  const { dispatch } = useGlobalState();
  function handleProgressChange(progress) {
    dispatch({
      type: "UPDATE_SET_PROGRESS",
      id,
      progress
    });
  }
  return <Set {...set} onProgressChange={handleProgressChange} />;
}

export function Set({ reps, progress, onProgressChange }) {
  return progress ? (
    <Style.Progress onClick={() => onProgressChange(progress - 1 || null)}>
      {progress}
    </Style.Progress>
  ) : (
    <Style.Set onClick={() => onProgressChange(reps)}>{reps}</Style.Set>
  );
}

const Style = {
  Set: styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 50%;
    background: #f3f3f3;
    width: 48px;
    height: 48px;
    color: #999;
    font-weight: bold;
    font-size: 18px;
  `,

  Progress: styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 50%;
    background: #d22e2e;
    width: 48px;
    height: 48px;
    color: #ffffff;
    font-weight: bold;
    font-size: 18px;
  `
};
