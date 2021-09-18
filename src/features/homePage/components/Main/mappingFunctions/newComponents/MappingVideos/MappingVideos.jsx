import React from "react";
import classes from "./MappingVideos.module.scss";
import { getMainHeading } from "../../utility";
import Video from "./VideoContainer";

export function MappingVideos(props) {
	const { sectionVideos } = props;
	const VideosHeading = getMainHeading(
		sectionVideos.heading,
		sectionVideos.headingStyle,
		classes
	);
	// const [showVideo, setShowVideo] = React.useState(false);
	// const YT = iconsMap.youtube;
	return sectionVideos?.showSection ? (
		<section className={classes.MappingVideo} id={sectionVideos.id}>
			{VideosHeading}
			<div
				className={[classes.VideoGrid, classes.StyledScrollBarClass].join(" ")}
			>
				{sectionVideos.videoComponents.elements.map((element, index) => (
					<Video
						index={index}
						key={index}
						heading={element.heading}
						video_id={element.video_id}
					/>
				))}
			</div>
		</section>
	) : null;
}

/*
style={{
					backgroundImage:
						"linear-gradient(to right bottom, rgba(130, 231, 242, 0.8), rgba(100, 166, 255, 0.8)), url(/web/images/composition/cover-1.jpg)",
				}}
*/
