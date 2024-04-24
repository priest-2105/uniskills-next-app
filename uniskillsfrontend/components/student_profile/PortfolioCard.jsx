/* eslint-disable @next/next/no-img-element */
import { useRef, useState } from "react";
import SkillComp from "../Skills";

//const styles = { height: 400, width: "100%" };
const rightIcon = <span className="bi bi-chevron-right" />;
const leftIcon = <span className="bi bi-chevron-left" />;

const PortfolioCard = ({ portfolio }) => {
	const [currentIndex, setCurrentIndex] = useState(0);

	const { IMAGE_URL, IMAGE_URL_2, IMAGE_URL_3, IMAGE_URL_4, IMAGE_URL_5 } =
		portfolio;

	const imageUrlArray = [
		IMAGE_URL,
		IMAGE_URL_2,
		IMAGE_URL_3,
		IMAGE_URL_4,
		IMAGE_URL_5,
	].filter((url) => url !== null);

	const handlePrev = () => {
		setCurrentIndex((prevIndex) =>
			prevIndex === 0 ? imageUrlArray.length - 1 : prevIndex - 1
		);
	};

	const handleNext = () => {
		setCurrentIndex((prevIndex) =>
			prevIndex === imageUrlArray.length - 1 ? 0 : prevIndex + 1
		);
	};

	return (
		<>
			<style>
				{`
			 .controls{
				position: absolute;
				display: flex;
				justify-content: space-between;
				left: 0;
				width: 100%;
				top: 50%;
				transform: translateY(-50%)
			 }

			 .nav-btn:hover{
				opacity: 1 !important;
			 }
			`}
			</style>
			<div className="shadow-sm mb-5">
				<div
					style={{ height: "350px" }}
					className="position-relative overflow-hidden"
				>
					{imageUrlArray?.map((item, index) => {
						return (
							<div
								key={index}
								style={{
									height: "350px",
									position: "absolute",
									top: 0,
									left: 0,
									width: "100%",
									transition: "all .6s ease-in-out",
									transform: `translateX(${100 * (index - currentIndex)}%)`,
								}}
							>
								<img
									src={item}
									class="d-block w-100 h-100"
									alt={portfolio?.TITLE}
								/>
							</div>
						);
					})}
					{imageUrlArray.length > 1 && (
						<div className="controls px-2">
							<button
								onClick={handlePrev}
								className="nav-btn border-0 bg-transparent opacity-50"
							>
								<i className="bi text-white fs-1 bi-chevron-left" />
							</button>
							<button
								onClick={handleNext}
								className="nav-btn border-0 bg-transparent opacity-50"
							>
								<i className="bi text-white fs-1 bi-chevron-right" />
							</button>
						</div>
					)}
				</div>
				<div
					style={{ transform: "translateY(-20px)" }}
					className="d-flex gap-2 justify-content-center"
				>
					{imageUrlArray.map((_, index) => (
						<button
							type="button"
							onClick={() => setCurrentIndex(index)}
							className={`border-0 ${
								index === currentIndex ? "opacity-100 " : "opacity-50"
							}`}
							style={{
								width: "30px",
								height: "3px",
								background: "white",
								transition: "opacity .6s ease-in-out",
							}}
							key={index}
						></button>
					))}
				</div>
				<div className="p-3 bg-secondary">
					<p className="text-capitalize fw-bold">{portfolio?.TITLE}</p>
					<div
						dangerouslySetInnerHTML={{
							__html: portfolio?.DESCRIPTION,
						}}
					></div>
				</div>
			</div>
		</>
	);
};

export default PortfolioCard;
