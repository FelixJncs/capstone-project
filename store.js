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
      },
      {
        id: "2",
        name: "Nail-biting",
        reason: "A nervous or anxious habit",
        feeling: "Embarrassed or ashamed",
        overcome:
          "Use stress-reducing techniques such as exercise, meditation, or deep breathing. Wear gloves or paint your nails to reduce temptation.",
        progress: 0,
      },
      {
        id: "3",
        name: "Smoking",
        reason: "An addiction to nicotine",
        feeling: "Anxious or irritable without nicotine",
        overcome:
          "Talk to a healthcare professional about quitting strategies, such as nicotine replacement therapy or medication. Seek support from friends, family, or a support group.",
        progress: 0,
      },
      {
        id: "4",
        name: "Poor diet",
        reason: "Lack of time or resources, or unhealthy eating habits",
        feeling: "Lethargic or unhealthy",
        overcome:
          "Plan meals and snacks in advance, make healthier food choices, and seek support from a registered dietitian or nutritionist.",
        progress: 0,
      },
      {
        id: "5",
        name: "Excessive social media use",
        reason: "A desire for social connection, boredom, or addiction",
        feeling: "Anxious or disconnected from real life",
        overcome:
          "Limit time spent on social media, use apps or tools to track usage, and find other activities to do instead.",
        progress: 0,
      },
      {
        id: "6",
        name: "Overspending",
        reason: "Impulse buying or trying to keep up with others",
        feeling: "Anxious or guilty about finances",
        overcome:
          "Create a budget, avoid impulse purchases, and seek support from a financial planner or counselor.",
        progress: 0,
      },
      {
        id: "7",
        name: "Skipping breakfast",
        reason: "Lack of time or appetite",
        feeling: "Hungry or low energy",
        overcome:
          "Plan breakfast in advance, make healthy choices, and find foods that are easy to prepare and eat on the go.",
        progress: 0,
      },
      {
        id: "8",
        name: "Procrastinating sleep",
        reason: "Difficulty falling asleep or fear of missing out",
        feeling: "Tired or irritable",
        overcome:
          "Establish a regular sleep routine, avoid caffeine and electronic devices before bed, and create a relaxing sleep environment.",
        progress: 0,
      },
      {
        id: "9",
        name: "Nail picking or skin picking",
        reason: "A nervous or anxious habit",
        feeling: "Embarrassed or ashamed",
        overcome:
          "Use stress-reducing techniques such as exercise, meditation, or deep breathing. Wear gloves or cover the affected areas to reduce temptation.",
        progress: 0,
      },
      {
        id: "10",
        name: "Interrupting others",
        reason: "Impatience or desire to be heard",
        feeling: "Annoyed or frustrated when not being heard",
        overcome:
          "Practice active listening, allow others to finish speaking before responding, and seek feedback from others on communication skills.",
        progress: 0,
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
