import EditHabitForm from "@/components/EditHabitForm";
import useHabitsStore from "@/store";
import { useRouter } from "next/router";

export default function EditHabitPage() {
  const router = useRouter();
  const { id } = router.query;
  const habit = useHabitsStore((state) =>
    state.habits.find((h) => h.id === id)
  );
  const updateHabit = useHabitsStore((state) => state.updateHabit);

  const handleSubmit = (updatedHabitData) => {
    updateHabit(updatedHabitData); // Call the updateHabit function with the updatedHabitData
    router.push("/");
  };

  if (!habit) {
    return <p>Habit not found</p>;
  }
  return (
    <div>
      <EditHabitForm habit={habit} onSubmit={handleSubmit} />
    </div>
  );
}
