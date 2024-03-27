import Image from "next/image";
import React from "react";
import Stars from "../Stars";

const ReviewCard = ({ REVIEW_INFO }) => {
	return (
		<div>
			<div class="py-2">
				<div class="d-flex flex-row align-items-center">
					<div class="review-img me-3">
						{REVIEW_INFO.PROFILE_IMAGE ? (
							<Image
								src={REVIEW_INFO.PROFILE_IMAGE}
								alt="ifeanyi image"
								class="review_image"
								width={50}
								height={50}
							/>
						) : (
							<div
								className="bg-secondary rounded-pill"
								style={{
									width: "50px",
									height: "50px",
									display: "grid",
									placeContent: "center",
									textTransform: "uppercase",
									fontWeight: "500",
								}}
							>
								{REVIEW_INFO.BUSINESS_NAME.slice(0, 3)}
							</div>
						)}
					</div>

					<div class="user-info py-3 d-flex flex-column">
						<p class="review_name mb-0">{REVIEW_INFO.BUSINESS_NAME}</p>
						<div class="qualification  align-items-center d-flex gap-2">
							<Stars rating={REVIEW_INFO.STAR_RATING} />
							<span>{REVIEW_INFO.DATE_POSTED}</span>
						</div>
					</div>

					{/* <button class="ms-auto btn text-dark">
						<i class="bi bi-share"></i>
					</button> */}
				</div>

				<div class="pt-3 review_text">
					<p>{REVIEW_INFO.REVIEW_TEXT}</p>
				</div>
				{/* <div class="">
					<button class="btn">
						<i class="bi text-primary  bi-hand-thumbs-up-fill"></i>
					</button>
					<button class="btn ms-2">
						<i class="bi text-primary bi-hand-thumbs-down-fill"></i>
					</button>
					<button class="btn text-primary review-report ms-2">
						Report this review
					</button>
				</div> */}
			</div>
			<hr />
		</div>
	);
};

export default ReviewCard;
