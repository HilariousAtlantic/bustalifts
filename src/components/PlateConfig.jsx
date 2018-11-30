import React from "react";
import styled from "styled-components";

export default function PlateConfig({ weight }) {
  return (
    <Styled.PlateConfig>
      <Styled.Bar />
      {getPlateCounts(weight).map(plate => (
        <Styled.Plate {...dimensionsByWeight[plate]} />
      ))}
      <Styled.Bar />
    </Styled.PlateConfig>
  );
}

function getPlateCounts(weight) {
  let remaining = (weight - 45) / 2;
  const plates = [];

  function addPlates(w) {
    while (remaining >= w) {
      plates.push(w);
      remaining -= w;
    }
  }

  addPlates(45);
  addPlates(35);
  addPlates(25);
  addPlates(10);
  addPlates(5);
  addPlates(2.5);
  return plates;
}

const dimensionsByWeight = {
  45: {
    width: 16,
    height: 140
  },
  35: {
    width: 16,
    height: 120
  },
  25: {
    width: 16,
    height: 80
  },
  10: {
    width: 12,
    height: 64
  },
  5: {
    width: 12,
    height: 48
  },
  "2.5": {
    width: 8,
    height: 36
  }
};

const Styled = {
  PlateConfig: styled.div`
    display: flex;
    align-items: center;
    height: 180px;
  `,
  Bar: styled.div`
    background: #ddd;
    width: 48px;
    height: 16px;
    margin: 0 4px;
  `,
  Plate: styled.div`
    background: #2a2a2a;
    width: ${props => props.width}px;
    height: ${props => props.height}px;
    margin: 0 2px;
  `
};
