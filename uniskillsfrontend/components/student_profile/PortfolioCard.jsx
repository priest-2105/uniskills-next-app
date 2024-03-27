/* eslint-disable @next/next/no-img-element */
import Image from "next/image";
import { useRef } from "react";
import { Swiper, SwiperSlide, useSwiper } from "swiper/react";

import { Navigation, Pagination, Scrollbar, A11y } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

const PortfolioCard = ({ portfolio }) => {
	const navigationNextRef = useRef(null);
	const navigationPrevRef = useRef(null);

	const truncateText = (text, limit) => {
		const words = text.split(" ");
		return (
			words.slice(0, limit).join(" ") + (words.length > limit ? "..." : "")
		);
	};

	console.log(portfolio);

	return (
		<div
			style={{ overflowX: "hidden" }}
			className="rounded mb-4 border-0 shadow"
		>
			<div
				style={{
					position: "relative",
					height: "350px",
					overflowY: "hidden",
					"@media (max-width: 767px)": {
						height: "250px",
					},
				}}
			>
				<Swiper
					loop
					slidesPerView={1}
					pagination={{ clickable: true }}
					scrollbar={{ draggable: true }}
					onSwiper={(swiper) => {
						swiper.params.navigation.prevEl = navigationPrevRef.current;
						swiper.params.navigation.nextEl = navigationNextRef.current;
						swiper.navigation.init();
						swiper.navigation.update();
					}}
					navigation={{
						prevEl: navigationPrevRef.current,
						nextEl: navigationNextRef.current,
					}}
					onBeforeInit={(swiper) => {
						swiper.params.navigation.nextEl = navigationNextRef.current;
						swiper.params.navigation.prevEl = navigationPrevRef.current;
					}}
					onSlideChange={() => console.log("slide change")}
					modules={[Pagination, Navigation, A11y]}
				>
					{portfolio?.IMAGE_URL && (
						<SwiperSlide>
							<div
								style={{
									height: "350px",
								}}
								className="image-container"
							>
								<Image
									alt={portfolio?.TITLE}
									className="image-container"
									fill
									src={portfolio?.IMAGE_URL}
									// src={"/assets/img/business-details/code.jpg"}
									// objectFit="cover"
									// objectPosition="center"
									style={{ objectFit: "cover", objectPosition: "center" }}
								/>
							</div>
						</SwiperSlide>
					)}
					{portfolio?.IMAGE_URL_2 && (
						<SwiperSlide>
							<div
								style={{
									height: "350px",
								}}
								className="image-container"
							>
								<Image
									alt={portfolio?.TITLE}
									fill
									src={portfolio?.IMAGE_URL_2}
									// src={"/assets/img/business-details/code (2).jpg"}
									// objectFit="cover"
									// objectPosition="center"
									style={{ objectFit: "cover", objectPosition: "center" }}
								/>
							</div>
						</SwiperSlide>
					)}
					{portfolio?.IMAGE_URL_3 && (
						<SwiperSlide>
							<div
								style={{
									height: "350px",
								}}
								className="image-container"
							>
								<Image
									alt={portfolio?.TITLE}
									fill
									src={portfolio?.IMAGE_URL_3}
									style={{ objectFit: "cover", objectPosition: "center" }}
								/>
							</div>
						</SwiperSlide>
					)}
					{portfolio?.IMAGE_URL_4 && (
						<SwiperSlide>
							<div
								style={{
									height: "350px",
								}}
								className="image-container"
							>
								<Image
									alt={portfolio?.TITLE}
									fill
									src={portfolio?.IMAGE_URL_4}
									style={{ objectFit: "cover", objectPosition: "center" }}
								/>
							</div>
						</SwiperSlide>
					)}
					{portfolio?.IMAGE_URL_5 && (
						<SwiperSlide>
							<div
								style={{
									height: "350px",
								}}
								className="image-container"
							>
								<Image
									alt={portfolio?.TITLE}
									fill
									src={"/assets/img/business-details/code (2).jpg"}
									style={{ objectFit: "cover", objectPosition: "center" }}
								/>
							</div>
						</SwiperSlide>
					)}
				</Swiper>

				<div
					className="d-flex justify-content-between position-absolute left-0 top-50 w-100"
					style={{
						zIndex: "5",
						transform: "translateY(-50%)",
					}}
				>
					<button ref={navigationPrevRef} className="btn">
						<i style={{ scale: "1.5" }} class="bi bi-chevron-left"></i>
					</button>
					<button ref={navigationNextRef} className="btn">
						<i style={{ scale: "1.5" }} class="bi bi-chevron-right"></i>
					</button>
				</div>
			</div>
			<div className="p-3 bg-secondary">
				<h6 className="text-capitalize">{portfolio?.TITLE}</h6>
				<div class="student-skills mb-2">
					{portfolio?.PORTFOLIO_SKILLS?.split(",").map((skill, index) => {
						return (
							<span
								style={{ background: "#3f7fca" }}
								// href="#"
								key={index}
								class="btn btn-sm  rounded-pill m-1"
							>
								{skill}
							</span>
						);
					})}
				</div>
				<div
					dangerouslySetInnerHTML={{
						__html:
							truncateText(portfolio?.DESCRIPTION, 100) +
							(portfolio?.DESCRIPTION.split(" ").length > 100
								? "<span onClick={handleSeeMoreClick} className='text-muted fs-6' style='cursor: pointer; color: #204d74'> See more</span>"
								: ""
							).toString(),
					}}
				></div>
				<div className="text-end pe-3 pb-3">
					{/* <span>{portfolio?.DATE_STARTED}</span> -{" "} */}
					<span>{portfolio?.END_DATE ?? portfolio?.DATE_STARTED}</span>
				</div>
			</div>
		</div>
	);
};

export default PortfolioCard;
