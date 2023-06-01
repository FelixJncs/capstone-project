import { useState } from "react";
import useStore from "@/store";
import { useRouter } from "next/router";
import styled from "styled-components";
import { StyledTitle } from "./StyledTitle";
import { StyledLink } from "./StyledLink";
import { StyledButton } from "./StyledButton";

const StyledFormContainer = styled.form`
  display: flex;
  flex-direction: column;
  margin-bottom: 2rem;
  border: 1px solid #d6d3ab;
  border-radius: 4px;
  padding: 16px;
  margin: 0 2rem 5rem 2rem;
  background-color: #d6d3ab;
  border: 1px solid #d6d3ab;
  box-shadow: 0 0.2rem 0.5rem #6f4e37;
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
  border: 1px solid #d6d3ab;
  border-radius: 4px;
  font-size: 16px;
  background-color: beige;
  height: min-content;
  font-family: system-ui;
  box-shadow: 0.1rem 0.2rem 0.7rem #6f4e37;
`;

const StyledTextAreaField = styled.textarea`
  padding: 8px;
  border: 1px solid #d6d3ab;
  border-radius: 4px;
  font-size: 16px;
  background-color: beige;
  resize: vertical;
  overflow: show;
  font-family: system-ui;
  height: 10rem;
  box-shadow: 0.1rem 0.2rem 0.7rem #6f4e37;
`;

const StyledLabel = styled.label`
  background-color: beige;
  border-radius: 4px;
  box-shadow: 0.1rem 0.2rem 0.7rem #6f4e37;
  margin: 0.5rem 1rem 0.5rem 1rem;
  text-align: center;
`;

const StyledPageContainer = styled.header`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 1rem 1rem 1rem 2.2rem;
  width: 80%;
  box-shadow: 0 0.2rem 0.5rem #6f4e37;
  border-radius: 0.5rem;
  background-color: beige;
  font-weight: bold;
  font-size: large;
  padding: 0.4;
`;

export default function EditHabitForm({ habit, onSubmit }) {
  const [name, setName] = useState(habit.name);
  const [reason, setReason] = useState(habit.reason);
  const [feeling, setFeeling] = useState(habit.feeling);
  const [overcome, setOvercome] = useState(habit.overcome);

  const handleSubmit = (e) => {
    e.preventDefault();
    const updatedHabitData = {
      ...habit,
      name,
      reason,
      feeling,
      overcome,
    };
    onSubmit(updatedHabitData);
  };
  return (
    <>
      <StyledTitle>Unhabit</StyledTitle>
      <StyledPageContainer>Edit habit</StyledPageContainer>
      <StyledFormContainer onSubmit={handleSubmit}>
        <StyledFormRow>
          <StyledLabel htmlFor="name">
            <strong>Name:</strong>
          </StyledLabel>
          <StyledInputField
            type="text"
            id="name"
            name="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </StyledFormRow>
        <StyledFormRow>
          <StyledLabel htmlFor="reason">
            <strong>Reasons:</strong>
          </StyledLabel>
          <StyledTextAreaField
            type="text"
            id="reason"
            name="reason"
            value={reason}
            onChange={(e) => setReason(e.target.value)}
          />
        </StyledFormRow>
        <StyledFormRow>
          <StyledLabel htmlFor="feeling">
            <strong>Feelings:</strong>
          </StyledLabel>
          <StyledTextAreaField
            type="text"
            id="feeling"
            name="feeling"
            value={feeling}
            onChange={(e) => setFeeling(e.target.value)}
          />
        </StyledFormRow>
        <StyledFormRow>
          <StyledLabel htmlFor="overcome">
            <strong>How to overcome it?</strong>
          </StyledLabel>
          <StyledTextAreaField
            type="text"
            id="overcome"
            name="overcome"
            value={overcome}
            onChange={(e) => setOvercome(e.target.value)}
          />
        </StyledFormRow>
        <StyledButton type="submit">Save</StyledButton>
      </StyledFormContainer>
    </>
  );
}
