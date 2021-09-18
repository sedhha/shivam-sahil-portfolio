import React from "react";
import classes from "./Participations.module.scss";
import { getMainHeading } from "../../utility";

export function MappingParticipants(props) {
	const { sectionsParticipations } = props;
	const participatioHeading = getMainHeading(
		sectionsParticipations.heading,
		sectionsParticipations.headingStyle,
		classes
	);
	return sectionsParticipations.showSection ? (
		<section
			className={classes.SectionDefinition}
			id={sectionsParticipations.id}
		>
			{participatioHeading}
		</section>
	) : null;
}
