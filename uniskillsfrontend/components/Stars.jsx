import React from "react";

const Stars = ({ rating, type = null }) => {
	const tempStars = Array.from({ length: 5 }, (_, index) => {
		const number = index + 0.5;

		return (
			<div className="" key={index}>
				{Number(rating) > number ? (
					<span>
						<i class="bi text-warning bi-star-fill"></i>
					</span>
				) : Number(rating) > index ? (
					<span>
						<i class="text-warning bi bi-star-half"></i>
					</span>
				) : (
					<span>
						<i class="text-warning bi bi-star"></i>
					</span>
				)}
			</div>
		);
	});
	return (
		<div className="d-flex gap-1 align-items-center">
			{tempStars}{" "}
			{type !== "review" && (
				<span className="mt-1 text-muted fs-8">
					{rating == 0 ? "0.00" : rating}
				</span>
			)}
		</div>
	);
};

export default Stars;
