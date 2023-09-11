import { Chip } from "@nextui-org/chip";
import { Popover, PopoverTrigger, PopoverContent } from "@nextui-org/popover";
import { LockIcon } from "@/assets/icons";

import { PRIVATE_EVENT, PRIVATE_EVENT_DESCRIPTION } from "@/constants";

interface PrivateChipProps {}

export function PrivateChip({}: PrivateChipProps) {
	return (
		<Popover placement="bottom">
			<PopoverTrigger>
				<button>
					<Chip className="dark" startContent={<LockIcon width={12} height={12} className="m-1 mr-0" />} variant="faded" color="default">
						{PRIVATE_EVENT}
					</Chip>
				</button>
			</PopoverTrigger>
			<PopoverContent>
				<div className="px-1 py-2">
					<div className="text-small font-bold">{PRIVATE_EVENT}</div>
					<div className="text-tiny">{PRIVATE_EVENT_DESCRIPTION}</div>
				</div>
			</PopoverContent>
		</Popover>
	);
}
