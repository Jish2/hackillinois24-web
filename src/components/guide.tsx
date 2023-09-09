import { cn, titleString } from "@/utils";
import { getGradient } from "@/utils/event";

import { EVENT_TYPES } from "@/constants";

interface GuideProps {}

export function Guide({}: GuideProps) {
	return (
		<div className="">
			<h1 className="text-2xl font-semibold mb-2">Guide</h1>
			<ul className="flex flex-col gap-2">
				{EVENT_TYPES.map((type, index) => (
					<li key={index} className="flex gap-2">
						<span className="flex items-center">
							<div className={cn(getGradient(type), "rounded-full h-4 w-4 bg-white")}></div>
						</span>
						<span>{titleString(type)}</span>
					</li>
				))}
			</ul>
		</div>
	);
}
