import { useState } from "react";

import { validateEmail } from "@/utils";

type NewsletterResponse =
	| {
			status: "Succesful";
	  }
	| { error: "InvalidParams" };

export const useNewsletter = () => {
	const [data, setData] = useState<NewsletterResponse | null>(null);
	const [isLoading, setIsLoading] = useState<boolean>(false);
	const [error, setError] = useState<string | null>(null);

	async function addEmailToNewsletter(email: string) {
		try {
			setIsLoading(true);

			const validatedEmailRegex = validateEmail(email);

			let validatedEmail;

			if (validatedEmailRegex !== null && validatedEmailRegex.length > 0) {
				validatedEmail = validatedEmailRegex[0];
			} else {
				throw new Error("Invalid email!");
			}

			const response = await fetch("https://adonix.hackillinois.org/newsletter/subscribe/", {
				method: "POST",
				body: JSON.stringify({
					listName: "2024_attendee_interest",
					emailAddress: validatedEmail,
				}),
			});

			if (!response?.ok) {
				throw new Error(response.statusText);
			}

			const json = await response.json();

			setIsLoading(false);
			setData(json);
			setError(null);
		} catch (error) {
			setError(`Error has occured: ${error}`);
			setIsLoading(false);
		}
	}

	return { addEmailToNewsletter, data, isLoading, error };
};
