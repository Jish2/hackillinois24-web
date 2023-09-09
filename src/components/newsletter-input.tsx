import { FormEvent, useEffect } from "react";

import { EmailIcon, SendIcon } from "@/assets/icons";
import { Button, Input } from "@nextui-org/react";

import { useNewsletter } from "@/hooks/useNewsletter";

export function NewsletterInput() {
	const { addEmailToNewsletter, isLoading, data, error } = useNewsletter();

	useEffect(() => {
		if (error !== null) {
			alert(error);
		}
	}, [error]);

	useEffect(() => {
		if (data !== null) {
			alert("Success!");
		}
	}, [data]);

	async function handleAddToNewsletter(event: FormEvent<HTMLFormElement>) {
		event.preventDefault();

		const input = String((event.target as any)[0].value);

		addEmailToNewsletter(input);
	}

	return (
		<form onSubmit={handleAddToNewsletter} className="flex gap-2">
			<Input
				classNames={{
					base: "max-w-full sm:max-w-[10rem] h-10",
					mainWrapper: "h-full",
					input: "text-small",
					inputWrapper: "h-full font-normal text-default-500 bg-default-400/20 dark:bg-default-500/20",
				}}
				placeholder="Join newsletter"
				size="sm"
				startContent={<EmailIcon width={16} height={16} className="m-1" />}
				type="search"
				disabled={isLoading}
			/>
			<Button disabled={isLoading} isIconOnly color="primary" aria-label="Join newsletter button" type="submit" className="rounded-[8px]">
				<SendIcon width={16} height={16} />
			</Button>
		</form>
	);
}
