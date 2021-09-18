import React from "react";
import classes from "./MappingVideos.module.scss";

export default function VideoContainer(props) {
	const { index, heading, video_id } = props;
	return (
		<div className={classes.GridElements}>
			<label
				className={
					index % 3 === 0
						? classes.GridLabel_blue
						: index % 2 === 0
						? classes.GridLabel_orange
						: classes.GridLabel_green
				}
			>
				{heading}
			</label>
			<div
				className="video"
				style={{
					position: "relative",
					paddingBottom: "56.25%" /* 16:9 */,
					paddingTop: 25,
					height: 0,
				}}
			>
				<iframe
					title="iframe_test"
					style={{
						position: "absolute",
						top: 0,
						left: 0,
						width: "100%",
						height: "100%",
					}}
					src={`https://www.youtube.com/embed/${video_id}`}
					frameBorder="0"
				/>
			</div>
		</div>
	);
}
