import React from "react";
import styled from "styled-components";
import useTimer from "hooks/useTimer";
import { useStore } from "state/store";
import { ACTION } from "constants/actions";
import { DIFFICULTY } from "constants/set";
import PlateConfig from "components/PlateConfig";

export default function Workout({ match }) {
  const { selectors, dispatch } = useStore();
  const { remaining, progress, isActive, startTimer, stopTimer } = useTimer();

  const workout = selectors.workoutsById[match.params.id];
  const exercise =
    workout && workout.exercises.find(e => !e.sets.every(s => s.complete));
  const set = exercise && exercise.sets.find(s => !s.complete);

  function handleSetComplete(difficulty) {
    startTimer(difficulty === DIFFICULTY.EASY ? 90 : 180);
    dispatch({
      type: ACTION.COMPLETE_SET,
      id: set.id,
      failed: difficulty === DIFFICULTY.FAIL
    });
  }

  return (
    <Styled.Workout>
      {exercise ? (
        <>
          <Styled.Header>{exercise.name}</Styled.Header>
          <Set {...set} onComplete={handleSetComplete} />
        </>
      ) : (
        <>
          <Styled.Header>Enter Body Weight</Styled.Header>
        </>
      )}

      <Styled.Rest show={isActive}>
        <Styled.Header>Rest</Styled.Header>
        <Styled.Spacer />
        <Timer remaining={remaining} progress={progress} />
        <Styled.Spacer />
        <Styled.Button
          disabled={remaining > 0}
          color="#1B5E20"
          onClick={stopTimer}
        >
          Ready
        </Styled.Button>
        <Styled.Button
          disabled={remaining > 0}
          color="#E65100"
          onClick={() => startTimer(30)}
        >
          30 Seconds
        </Styled.Button>
      </Styled.Rest>
    </Styled.Workout>
  );
}

function Set({ weight, reps, onComplete }) {
  return (
    <Styled.Set>
      <Styled.Weight>
        {reps} Reps × {weight ? `${weight}lb` : "BW"}
      </Styled.Weight>
      <Styled.Spacer />
      <Styled.Plates>
        <PlateConfig weight={weight} />
      </Styled.Plates>
      <Styled.Spacer />
      <Styled.Button
        color="#1B5E20"
        onClick={() => onComplete(DIFFICULTY.EASY)}
      >
        Easy
      </Styled.Button>
      <Styled.Button
        color="#E65100"
        onClick={() => onComplete(DIFFICULTY.HARD)}
      >
        Hard
      </Styled.Button>
      <Styled.Button
        color="#b71c1c"
        onClick={() => onComplete(DIFFICULTY.FAIL)}
      >
        Fail
      </Styled.Button>
    </Styled.Set>
  );
}

function Timer({ remaining, progress }) {
  const size = 240;
  const width = 8;
  const r = size / 2 - width / 2;
  const c = 2 * Math.PI * r;

  return (
    <Styled.Timer>
      <svg width={size} height={size} viewBox={`0 0 ${size} ${size}`}>
        <circle
          cx={size / 2}
          cy={size / 2}
          r={r}
          fill="none"
          stroke="#01579B"
          strokeWidth={width}
          strokeDasharray={c}
          strokeDashoffset={c * progress}
        />
        <text
          x="50%"
          y="50%"
          textAnchor="middle"
          stroke="#01579B"
          strokeWidth="2px"
          fontSize="32px"
          dy=".3em"
        >
          {Math.ceil(remaining)}
        </text>
      </svg>
    </Styled.Timer>
  );
}

const Styled = {
  Workout: styled.div`
    flex: 1;
    display: flex;
    flex-direction: column;
    padding: 16px;
    position: relative;
  `,
  Header: styled.h2`
    font-size: 32px;
    text-align: center;
    margin: 8px 0;
  `,
  Set: styled.div`
    flex: 1;
    display: flex;
    flex-direction: column;
  `,
  Weight: styled.h3`
    font-size: 24px;
    text-align: center;
    margin: 8px 0;
  `,
  Plates: styled.div`
    align-self: center;
  `,
  Spacer: styled.div`
    flex: 1;
  `,
  Button: styled.button`
    color: #ffffff;
    background: ${props => props.color || "#2a2a2a"};
    border: none;
    padding: 16px;
    font-size: 20px;
    font-weight: bold;
    margin-bottom: 16px;
    border-radius: 5px;

    :disabled {
      opacity: 0.5;
      pointer-events: none;
    }
  `,
  Rest: styled.div`
    display: flex;
    flex-direction: column;
    padding: 16px;
    position: absolute;
    background: #ffffff;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    transition: transform 200ms ease-in;
    transform: ${props => (props.show ? "none" : "translateX(-100%)")};
  `,
  Timer: styled.div`
    align-self: center;
  `,
  Remaining: styled.span`
    font-size: 32px;
    font-weight: bold;
    align-self: center;
    color: #01579b;
  `
};
