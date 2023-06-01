import styled from "styled-components";
import Link from "next/link";
import { StyledLink } from "./StyledLink";
import { StyledTitle } from "./StyledTitle";

const StyledHabitDetailsContainer = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const StyledCategoriesContainer = styled.ul`
  margin: 1rem 0 3rem 0;
  width: 90%;
  box-shadow: 0 0.2rem 0.5rem #6f4e37;
  border-radius: 0.5rem;
  background-color: beige;
  padding: 1rem;
  list-style: none;
`;

const StyledHabitNameContainer = styled.header`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 4rem 1rem 1rem 1rem;
  width: 80%;
  box-shadow: 0 0.2rem 0.5rem #6f4e37;
  border-radius: 0.5rem;
  background-color: beige;
  font-weight: bold;
  font-size: large;
`;

const StyledHabitLabel = styled.p`
  font-weight: bold;
  text-decoration: underline;
`;

const StyledHabitCategorie = styled.li`
  margin-bottom: 0.5rem;
  margin-top: 0.5rem;
  border: 1px solid #d6d3ab;
  box-shadow: 0 0.2rem 0.2rem #6f4e37;
  padding: 1rem 2rem 1rem 2rem;
  background-color: beige;
  border-radius: 1rem;
`;

export default function HabitDetailsPage({ habit }) {
  return (
    <>
      <StyledTitle>Unhabit</StyledTitle>
      <StyledHabitDetailsContainer>
        <StyledHabitNameContainer>{habit.name}</StyledHabitNameContainer>
        <StyledCategoriesContainer>
          <StyledHabitCategorie>
            <StyledHabitLabel>Reason:</StyledHabitLabel>
            {habit.reason}
          </StyledHabitCategorie>
          <StyledHabitCategorie>
            <StyledHabitLabel>Feeling:</StyledHabitLabel>
            {habit.feeling}
          </StyledHabitCategorie>
          <StyledHabitCategorie>
            <StyledHabitLabel>How to Overcome</StyledHabitLabel>
            {habit.overcome}
          </StyledHabitCategorie>
        </StyledCategoriesContainer>
      </StyledHabitDetailsContainer>
    </>
  );
}
