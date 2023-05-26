import useHabitsStore from "@/store";
import { StyledLink } from "@/components/StyledLink";
import styled from "styled-components";
import { StyledTitle } from "@/components/StyledTitle";
import Link from "next/link";

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

const HabitStatsPage = () => {
  const habits = useHabitsStore((state) => state.habits);

  return (
    <>
      <StyledHabitStatsList>
        <StyledTitle>Unhabit</StyledTitle>
        <h2>Habit Stats</h2>
        {habits.map((habit) => (
          <StyledHabitStatsCard key={habit.id}>
            <p>{habit.name}</p>
            <p>Current Streak: {habit.streakCount}</p>
            <p>Longest Streak: {habit.longestStreak}</p>
          </StyledHabitStatsCard>
        ))}
      </StyledHabitStatsList>
      <StyledLink href="/">Back</StyledLink>
    </>
  );
};

export default HabitStatsPage;
