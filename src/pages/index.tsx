import { DateLabel } from "./../components/date-label";

import { FetchError } from "@/components/fetch-error";
import { CalendarPicker } from "@/components/calendar-picker";
import { Guide } from "@/components/guide";
import { EventsFilter } from "@/components/events-filter";

import { EVENTS_API } from "@/constants/api-url";

import type { GetStaticProps, InferGetStaticPropsType } from "next";
import type { Event } from "@/types/event.type";

async function getEvents(): Promise<Event[] | null> {
	try {
		const url = EVENTS_API;
		const response = await fetch(url);

		if (!response?.ok) {
			return null;
		}

		const { events } = await response.json();

		return events;
	} catch (error) {
		return null;
		/*
		 * In getStaticProps, if props === null, then the last
		 * cached data will be served.
		 */
	}
}

/*
 * Because I was unsure which Data Fetching method was "optimal" as
 * this is dependent on how frequent the data will update,
 *
 * I have both implementations for getServerSideProps and
 * getStaticProps.
 */

/*
export const getServerSideProps: GetServerSideProps<{
	events: Event[] | null;
}> = async () => {
	const events = await getEvents();
	return { props: { events }, revalidate: Number(process.env.REVALIDATE) || 60 };
};
 */ // InferGetServerSidePropsType<typeof getServerSideProps>

export const getStaticProps: GetStaticProps<{
	events: Event[] | null;
}> = async () => {
	const events = await getEvents();
	return { props: { events }, revalidate: Number(process.env.REVALIDATE) || 60 };
};

export default function Home({ events }: InferGetStaticPropsType<typeof getStaticProps>) {
	return (
		<div id="main-wrapper" className="flex sm:flex-row flex-col sm:overflow-clip">
			<aside
				id="sidebar-wrapper"
				className="w-full sm:max-w-[308px] sm:h-screen-nav flex sm:flex-col p-8 gap-12 justify-between sm:justify-normal max-w-[450px] mx-auto overflow-x-scroll"
			>
				<CalendarPicker events={events} />
				<Guide />
			</aside>
			<main id="main-content" className="pt-0 sm:pt-8 flex-1 sm:h-screen-nav sm:overflow-y-scroll p-8 flex flex-col gap-4 sm:pl-0">
				{events === null ? (
					/*
					 * this error component will only display if getServerSideProps is used,
					 * arbitrary for this implementation, as errors in fetch will prevent build from completing
					 */
					<FetchError />
				) : (
					<>
						<DateLabel />
						<EventsFilter events={events} />
					</>
				)}
			</main>
		</div>
	);
}
