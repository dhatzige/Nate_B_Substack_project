import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  // Filter out any non-string, non-object, non-array, non-boolean values
  const safeInputs = inputs.map(input => {
    if (input === null || input === undefined) {
      return ""
    }
    if (typeof input === "string" || typeof input === "object" || Array.isArray(input) || typeof input === "boolean") {
      return input
    }
    console.warn("[cn] Received invalid className value:", input)
    return ""
  })

  return twMerge(clsx(...safeInputs))
}

/**
 * Formats a date string into a more readable format (e.g., "June 25, 2025").
 * @param dateString The date string to format.
 * @returns A formatted date string.
 */
export function formatDate(dateString: string): string {
  if (!dateString) return "Invalid Date";
  try {
    const date = new Date(dateString);
    // Check if the date is valid
    if (isNaN(date.getTime())) {
      console.error(`Invalid date value received: ${dateString}`);
      return "Invalid Date";
    }
    return new Intl.DateTimeFormat('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
      timeZone: 'UTC' // Standardize to UTC to prevent server/client mismatch
    }).format(date);
  } catch (error) {
    console.error("Error formatting date:", dateString, error);
    return "Invalid Date";
  }
}

/**
 * Scrolls to a specific section of the page with a smooth animation.
 * @param id The ID of the element to scroll to.
 */
export function scrollToSection(id: string) {
  const element = document.getElementById(id);
  if (element) {
    element.scrollIntoView({
      behavior: 'smooth',
      block: 'start',
    });
  } else {
    console.warn(`[scrollToSection] Element with id '${id}' not found.`);
  }
}
