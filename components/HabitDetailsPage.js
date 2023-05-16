import styled from "styled-components";
import Link from "next/link";
import { StyledLink } from "./StyledLink";

const StyledHabitDetailsContainer = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const StyledCategoriesContainer = styled.main`
  margin: 0 1rem;
  width: 90%;
  box-shadow: 0 0.5rem 1rem rgba(0, 0, 0, 0.2);
  border-radius: 0.5rem;
  background-color: beige;
  padding: 1rem;
`;

const StyledHabitNameContainer = styled.header`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 6rem 1rem 1rem 1rem;
  width: 80%;
  box-shadow: 0 0.5rem 1rem rgba(0, 0, 0, 0.2);
  border-radius: 0.5rem;
  background-color: beige;
`;

const HabitName = styled.h2`
  font-size: 2rem;
  margin: 1rem;
`;

const StyledHabitReasonsContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin: 2rem 0 2rem;
`;

const StyledHabitReasonsLabel = styled.strong`
  font-weight: bold;
  padding: 0 0 0 1rem;
`;

const StyledHabitReasons = styled.p`
  margin: 0;
  border: 1px solid rgba(255, 235, 205, 0.5);
  box-shadow: 0 0.2rem 0.2rem rgba(0, 0, 0, 0.1);
  padding: 1rem 2rem 1rem 2rem;
  background-color: beige;
  border-radius: 1rem;
`;

const StyledHabitFeelingContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin: 2rem 0 2rem;
`;

const StyledHabitFeelingLabel = styled.strong`
  font-weight: bold;
  padding: 0 0 0 1rem;
`;

const StyledHabitFeeling = styled.p`
  margin: 0;
  border: 1px solid rgba(255, 235, 205, 0.5);
  box-shadow: 0 0.2rem 0.2rem rgba(0, 0, 0, 0.1);
  padding: 1rem 2rem 1rem 2rem;
  background-color: beige;
  border-radius: 1rem;
`;

const StyledBackLinkContainer = styled.div`
  position: fixed;
  bottom: 2rem;
  left: 2rem;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  padding: 1rem;
  background-color: transparent;
`;

export default function HabitDetailsPage({ habit }) {
  return (
    <>
      <StyledHabitDetailsContainer>
        <StyledHabitNameContainer>
          <HabitName>{habit.name}</HabitName>
        </StyledHabitNameContainer>
        <StyledCategoriesContainer>
          <StyledHabitReasonsContainer>
            <StyledHabitReasonsLabel>Reason:</StyledHabitReasonsLabel>
            <StyledHabitReasons>{habit.reason}</StyledHabitReasons>
          </StyledHabitReasonsContainer>
          <StyledHabitFeelingContainer>
            <StyledHabitFeelingLabel>Feeling:</StyledHabitFeelingLabel>
            <StyledHabitFeeling>{habit.feeling}</StyledHabitFeeling>
          </StyledHabitFeelingContainer>
        </StyledCategoriesContainer>
        <StyledBackLinkContainer>
          <StyledLink href="/">Back</StyledLink>
        </StyledBackLinkContainer>
      </StyledHabitDetailsContainer>
    </>
  );
}

// const StyledHeader = styled.header`
//   position: fixed;
//   top: 0;
//   left: 0;
//   right: 0;
//   height: 3rem;
//   background-color: #333;
//   color: #fff;
//   display: flex;
//   justify-content: center;
//   align-items: center;
//   font-size: 1.2rem;
// `;
{
  {
    /* <StyledHeader>App Name</StyledHeader> */
  }
  /* <p>
          <strong>How to Overcome</strong> {habit.Overcome}
        </p>
        <p>
          <strong>Start Date:</strong> {habit.startDate}
        </p>
        <p>
          <strong>Frequency:</strong> {habit.frequency}
        </p>
        <p>
          <strong>Duration:</strong> {habit.duration}
        </p>
        add form inputs for editing habit details */
}
