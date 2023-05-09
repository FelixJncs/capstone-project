import { habits } from "@/public/habitsDB";
import HabitList from "@/components /HabitList";

export default function Home() {
  return (
    <div>
      <HabitList habits={habits} />
    </div>
  );
}
ss;
