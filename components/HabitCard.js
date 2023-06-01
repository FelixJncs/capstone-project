import styled from "styled-components";
import Link from "next/link";
import { FaTrash, FaEdit, FaChevronDown } from "react-icons/fa";
import useHabitsStore from "@/store";
import { StyledButton } from "./StyledButton";
import HabitProgressBar from "./HabitProgressBar";

const StyledHabitCard = styled.li`
  background-color: beige;
  border-radius: 2rem;
  border: 1px solid grey;
  padding: 1rem;
  box-shadow: 0 0.125rem 0.25rem #6f4e37;
  h3 {
    margin: 0;
  }
  position: relative;
  z-index: 0;
`;

const HabitCardContent = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 2rem;
`;

const HabitCardFooter = styled.div`
  position: absolute;
  bottom: 0;
  right: 0;
  display: flex;
  align-items: center;
`;

const StyledOnCardLink = styled(Link)`
  display: inline-flex;
  padding: 0.5rem 1rem;
  background-color: beige;
  border-radius: 0.5rem;
  box-shadow: 0.1rem 0.2rem 0.7rem #6f4e37;
  border: 1px solid #d6d3ab;
  text-decoration: none;
  color: black;
  font-weight: bold;
  display: flex;
  align-items: center;
  margin-bottom: 0.5rem;
`;

const StyledContent = styled.p`
  border: 1px solid black;
  border-radius: 0.5rem;
  padding: 0.5rem;
  box-shadow: 0.1rem 0.2rem 0.7rem #6f4e37;
  border: 1px solid #d6d3ab;
`;

const StyledIcon = styled.span`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: 0.25rem;
  svg {
    fill: #0a41f0;
    font-size: 15px;
  }
`;

const StyledDetailsIcon = styled(FaChevronDown)`
  fill: #0a41f0;
  font-size: 15px;
  margin-left: 0.5rem;
`;

export default function HabitCard({ habit }) {
  const updateHabit = useHabitsStore((state) => state.updateHabit);
  const onDelete = useHabitsStore((state) => state.deleteHabit);

  const handleDelete = () => {
    onDelete(habit.id);
  };

  return (
    <StyledHabitCard>
      <HabitCardContent>
        <h2 key={habit.id}>
          <StyledOnCardLink href={`/habits/${habit.id}`}>
            {habit.name}
            <StyledDetailsIcon />
          </StyledOnCardLink>
        </h2>
        <StyledContent>
          <strong>Reason:</strong> {habit.reason}
        </StyledContent>

        <HabitProgressBar habit={habit} updateHabit={updateHabit} />
      </HabitCardContent>
      <HabitCardFooter>
        <StyledOnCardLink href={`/edithabit/${habit.id}`}>
          <StyledIcon>
            <FaEdit />
          </StyledIcon>
        </StyledOnCardLink>{" "}
        <StyledButton type="button" onClick={handleDelete}>
          <StyledIcon>
            <FaTrash />
          </StyledIcon>
        </StyledButton>
      </HabitCardFooter>
    </StyledHabitCard>
  );
}
