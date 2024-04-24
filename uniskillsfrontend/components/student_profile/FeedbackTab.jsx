import React from "react";
import ReviewCard from "./ReviewCard";
import Link from "next/link";

const FeedbackTab = ({
	STAR_RATINGS_DISTRIBUTION,
	RATINGS_COUNT,
	REVIEWS_INFO,
	AVERAGE_RATING,
	HAS_MORE_REVIEWS,
}) => {
	console.log(HAS_MORE_REVIEWS, STAR_RATINGS_DISTRIBUTION);
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
							className="pb-3 d-lg-flex d-md-flex"
							style={{ alignItems: "center" }}
						>
							<div className="">
								<h2 className="">Client Reviews</h2>
								<h5
									style={{ fontSize: "3rem" }}
									className="text-white fw-semibold"
								>
									{AVERAGE_RATING}
								</h5>
								<p className="">{RATINGS_COUNT} reviews</p>
							</div>
							<div className="">
								<div className="ms-5">
									{STAR_RATINGS_DISTRIBUTION?.map((rating, index) => {
										return (
											<div
												key={index}
												className="mt-1 d-flex align-items-center"
												style={{ alignItems: "center" }}
											>
												<span
													style={{ minWidth: "20px" }}
													className="star_text fs-3 fw-2"
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
													style={{ height: "10px", width: "100px" }}
													className="progress_bar five ms-2 rounded-0"
												></progress>
												<span className="ms-2 fw-semibold">
													{rating.PERCENTAGE > 0
														? rating?.PERCENTAGE.toFixed(2)
														: rating?.PERCENTAGE}
													%
												</span>
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
									<li>No review found</li>{" "}
								</div>
							)}

							<div className="row">
								<nav
									className="pagination-nav w-auto mx-auto my-5"
									aria-label="Page navigation example pagination-bottom"
								>
									{HAS_MORE_REVIEWS && (
										<Link href="#" className="text-primary btn">
											See more
										</Link>
									)}
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
