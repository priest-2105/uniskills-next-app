import React from "react";
import ReviewCard from "./ReviewCard";

const FeedbackTab = ({
	STAR_RATINGS_DISTRIBUTION,
	RATINGS_COUNT,
	REVIEWS_INFO,
	AVERAGE_RATING,
}) => {
	return (
		<div
			className="tab-pane fade"
			id="pills-review"
			role="tabpanel"
			aria-labelledby="pills-review-tab"
			tabindex="0"
		>
			<div className="widget-stat bg-transparent rounded">
				<div className="container-xxl mb-5">
					<div className="col-12 col-xl-12">
						<div
							className="reveiw_header_container pb-3 d-lg-flex d-md-flex"
							style={{ alignItems: "center" }}
						>
							<div className="client_review ">
								<h2 className="mb-0">Client Reviews</h2>
								<span className="fs-2">{AVERAGE_RATING}</span>
								<p>{RATINGS_COUNT} reviews</p>
							</div>
							<div className="">
								<div className="ms-lg-5">
									{STAR_RATINGS_DISTRIBUTION?.map((rating, index) => {
										return (
											<div
												key={index}
												className="client_review_star mt-1 d-flex align-items-center flex-row"
												style={{ alignItems: "center" }}
											>
												<span
													style={{ minWidth: "20px" }}
													className="star_text fs-4 fw-3"
												>
													{rating?.STAR_RATING}
												</span>
												<i
													className="bi bi-star-fill ms-1 fs-5 text-warning
"
												></i>
												<progress
													value={`${rating?.PERCENTAGE}`}
													max="100"
													className="progress_bar five ms-2"
												></progress>
												<span className="ms-2">{rating?.COUNT}</span>
											</div>
										);
									})}
								</div>
							</div>
						</div>

						<div className="col-12">
							<hr />
							{REVIEWS_INFO?.length > 0 ? (
								REVIEWS_INFO?.map((review, index) => {
									return <ReviewCard REVIEW_INFO={review} key={index} />;
								})
							) : (
								<div
									style={{ borderRadius: "10px" }}
									className="bg-secondary py-1 ps-2 my-5"
								>
									<li>No Review</li>{" "}
								</div>
							)}

							<div className="row">
								<nav
									className="pagination-nav w-auto mx-auto my-5"
									aria-label="Page navigation example pagination-bottom"
								>
									{/* {REVIEWS_INFO.length > 10 && (
										<button className="text-primary">See more</button>
									)} */}
								</nav>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default FeedbackTab;
