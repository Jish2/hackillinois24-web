import { Button } from "@nextui-org/button";
import { ReloadIcon } from "@/assets/icons";

import { FETCH_FAILED, TRY_AGAIN } from "@/constants/error-messages";

interface FetchErrorProps {}

export function FetchError({}: FetchErrorProps) {
	return (
		<div className="w-full flex flex-col items-center gap-4">
			<p className="text-center">{FETCH_FAILED}</p>

			<Button color="primary" endContent={<ReloadIcon />} className="w-fit">
				{TRY_AGAIN}
			</Button>
		</div>
	);
}
