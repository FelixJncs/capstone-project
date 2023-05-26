import useHabitsStore from "@/store";
import styled from "styled-components";
import { StyledLink } from "./StyledLink";
import { StyledTitle } from "./StyledTitle";

const StyledHabitStatsList = styled.ul`
  list-style-type: none;
  display: flex;
  flex-direction: column;
  gap: 1rem;
  justify-content: center;
  padding-left: 0;
`;

const StyledHabitStatsCard = styled.li`
  background-color: #f5f5f5;
  padding: 1rem;
  border-radius: 4px;
`;

const HabitStats = () => {
  const habits = useHabitsStore((state) => state.habits);

  return (
    <>
      <StyledTitle>Unhabit</StyledTitle>
      <h2>Habit Stats</h2>
      <StyledHabitStatsList>
        {habits.map((habit) => {
          return (
            <StyledHabitStatsCard key={habit.id}>
              <p>{habit.name}</p>
              <p>Current Streak: {habit.streakCount}</p>{" "}
              {/* Display current streak */}
              <p>Longest Streak: {habit.longestStreak}</p>{" "}
              {/* Display longest streak */}
            </StyledHabitStatsCard>
          );
        })}
      </StyledHabitStatsList>
      <StyledLink href="/">back</StyledLink>
    </>
  );
};

export default HabitStats;
