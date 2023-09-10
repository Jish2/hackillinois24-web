import { MonthDay, fallbackDate } from "@/types/calendar.type";
import { Dispatch, ReactNode, SetStateAction, createContext, useContext, useState } from "react";

type DateFilterContextType = {
	selectedDate: MonthDay;
	setSelectedDate: Dispatch<SetStateAction<MonthDay>>;
} | null;

const DateFilterContext = createContext<DateFilterContextType>(null);

export function DateFilterProvider({ children }: { children: ReactNode }) {
	const [selectedDate, setSelectedDate] = useState<MonthDay>(fallbackDate);

	const value = {
		selectedDate,
		setSelectedDate,
	};

	return <DateFilterContext.Provider value={value}>{children}</DateFilterContext.Provider>;
}

export function useDateFilter(beginDate?: MonthDay) {
	const context = useContext(DateFilterContext);
	if (context === undefined || !context) throw new Error("Provider is undefined.");
	return context;
}
