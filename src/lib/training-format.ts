import { useSyncExternalStore } from "react";

export type TrainingFormat = "foundation" | "small-group" | "not-sure";
type PreferredFormat = TrainingFormat | "";

let current: PreferredFormat = "";
const listeners = new Set<() => void>();

export function setPreferredFormat(next: PreferredFormat) {
  if (current === next) return;
  current = next;
  listeners.forEach((listener) => listener());
}

function subscribe(listener: () => void) {
  listeners.add(listener);
  return () => {
    listeners.delete(listener);
  };
}

function getSnapshot(): PreferredFormat {
  return current;
}

export function usePreferredFormat(): PreferredFormat {
  return useSyncExternalStore(subscribe, getSnapshot, () => "");
}
