import Image from "next/image";
import Link from "next/link";
import config from "../../config";
import Stars from "../Stars";
import SkillComp from "../Skills";

const StudentCard = ({ student }) => {
	
	const truncateText = (text, limit) => {
		const words = text.split(" ");
		return (
			words.slice(0, limit).join(" ") + (words.length > limit ? "..." : "")
		);
	};

	return (
		<div className="w-100 rounded mb-3 bg-secondary p-3 col-lg-4 col-md-6 co-sm-12 col-xs-12">
			<div className="d-flex flex-column h-100 justify-content-between">
				<div className="d-flex  align-items-center">
					<div className="w-100 d-flex flex-column align-items-center">
						<Image
							src={student?.DP}
							className="rounded-circle "
							width={60}
							height={60}
							alt="Uniskills Talents - Student Display Picture"
						/>

						<h6 className="text-center mb-3">{student?.FULLNAME}</h6>

						{student.PROFESSION && (
							<li className="d-flex justify-content-center w-100 align-items-center">
								<i className="bi bi-mortarboard-fill fs-5"></i>
								<small className="">{student?.PROFESSION}</small>
							</li>
						)}

						<li className="d-flex text-sm fw-light">
							<small>{student?.EDUCATIONAL_LEVEL}</small>
						</li>
					</div>
				</div>

				<div className="student-card-lower-body text-center ">
					{student.BIO ? (
						<p
							className="fs-sm fs-md-lg text-gray-900"
							dangerouslySetInnerHTML={{
								__html:
									truncateText(student.BIO, 20) +
									(student.BIO.split(" ").length > 20 ? "..." : "").toString(),
							}}
						/>
					) : null}

					<SkillComp type="card" SKILLS={student?.SKILLS} />
				</div>

				<div className="student-list-action border-top mt-4 align-self-baseline">
					<div className="d-flex col-12">
						<li className="d-flex align-items-center col-12">
							<small>
								<Stars rating={student.RATING} />
							</small>
							{student.LOCATION && (
								<div className="ms-auto text-muted">
									<small className="bi bi-geo-alt-fill"></small>
									<small className="ps-1">{student.LOCATION}</small>
								</div>
							)}
						</li>
					</div>
					<Link
						href={`${config.STUDENT_PROFILE}/${student.CODEC}`}
						className="btn bg-primary btn-sm mb-1 col-12"
					>
						View Profile
					</Link>
				</div>
			</div>
		</div>
	);
};

export default StudentCard;
