import { nanoid } from "nanoid";
import { sectionIds } from "../../miscMappings";

export const sectionParticipations = {
	id: sectionIds.sectionParticipations,
	showSection: true,
	heading: "Events And Participations",
	headingStyle: {},
	elements: [
		{
			id: nanoid(),
		},
	],
};
