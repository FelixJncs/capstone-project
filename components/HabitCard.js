import styled from "styled-components";
import Link from "next/link";
import useHabitsStore from "@/store";
import { StyledButton } from "./StyledButton";
import HabitProgressBar from "./HabitProgressBar";
import { useState } from "react";

const StyledHabitCard = styled.li`
  background-color: beige;
  border-radius: 2rem;
  padding: 1rem;
  box-shadow: 0 0.125rem 0.25rem rgba(0, 0, 0, 0.075);
  h3 {
    margin: 0;
  }
`;
const StyledOnCardLink = styled(Link)`
  display: inline-block;
  padding: 1rem 2rem;
  background-color: beige;
  border-radius: 1rem;
  box-shadow: 0 0.2rem 0.2rem rgba(0, 0, 0, 0.1);
  border: none;
  text-decoration: none;
  color: black;
  font-weight: bold;
  cursor: pointer;
`;
export default function HabitCard({ habit }) {
  const updateHabit = useHabitsStore((state) => state.updateHabit);
  const onDelete = useHabitsStore((state) => state.deleteHabit);

  const handleDelete = () => {
    onDelete(habit.id);
  };

  return (
    <StyledHabitCard>
      <h2 key={habit.id}>
        <StyledOnCardLink href={`/habits/${habit.id}`}>
          {habit.name}
        </StyledOnCardLink>
      </h2>
      <p>Reason: {habit.reason}</p>
      <p>Feeling: {habit.feeling}</p>
      <HabitProgressBar habit={habit} updateHabit={updateHabit} />
      <StyledOnCardLink href={`/edithabit/${habit.id}`}>
        Edit
      </StyledOnCardLink>{" "}
      <StyledButton type="button" onClick={handleDelete}>
        Gone
      </StyledButton>
    </StyledHabitCard>
  );
}
