import { cn } from "@/utils";
import { generateCalendarArray, getBeginDate, getEndDate } from "@/utils/calendar";

import { Event } from "@/types/event.type";
import { Month, MonthDay, fallbackDate, months } from "@/types/calendar.type";
import { useDateFilter } from "@/hooks/useDateFilter";
import { useEffect } from "react";

interface CalendarPickerProps {
	events: Event[] | null;
}

export function CalendarPicker({ events }: CalendarPickerProps) {
	const beginDate: MonthDay = events ? getBeginDate(events) : fallbackDate;
	const endDate: MonthDay = events ? getEndDate(events) : fallbackDate;

	const monthLabel: Month = months[beginDate.month];

	const calendarDays: number[] = generateCalendarArray(beginDate);

	const { selectedDate, setSelectedDate } = useDateFilter();

	useEffect(() => {
		setSelectedDate(beginDate);
	}, []); // eslint-disable-line

	return (
		<div className="min-w-[244px]">
			<h1 className="text-2xl font-semibold mb-2">{monthLabel}</h1>

			<div className={cn("grid grid-cols-7 gap-2 w-fit")}>
				{calendarDays.map((day, i) => {
					const highlightDay: boolean = day >= beginDate.day && day <= endDate.day;
					const todaySelected: boolean = day === selectedDate.day;
					return (
						<button
							className={cn(
								"w-7 h-7 rounded-full flex items-center justify-center text-sm",
								highlightDay && "bg-gray-700 cursor-pointer",
								todaySelected && "bg-orange-500"
							)}
							onClick={() => {
								if (!highlightDay) return;
								setSelectedDate({
									year: beginDate.year,
									month: beginDate.month,
									day: day,
									dow: (day - beginDate.day + beginDate.dow) % 7,
								});
							}}
							key={i}
						>
							{day}
						</button>
					);
				})}
			</div>
		</div>
	);
}
