import type { Event, EventType } from "@/types/event.type";

export function getBeginDate(dates: Event[]) {
	return Math.min(...dates.map((event) => event.startTime));
}

export function getEndDate(dates: Event[]) {
	return Math.max(...dates.map((event) => event.startTime));
}

export function getGradient(type: EventType) {
	switch (type) {
		case "WORKSHOP": // green
			return "bg-gradient-to-r from-green-300 to-emerald-500";
		case "MINIEVENT": // light blue
			return "bg-gradient-to-r from-blue-300 to-blue-500";
		case "MEAL": // purple (felt right)
			return "bg-gradient-to-r from-purple-300 to-purple-500";
		case "OTHER": // yellow
			return "bg-gradient-to-r from-yellow-300 to-orange-400";
		/* This event type is present on 2021 version, but not in current api
    case "COMPANY": // red
      return "bg-gradient-to-l from-orange-400 to-yellow-300";  
    */
		default:
			return "";
	}
}
