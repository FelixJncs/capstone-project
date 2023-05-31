import React from "react";
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
  background-color: beige;
  padding: 1rem;
  border-radius: 2rem;
`;

const StyledOverallScore = styled.div`
  text-align: center;
  margin-bottom: 1rem;
`;

const HabitStats = () => {
  const habits = useHabitsStore((state) => state.habits);
  const overallScore = habits.reduce(
    (totalScore, habit) => totalScore + habit.score,
    0
  );

  return (
    <>
      <StyledTitle>Unhabit</StyledTitle>
      <h2>Habit Stats</h2>
      <p>
        Keep going! The Score for each habit increases by 100 points with every
        day you manage to stay strong. Every time your longest Streak increases,
        you get additional 100 points.
      </p>
      <StyledOverallScore>
        <p>Overall Score: {overallScore}</p>
      </StyledOverallScore>
      <StyledHabitStatsList>
        {habits.map((habit) => {
          return (
            <StyledHabitStatsCard key={habit.id}>
              <div>
                <p>{habit.name}</p>
                <p>Current Streak: {habit.currentStreak}</p>
                <p>Longest Streak: {habit.longestStreak}</p>
              </div>
              <p>Score: {habit.score}</p>
            </StyledHabitStatsCard>
          );
        })}
      </StyledHabitStatsList>
      <StyledLink href="/">back</StyledLink>
    </>
  );
};

export default HabitStats;
