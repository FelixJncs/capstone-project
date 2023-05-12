import AddHabitForm from "@/components /AddHabitsForm";
import useStore from "@/store";

function AddHabitPage() {
  const addHabit = useStore((state) => state.addHabit);

  const handleSubmit = (habit) => {
    addHabit(habit);
  };

  return <AddHabitForm onSubmit={handleSubmit} />;
}

export default AddHabitPage;
