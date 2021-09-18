import { nanoid } from "nanoid";
import { sectionIds } from "../../miscMappings";

export const sectionVideos = {
	id: sectionIds.sectionVideos,
	heading: "Workshop Talks and Tutorials",
	showSection: true,
	headingStyle: {},
	videoComponents: {
		//YT Only Supported
		elements: [
			{
				id: nanoid(),
				customThumbnail: false,
				video_id: "vRO0CXJC4Xw",
				heading: "Understanding the Merge Sort Algorithm",
			},

			{
				id: nanoid(),
				customThumbnail: false,
				video_id: "8ZFZhe2HoMY",
				heading: "Getting Started with Quickbooks API",
			},

			{
				id: nanoid(),
				customThumbnail: false,
				video_id: "wauI5R_y3D0",
				heading: "Converting an Internal HDD",
			},

			{
				id: nanoid(),
				customThumbnail: false,
				video_id: "WAR2-X3veaE",
				heading: "Virtual Gaming using OpenCV and Python",
			},
			{
				id: nanoid(),
				customThumbnail: false,
				video_id: "DDPfM5DF368",
				heading: "SpideyFolio: Open Source React Portfolio",
			},
		],
	},
};
