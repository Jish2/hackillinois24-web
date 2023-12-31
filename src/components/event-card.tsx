import { useState } from "react";

import { Card } from "@nextui-org/card";
import { Chip } from "@nextui-org/chip";
import { ClickableChip } from "@/components/clickable-chip";
import { PrivateChip } from "./private-chip";
import { LocationIcon } from "@/assets/icons";

import { cn } from "@/utils";
import { formatTime } from "@/utils/calendar";
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
		<div id={`event-container-${index}`} className="flex gap-4" aria-label="event card">
			<div id={`event-time-container-${index}`} className="max-w-[32px] w-32 sm:min-w-[104px] flex flex-col items-start sm:items-end mt-5">
				<span className="text-md sm:text-2xl">{formatTime(startTime)}</span>
				{startTime !== endTime && <span className="text-sm sm:text-xl text-foreground-400">{formatTime(endTime)}</span>}
			</div>

			<div
				id={`card-wrapper-${index}`}
				className={cn("p-1 rounded-[16px] min-w-screen-side sm:min-w-screen-side-sm w-full", getGradient(eventType))}
			>
				<Card className="space-y-2 p-4 bg-default-100/80 dark:bg-default-800/80" radius="lg" isBlurred>
					<div id={`event-header-container-${index}`} className="flex gap-2 items-center">
						<h1 id={`event-name-${index}`} className="text-lg sm:text-2xl font-semibold dark:text-foreground-100">
							{name}
						</h1>
						{!!points && (
							<Chip className={cn(getGradient(eventType), "min-h-[1.75rem] h-fit dark:text-foreground-100")}>{points} points</Chip>
						)}
					</div>

					<p
						id={`event-description-${index}`}
						className={cn(
							truncateDescription ? "max-h-12 line-clamp-2" : "max-h-[400px] line-clamp-none",
							"cursor-pointer transition-[max-height] overflow-hidden duration-[2000ms] text-sm sm:text-base dark:text-foreground-100"
						)}
						onClick={() => setTruncateDescription((p) => !p)}
					>
						{description}
					</p>

					<div id={`locations-container-${index}`} className="flex gap-1 items-center flex-wrap">
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
