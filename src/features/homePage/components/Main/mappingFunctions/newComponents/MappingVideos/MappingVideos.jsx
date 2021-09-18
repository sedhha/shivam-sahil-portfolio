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
<div className={classes.VideoGridCard_Img__Container}>
					<div className={classes.VideoGridCard_PlayIconContainer}>
						{!showVideo && (
							<YT
								className={classes.VideoGridCard_PlayIcon}
								onClick={() => {
									setShowVideo(true);
								}}
							/>
						)}
					</div>
					{showVideo ? (
						<div className={classes.VideoGridCard_Img__Img}>
							<iframe
								title="yt video"
								id="player"
								type="text/html"
								style={{ width: "100%", height: "stretch" }}
								src={`https://www.youtube.com/embed/vRO0CXJC4Xw`}
								frameborder="0"
							></iframe>
						</div>
					) : (
						<img
							className={classes.VideoGridCard_Img__Img}
							src="https://i.ytimg.com/vi_webp/vRO0CXJC4Xw/mqdefault.webp"
							alt="video"
						/>
					)}
				</div>
*/
