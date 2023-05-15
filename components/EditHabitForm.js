import { useState } from "react";
import useStore from "@/store";
import { useRouter } from "next/router";
import styled from "styled-components";
import { StyledTitle } from "./StyledTitle";
import Link from "next/link";

const StyledBacklink = styled(Link)`
  display: inline-block;
  padding: 1rem 2rem;
  background-color: beige;
  border-radius: 1rem;
  box-shadow: 0 0.2rem 0.2rem rgba(0, 0, 0, 0.1);
  border: none;
  text-decoration: none;
  color: black;
  font-weight: bold;
  margin: 1rem 0 2rem 2rem;
  cursor: pointer;
`;
const StyledEditButton = styled.button`
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

const StyledFormContainer = styled.form`
  display: flex;
  flex-direction: column;
  margin-bottom: 2rem;
  border: 1px solid #ccc;
  border-radius: 4px;
  padding: 16px;
  margin: 0 2rem 0 2rem;
  background-color: beige;
`;

const StyledFormRow = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 16px;

  label {
    margin-bottom: 8px;
  }
`;

const StyledInputField = styled.input`
  padding: 8px;
  border: 1px solid #ccc;
  border-radius: 4px;
  font-size: 16px;
`;

const StyledTextAreaField = styled.textarea`
  padding: 8px;
  border: 1px solid #ccc;
  border-radius: 4px;
  font-size: 16px;
`;

export default function EditHabitForm({ habit, onSubmit }) {
  const router = useRouter();
  const [name, setName] = useState(habit.name);
  const [reason, setReason] = useState(habit.reason);
  const [feeling, setFeeling] = useState(habit.feeling);
  const [overcome, setOvercome] = useState(habit.overcome);
  const updateHabit = useStore((state) => state.updateHabit);

  const handleSubmit = (e) => {
    e.preventDefault();
    const updatedHabit = {
      ...habit,
      name,
      reason,
      feeling,
      overcome,
    };
    updateHabit(updatedHabit);
    onSubmit(updatedHabit);
    router.push("/");
  };

  return (
    <>
      <StyledTitle>Edit Habit</StyledTitle>
      <StyledFormContainer onSubmit={handleSubmit}>
        <StyledFormRow>
          <label htmlFor="name">Name</label>
          <StyledInputField
            type="text"
            id="name"
            name="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </StyledFormRow>
        <StyledFormRow>
          <label htmlFor="reason">Reason</label>
          <StyledTextAreaField
            type="text"
            id="reason"
            name="reason"
            value={reason}
            onChange={(e) => setReason(e.target.value)}
          />
        </StyledFormRow>
        <StyledFormRow>
          <label htmlFor="feeling">Feeling</label>
          <StyledTextAreaField
            type="text"
            id="feeling"
            name="feeling"
            value={feeling}
            onChange={(e) => setFeeling(e.target.value)}
          />
        </StyledFormRow>
        <StyledFormRow>
          <label htmlFor="overcome">Overcome</label>
          <StyledTextAreaField
            type="text"
            id="overcome"
            name="overcome"
            value={overcome}
            onChange={(e) => setOvercome(e.target.value)}
          />
        </StyledFormRow>
        <StyledEditButton StyledEditButton type="submit">
          Save
        </StyledEditButton>
      </StyledFormContainer>
      <StyledBacklink href="/">Back</StyledBacklink>
    </>
  );
}
