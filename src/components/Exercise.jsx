import React from "react";
import styled from "styled-components";
import { times } from "lodash";

export default function Exercise({ name, summary, sets }) {
  return (
    <Style.Exercise>
      <Style.Info>
        <Style.Name>{name}</Style.Name>
        <Style.Summary>{summary}</Style.Summary>
      </Style.Info>
      <Style.SetList>
        {sets.map(set =>
          set.progress ? (
            <Style.Progress>{set.progress}</Style.Progress>
          ) : (
            <Style.Set>{set.reps}</Style.Set>
          )
        )}
        {times(5 - sets.length).map(set => (
          <Style.Set>&#10005;</Style.Set>
        ))}
      </Style.SetList>
    </Style.Exercise>
  );
}

const Style = {
  Exercise: styled.div`
    display: flex;
    flex-direction: column;
    padding: 16px;
    background: #ffffff;
    box-shadow: 2px 2px 16px rgba(0, 0, 0, 0.15);
    margin-top: 16px;
  `,
  Info: styled.div`
    display: flex;
    justify-content: space-between;
  `,
  Name: styled.div`
    font-weight: bold;
  `,
  Summary: styled.div`
    display: flex;
    flex-direction: column;
    padding: 0 2px 2px;
    border-bottom: solid 2px lightgray;
  `,
  SetList: styled.div`
    display: flex;
    justify-content: space-between;
    background: white;
    padding-top: 16px;
  `,
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
  `
};
