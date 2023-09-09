import { useState } from "react";

import { Card } from "@nextui-org/card";
import { Chip } from "@nextui-org/chip";
import { ClickableChip } from "@/components/clickable-chip";
import { PrivateChip } from "./private-chip";
import { LocationIcon } from "@/assets/icons";

import { cn, formatTime } from "@/utils";
import { getGradient, getMapsURL } from "@/utils/event";

import { Event } from "@/types/event.type";

interface EventsCardProps {
	event: Event;
	index: number;
}

export function EventCard({ event, index }: EventsCardProps) {
	const { id, name, description, startTime, endTime, locations, sponsor, eventType, points, isAsync, isPrivate, displayOnStaffCheckIn } =
		event;

	const [truncateDescription, setTruncateDescription] = useState<boolean>(true);

	return (
		<div id={`event-container-${index}`} className="flex gap-4">
			<div id={`event-time-container-${index}`} className="w-32 flex flex-col items-end mt-5">
				<span className="text-2xl text-gray-300">{formatTime(startTime)}</span>
				{startTime !== endTime && <span className="text-xl text-gray-500">{formatTime(endTime)}</span>}
			</div>

			<div id={`card-wrapper-${index}`} className={cn("p-1 rounded-[16px] w-full", getGradient(eventType))}>
				<Card className="space-y-2 p-4 bg-background/60 dark:bg-default-100/80" radius="lg" isBlurred>
					<div id={`event-header-container-${index}`} className="flex gap-2 items-center">
						<h1 id={`event-name-${index}`} className="text-2xl font-semibold">
							{name}
						</h1>
						{!!points && <Chip className={cn(getGradient(eventType), "min-h-[1.75rem] h-fit")}>{points} points</Chip>}
					</div>

					<p
						id={`event-description-${index}`}
						className={cn(
							truncateDescription ? "max-h-12 line-clamp-2" : "max-h-[400px] line-clamp-none",
							"cursor-pointer transition-[max-height] overflow-hidden duration-[2000ms]"
						)}
						onClick={() => setTruncateDescription((p) => !p)}
					>
						{description}
					</p>

					<div id={`locations-container-${index}`} className="flex gap-1 items-center">
						{isPrivate && <PrivateChip />}

						{locations.map((location, index) => (
							<ClickableChip
								key={index}
								href={getMapsURL(location)}
								description={location.description}
								icon={<LocationIcon width={14} height={14} className="m-1 mr-0" />}
							/>
						))}
					</div>
				</Card>
			</div>
		</div>
	);
}
