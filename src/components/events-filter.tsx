import { Event } from "@/types/event.type";
import { EventCard } from "@/components/event-card";
import { useDateFilter } from "@/hooks/useDateFilter";
import { getBeginDate } from "@/utils/calendar";

interface EventsFilterProps {
	events: Event[];
}

export function EventsFilter({ events }: EventsFilterProps) {
	const { selectedDate } = useDateFilter();

	const filteredEvents = events
		.filter((event) => {
			const date = getBeginDate([event]);
			return date.day === selectedDate.day;
		})
		.sort((event_a, event_b) => event_a.startTime - event_b.startTime);

	return (
		<>
			{filteredEvents.map((event, index) => {
				return <EventCard event={event} key={event.id} index={index} />;
			})}
		</>
	);
}
