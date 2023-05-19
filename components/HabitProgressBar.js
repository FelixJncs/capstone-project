import React from "react";
import styled from "styled-components";

const StyledProgressBar = styled.div`
  width: 100%;
  height: 24px;
  background-color: white;
  border-radius: 12px;
  position: relative;
`;

const FilledProgressBar = styled.div`
  height: 100%;
  width: ${({ progress }) => `${(progress / 30) * 100}%`};
  background-color: #d9c8b4;
  border-radius: 12px;
  transition: width 0.3s ease-in-out;
`;

const ProgressLabel = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  font-weight: bold;
  color: #000;
`;

const IncrementButton = styled.button`
  position: absolute;
  top: 50%;
  right: 8px;
  transform: translateY(-50%);
  padding: 4px;
  border: none;
  background-color: transparent;
  color: #000;
  font-size: 16px;
  cursor: pointer;
`;

const HabitProgressBar = ({ progress, onIncrement }) => {
  return (
    <StyledProgressBar>
      <FilledProgressBar progress={progress} />
      <ProgressLabel>
        {progress}/{30} days
      </ProgressLabel>
      <IncrementButton onClick={onIncrement}>+</IncrementButton>
    </StyledProgressBar>
  );
};

export default HabitProgressBar;
