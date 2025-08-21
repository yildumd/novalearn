import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function calculateGPA(scores: number[]): number {
  const total = scores.reduce((sum, score) => sum + score, 0);
  return parseFloat((total / scores.length).toFixed(2));
}

export function calculateCGPA(grades: number[]): number {
  const total = grades.reduce((sum, grade) => sum + grade, 0);
  return parseFloat((total / grades.length).toFixed(2));
}

export function formatDuration(minutes: number): string {
  const hours = Math.floor(minutes / 60);
  const mins = minutes % 60;
  return hours > 0 ? `${hours}h ${mins}m` : `${mins}m`;
}