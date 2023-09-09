import type { EventType, Location } from "@/types/event.type";

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

export function getMapsURL(location: Location) {
	return `https://www.google.com/maps/search/?api=1&query=${location.latitude},${location.longitude}`;
}
