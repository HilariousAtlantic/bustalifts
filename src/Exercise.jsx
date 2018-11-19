import React from "react";
import styled from "styled-components";

const Style = {
  Exercise: styled.div`
    display: flex;
    flex-direction: column;
    padding: 20px;
    background: white;
    font-size: 18px;
  `,
  Info: styled.div`
    border-bottom: gray;
  `,
  Name: styled.div`
    text-transform: capitalize;
  `,
  Sets: styled.div`
    display: flex;
    flex-direction: column;
    padding: 24px;
    background: white;
    font-size: 18px;
  `,
  Set: styled.div`
    border-radius: 50%;
    background: #f3f3f3;
    width: 48px;
    height: 48px;
  `
};

export default function Exercise({ name, sets, reps, weight }) {
  return (
    <Style.Exercise>
      <Style.Info>
        <Style.Name>{name}</Style.Name>
        <Style.Stats>{`${sets}x${reps} ${weight}lb`}</Style.Stats>
      </Style.Info>
      <Style.Sets>
        {Array.from({ length: sets }).map(set => (
          <Style.Set className="exercise__set" />
        ))}
      </Style.Sets>
    </Style.Exercise>
  );
}
