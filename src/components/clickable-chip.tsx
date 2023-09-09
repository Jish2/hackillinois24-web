import { Chip } from "@nextui-org/chip";

import { ReactNode } from "react";

interface ClickableChipProps {
	href?: string;
	icon?: ReactNode;
	description: string;
}

export function ClickableChip({ href, icon, description }: ClickableChipProps) {
	return (
		<a href={href} target="_blank" rel="noopener noreferrer">
			<Chip startContent={icon} variant="faded" color="default">
				{description}
			</Chip>
		</a>
	);
}