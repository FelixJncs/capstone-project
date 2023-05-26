import { useState, useEffect } from "react";
import { create } from "zustand";
import { persist } from "zustand/middleware"; //Middelware: intercept state updates and perform actions before or after the update occurs
// Persist: the state of the store will be automatically persisted in localStorage whenever it changes
const useHabitsStore = createLocalStorageStore(
  (set) => ({
    habits: [
      {
        id: "1",
        name: "Procrastination",
        reason: "To avoid or delay completing tasks or responsibilities",
        feeling: "Stressed or overwhelmed",
        overcome:
          "Break tasks into smaller pieces, set deadlines, and use a planner or task list to stay on track.",
        progress: 0,
        streakCount: 0,
        longestStreak: 0,
        currentStreak: 0,
        lastUpdated: null,
      },
      {
        id: "2",
        name: "Nail-biting",
        reason: "A nervous or anxious habit",
        feeling: "Embarrassed or ashamed",
        overcome:
          "Use stress-reducing techniques such as exercise, meditation, or deep breathing. Wear gloves or paint your nails to reduce temptation.",
        progress: 0,
        streakCount: 0,
        longestStreak: 0,
        currentStreak: 0,
        lastUpdated: null,
      },
    ],
    addHabit: (newHabit) =>
      set((state) => ({ habits: [...state.habits, newHabit] })),
    updateHabit: (updatedHabit) =>
      set((state) => ({
        habits: state.habits.map((habit) =>
          habit.id === updatedHabit.id ? updatedHabit : habit
        ),
      })),
    deleteHabit: (habitId) =>
      set((state) => ({
        habits: state.habits.filter((habit) => habit.id !== habitId),
      })),
    incrementProgress: (habitId) =>
      set((state) => {
        const currentDate = new Date();
        const updatedHabits = state.habits.map((habit) => {
          if (habit.id === habitId) {
            const updatedProgress = habit.progress + 1;
            const updatedStreakCount =
              updatedProgress > 0 ? habit.streakCount + 1 : habit.streakCount;
            const lastUpdatedDate = new Date(habit.lastUpdated);
            const isConsecutiveDay =
              currentDate.toDateString() === lastUpdatedDate.toDateString();

            let updatedCurrentStreak = habit.currentStreak;
            if (isConsecutiveDay) {
              updatedCurrentStreak =
                updatedProgress > 0 ? updatedCurrentStreak + 1 : 0;
            } else {
              updatedCurrentStreak = updatedProgress > 0 ? 1 : 0;
            }

            const updatedLongestStreak = Math.max(
              habit.longestStreak,
              updatedCurrentStreak
            );

            return {
              ...habit,
              progress: updatedProgress,
              streakCount: updatedStreakCount,
              longestStreak: updatedLongestStreak,
              currentStreak: updatedCurrentStreak,
              lastUpdated: currentDate.toISOString(),
            };
          }
          return habit;
        });
        return { habits: updatedHabits };
      }),
    resetProgress: (habitId) =>
      set((state) => {
        const updatedHabits = state.habits.map((habit) => {
          if (habit.id === habitId) {
            return {
              ...habit,
              progress: 0,
            };
          }
          return habit;
        });
        return { habits: updatedHabits };
      }),
  }),

  "habits-store" // unique name
);

// A function that returns a custom hook that can be used to access the state.
function createLocalStorageStore(initialStore, name) {
  // Create a Zustand store without persistence.
  const useServerStore = create(initialStore);
  // Create a Zustand store with persistence to local storage.
  const useClientStore = create(persist(initialStore, { name }));

  // A custom hook that selects the appropriate store based on whether
  // the component is hydrated or not.
  function useStore(selector, compare) {
    const [hydrated, setHydrated] = useState(false);

    useEffect(() => {
      setHydrated(true);
    }, []);

    const clientStore = useClientStore(selector, compare);
    const serverStore = useServerStore(selector, compare);

    return hydrated ? clientStore : serverStore;
  }

  return useStore;
}

export default useHabitsStore;
