import Image from "next/image";
import useOthers from "@/hooks/useOthers";

const EducationCard = ({ education, NEUTRAL_IMAGE }) => {
	const { schoolInfo } = useOthers(education.INSTITUTION);

	return (
		<div class="left">
			<div
				style={{ background: "#EFBAE6" }}
				className="content card rounded mb-3"
			>
				<div className="education-timeline align-items-center px-4 py-2">
					<div className="image-container">
						<Image
							src={schoolInfo?.logo ?? NEUTRAL_IMAGE}
							width={50}
							height={50}
							objectFit="cover"
							alt={schoolInfo?.name}
						/>
					</div>
					<div className="ms-3">
						<span style={{ color: "#576071" }}>
							{education?.DATE_STARTED} - {education?.GRADUATION_DATE}
						</span>
						<h6 className="mb-0 text-capitalize">{education?.INSTITUTION}</h6>
						<p className="mb-0">{education.CERTIFICATE_TYPE}</p>
						<p className="mb-0">{education?.COURSE_OF_STUDY}</p>
					</div>{" "}
				</div>
			</div>
		</div>
	);
};

export default EducationCard;
