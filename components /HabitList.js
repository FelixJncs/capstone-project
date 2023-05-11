import styled from "styled-components";
import HabitCard from "./HabitCard";
import useStore from "../Data/store";

const StyledHabitList = styled.ul`
  list-style-type: none;
  display: flex;
  flex-direction: column;
  gap: 1rem;
  justify-content: center;
  padding-left: 0;
`;

export default function HabitList() {
  const habits = useStore((state) => state.habits);
  return (
    <StyledHabitList>
      {habits.map((habit) => (
        <HabitCard key={habit.id} habit={habit} />
      ))}
    </StyledHabitList>
  );
}
