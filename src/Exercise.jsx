import React from "react";
import styled from "styled-components";

export default function Exercise({ name, sets, reps, weight }) {
  console.log("busta");
  return (
    <Style.Exercise>
      <Style.Info>
        <Style.Name>{name}</Style.Name>
        <Style.Stats>{`${sets}x${reps} ${
          weight ? weight + "lb" : "BW"
        }`}</Style.Stats>
      </Style.Info>
      <Style.Sets>
        {Array.from({ length: sets }).map(set => (
          <Style.Set className="exercise__set" />
        ))}
      </Style.Sets>
    </Style.Exercise>
  );
}

const Style = {
  Exercise: styled.div`
    display: flex;
    flex-direction: column;
    padding: 16px;
    font-size: 18px;
    background: #ffffff;
    box-shadow: 2px 2px 16px rgba(0, 0, 0, 0.15);
    margin-top: 16px;
  `,
  Info: styled.div`
    display: flex;
    justify-content: space-between;
  `,
  Name: styled.div`
    text-transform: capitalize;
  `,
  Stats: styled.div`
    display: flex;
    flex-direction: column;
    padding: 0 2px 2px;
    border-bottom: solid 2px lightgray;
  `,
  Sets: styled.div`
    display: flex;
    justify-content: space-between;
    background: white;
    padding-top: 16px;
  `,
  Set: styled.div`
    border-radius: 50%;
    background: #f3f3f3;
    width: 48px;
    height: 48px;
  `
};
