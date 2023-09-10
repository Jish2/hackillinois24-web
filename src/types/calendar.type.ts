export interface MonthDay {
	year: number;
	month: number;
	day: number;
	dow: number;
}

export const months = [
	"January",
	"February",
	"March",
	"April",
	"May",
	"June",
	"July",
	"August",
	"September",
	"October",
	"November",
	"December",
] as const;

export type Month = (typeof months)[number];

export const daysInMonth = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31] as const;

export const fallbackDate = {
	year: 0,
	month: 0,
	day: 0,
	dow: 0,
};

export const dayOfWeek = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"] as const;
