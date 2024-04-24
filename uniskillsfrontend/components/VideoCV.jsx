import React from "react";

const VideoCV = ({ BASIC_INFO }) => {
	return (
		<>
			<div className="px-3 bg-secondary rounded py-3">
				<div className="">
					<h5 className="py-0 my-0 mb-4">Video CV</h5>
					<iframe
						className="px-0 mx-0 w-100"
						width="100%"
						height="300px"
						//https://player.vimeo.com/video/708322704?h=
						// src={`https://player.vimeo.com/video/708322704?h=${BASIC_INFO?.VIDEO_CV}`}
						src={`https://player.vimeo.com/video/${BASIC_INFO?.VIDEO_CV}`}
						title="YouTube video player"
						frameborder="0"
						allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
						allowfullscreen
					></iframe>
				</div>
			</div>
			{/* <div className="video-cv-card-container-mobile mb-5 bg-secondary pt-2 ps-1 pe-1 pb-4">
				<div className="video-cv-card pb-4">
					<h5 className="ms-2 mt-1">Video CV</h5>
					<iframe
						width="100%"
						height="300px"
						src={`https://player.vimeo.com/video/${BASIC_INFO?.VIDEO_CV}`}
						title="YouTube video player"
						frameborder="0"
						allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
						allowfullscreen
					></iframe>
				</div>
			</div> */}
		</>
	);
};

export default VideoCV;
