import styled from "styled-components";

export default function HabitCard({ habit }) {
  return (
    <HabitCardWrapper>
      <h3>{habit.name}</h3>
      <p>{habit.reason}</p>
      <p>{habit.feeling}</p>
    </HabitCardWrapper>
  );
}
