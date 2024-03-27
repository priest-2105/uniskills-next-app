import React from "react";

const VideoCV = ({ BASIC_INFO }) => {
	return (
		<>
			<div
				className="video-cv-card-container bg-secondary rounded mb-5 bg-secondary pt-2 ps-1 pe-1 pb-4"
				id="scroll-video-cv"
			>
				<div className="video-cv-card pb-4">
					<h5 className="ms-2 mt-1">Video CV</h5>
					<iframe
						width="100%"
						height="400"
						// src={`https://www.youtube.com/embed/c_PZTAW5piQ`}
						src={`https://www.youtube.com/embed/${BASIC_INFO?.VIDEO_CV}`}
						title="YouTube video player"
						frameborder="0"
						allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
						allowfullscreen
					></iframe>
				</div>
			</div>
			<div className="video-cv-card-container-mobile mb-5 bg-secondary pt-2 ps-1 pe-1 pb-4">
				<div className="video-cv-card pb-4">
					<h5 className="ms-2 mt-1">Video CV</h5>
					<iframe
						width="100%"
						height="400"
						// src={`https://www.youtube.com/embed/c_PZTAW5piQ`}
						src={`https://www.youtube.com/embed/${BASIC_INFO?.VIDEO_CV}`}
						title="YouTube video player"
						frameborder="0"
						allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
						allowfullscreen
					></iframe>
				</div>
			</div>
		</>
	);
};

export default VideoCV;
