import { EVENT_TYPES } from "@/constants";

export interface Event {
	id: string;
	name: string;
	description: string;
	startTime: number;
	endTime: number;
	locations: Location[];
	sponsor: string;
	eventType: EventType;
	points: number;
	isAsync: boolean;
	isPrivate: boolean;
	displayOnStaffCheckIn?: boolean;
}

export interface Location {
	description: string;
	tags: Tag[];
	latitude: number;
	longitude: number;
}

export enum Tag {
	cif = "CIF",
	eceb_1 = "ECEB1",
	siebel_0 = "SIEBEL0",
	siebel_1 = "SIEBEL1",
	siebel_2 = "SIEBEL2",
}

export type EventType = (typeof EVENT_TYPES)[number];
