import { useDateFilter } from "@/hooks/useDateFilter";

import { dayOfWeek, fallbackDate, months } from "@/types/calendar.type";

export function DateLabel() {
	const { selectedDate } = useDateFilter();
	const selectedDateLabel =
		selectedDate === fallbackDate ? "Loading..." : `${dayOfWeek[selectedDate.dow]}, ${months[selectedDate.month]} ${selectedDate.day}`;

	return (
		<div id="day-label-container" className="sm:flex sm:items-end sm:gap-4">
			<h1 className="text-3xl font-semibold" aria-label="Current selected date">
				{selectedDateLabel}
			</h1>
			<span className="text-foreground-400 sm:text-lg">CDT TIME</span>
		</div>
	);
}
