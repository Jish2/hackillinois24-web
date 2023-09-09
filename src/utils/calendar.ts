import type { Event } from "@/types/event.type";

export function formatDate(input: string | number): string {
	const date = new Date(input);
	return date.toLocaleDateString("en-US", {
		month: "long",
		day: "numeric",
		year: "numeric",
	});
}

export function formatTime(input: number): string {
	const date = new Date(input * 1000); // seconds -> milliseconds
	const hours = date.getHours() % 12 || 12; // if it is 12:00, hours will be 0 after mod, so we set to 12
	const minutes = ("0" + date.getMinutes()).slice(-2); // we concatenate a 0 if minutes is 1 digit, then take the last two indexes
	const amPm = hours >= 12 ? "PM" : "AM";
	const time = `${hours}:${minutes} ${amPm}`;

	return time;
}

export function getBeginDate(dates: Event[]) {
	return Math.min(...dates.map((event) => event.startTime));
}

export function getEndDate(dates: Event[]) {
	return Math.max(...dates.map((event) => event.startTime));
}
