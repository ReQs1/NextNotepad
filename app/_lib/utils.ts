import clsx, { ClassValue } from "clsx";
import { format } from "date-fns";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function formatDate(date: Date) {
  return format(date, "MMM dd, yyyy");
}

export function formatContent(body: string, limit: number) {
  if (body.length >= limit) {
    return body.substring(0, limit) + "...";
  }
  return body;
}
