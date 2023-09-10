import { MonthDay, daysInMonth, months } from "@/types/calendar.type";
import type { Event } from "@/types/event.type";

export function formatDate(input: number): string {
	const date = new Date(input * 1000); // seconds -> milliseconds
	return date.toLocaleDateString("en-US", {
		month: "long",
		day: "numeric",
		year: "numeric",
	});
}

export function formatTime(input: number): string {
	const date = new Date(input * 1000); // seconds -> milliseconds
	const hours = date.getHours();
	const minutes = ("0" + date.getMinutes()).slice(-2); // we concatenate a 0 if minutes is 1 digit, then take the last two indexes
	const amPm = hours >= 12 ? "PM" : "AM";
	const hours12 = hours % 12 || 12; // if it is 12:00, hours will be 0 after mod, so we set to 12
	const time = `${hours12}:${minutes} ${amPm}`;

	return time;
}

export function getBeginDate(dates: Event[]): MonthDay {
	const timestamp = Math.min(...dates.map((event) => event.startTime));
	const date = new Date(timestamp * 1000); // seconds -> milliseconds

	const year = date.getFullYear();
	const month = date.getMonth();
	const day = date.getDate();
	const dow = date.getDay(); // day of week

	return {
		year,
		month,
		day,
		dow,
	};
}

export function getEndDate(dates: Event[]): MonthDay {
	const timestamp = Math.max(...dates.map((event) => event.startTime));
	const date = new Date(timestamp * 1000); // seconds -> milliseconds

	const year = date.getFullYear();
	const month = date.getMonth();
	const day = date.getDate();
	const dow = date.getDay(); // day of week

	return {
		year,
		month,
		day,
		dow,
	};
}

export function generateCalendarArray(beginDate: MonthDay) {
	const firstDay = beginDate && new Date(beginDate?.year, beginDate?.month, 1);
	const firstDayDOW = firstDay && firstDay.getDay();

	const startDisplayDate = beginDate.day - beginDate.dow;

	const daysInCurrentMonth = daysInMonth[beginDate.month];
	const daysInPreviousMonth = daysInMonth[beginDate.month === 0 ? 12 : beginDate.month - 1];

	const calendarDays = [];

	for (let i = daysInPreviousMonth - firstDayDOW; i < daysInPreviousMonth; i++) {
		calendarDays.push(i);
	}

	for (let i = 1; i < startDisplayDate; i++) {
		calendarDays.push(i);
	}

	for (let i = startDisplayDate; i <= daysInCurrentMonth; i++) {
		calendarDays.push(i);
	}

	const currentLength = calendarDays.length;

	if (currentLength > 28) {
		calendarDays.splice(0, 7);
	}

	for (let i = 1; i <= 28 - currentLength + 7; i++) {
		calendarDays.push(i);
	}

	return calendarDays;
}
