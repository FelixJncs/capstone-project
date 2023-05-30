import React from "react";
import styled from "styled-components";
import useHabitsStore from "@/store";

const StyledProgressBar = styled.div`
  width: 100%;
  height: 24px;
  background-color: #d6d3ab;
  border-radius: 12px;
  position: relative;
`;

const FilledProgressBar = styled.div`
  height: 100%;
  width: ${({ progress }) => `${(progress / 30) * 100}%`};
  background: linear-gradient(
    94deg,
    rgba(146, 225, 186, 0.6765676567656767) 15%,
    rgba(146, 225, 186, 1) 57%
  );
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

const HabitProgressBar = ({ habit }) => {
  const incrementProgress = useHabitsStore((state) => state.incrementProgress);
  const resetProgress = useHabitsStore((state) => state.resetProgress);

  const handleIncrement = () => {
    if (habit.progress < 30) {
      incrementProgress(habit.id);
    } else {
      resetProgress(habit.id);
    }
  };

  return (
    <StyledProgressBar>
      <FilledProgressBar progress={habit.progress} />
      <ProgressLabel>
        {habit.progress}/{30} days
      </ProgressLabel>
      <IncrementButton onClick={handleIncrement}>+</IncrementButton>
    </StyledProgressBar>
  );
};

export default HabitProgressBar;
