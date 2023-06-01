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
  margin-bottom: 5rem;
`;

const StyledHabitStatsCard = styled.li`
  background-color: beige;
  padding: 1rem;
  border-radius: 2rem;
  box-shadow: 0 0.2rem 0.5rem #6f4e37;
  margin: 0rem 1rem 0rem 1rem;
`;

const StyledOverallScore = styled.div`
  text-align: center;
  margin-bottom: 1rem;
  background-color: #d6d3ab;
  margin: 1rem;
  padding: 1.5rem;
  border-radius: 0.5rem;
  box-shadow: 0 0.2rem 0.5rem #6f4e37;
  font-size: large;
`;

const StyledPageContainer = styled.header`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 1rem 2rem 1rem 2rem;
  box-shadow: 0 0.2rem 0.5rem #6f4e37;
  border-radius: 0.5rem;
  background-color: beige;
  font-weight: bold;
  font-size: large;
  padding: 0.4rem;
  flex-direction: column;
  border: 1px solid #d6d3ab;
`;

const StyledTextTitle = styled.p`
  border: 1px solid #d6d3ab;
  padding: 0.4rem 1rem 0.4rem 1rem;
  box-shadow: 0 0.2rem 0.5rem #6f4e37;
  border-radius: 0.5rem;
  text-align: center;
  font-size: medium;
  margin: 0 2rem 0 2rem;
  background-color: beige;
`;

const StyledScoreContent = styled.p`
  border: 1px solid #d6d3ab;
  padding: 0.4rem 1rem 0.4rem 1rem;
  box-shadow: 0 0.2rem 0.5rem #6f4e37;
  border-radius: 0.5rem;
  text-align: center;
  font-size: medium;
  margin: 0.5rem 2rem 0 2rem;
  background-color: beige;
`;
const StyledScore = styled.p`
  border: 1px solid #d6d3ab;
  padding: 0.4rem 2rem 0.4rem 2rem;
  box-shadow: 0 0.2rem 0.5rem #6f4e37;
  border-radius: 0.5rem;
  background: linear-gradient(
    94deg,
    rgba(146, 225, 186, 0.6765676567656767) 15%,
    rgba(146, 225, 186, 1) 57%
  );
`;
const StyledTextContent = styled.p`
  font-weight: lighter;
  font-size: medium;
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
      <StyledTextTitle>
        <strong>Habit Score</strong>
      </StyledTextTitle>
      <StyledPageContainer>
        <StyledTextContent>
          <strong>Keep going!</strong> The Score for each habit increases by
          <strong> 100 points </strong>
          with every day you manage to stay strong. Every time your longest
          Streak increases, you get <strong>additional 100 points</strong>.
        </StyledTextContent>
      </StyledPageContainer>

      <StyledOverallScore>
        <StyledScore>
          Overall Score: <strong>{overallScore}</strong>
        </StyledScore>
      </StyledOverallScore>
      <StyledHabitStatsList>
        {habits.map((habit) => {
          return (
            <StyledHabitStatsCard key={habit.id}>
              <div>
                <StyledTextTitle>
                  <strong>{habit.name}</strong>
                </StyledTextTitle>
                <StyledScoreContent>
                  Current Streak: <strong>{habit.currentStreak}</strong>
                </StyledScoreContent>
                <StyledScoreContent>
                  Longest Streak: <strong>{habit.longestStreak}</strong>
                </StyledScoreContent>
              </div>
              <StyledScore>
                Score: <strong>{habit.score}</strong>
              </StyledScore>
            </StyledHabitStatsCard>
          );
        })}
      </StyledHabitStatsList>
    </>
  );
};

export default HabitStats;
