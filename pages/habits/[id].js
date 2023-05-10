import { useRouter } from "next/router";
import { habits } from "../../Data/HabitsDB";
import HabitDetailsPage from "@/components /HabitDetailsPage";

export default function HabitDetails() {
  const router = useRouter();
  const { id } = router.query;
  const habit = habits.find((habit) => habit.id === id);

  if (!habit) {
    return <div>Habit not found</div>;
  }

  return <HabitDetailsPage habit={habit} />;
}
