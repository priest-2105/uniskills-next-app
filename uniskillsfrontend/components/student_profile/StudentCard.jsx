import Image from "next/image";
import Link from "next/link";
import config from "../../config";
import Stars from "../Stars";

const StudentCard = ({ student }) => {
	const truncateText = (text, limit) => {
		const words = text.split(" ");
		return (
			words.slice(0, limit).join(" ") + (words.length > limit ? "..." : "")
		);
	};

	console.log(student);
	return (
		<div className="student-list-card-container rounded mb-3 bg-secondary p-lg-3 p-md-3 p-sm-3 p-xs-3 col-lg-4 col-md-6 co-sm-12 col-xs-12">
			<div className="student-list-card rounded">
				<div className="d-flex align-items-center">
					<div className="student-list-image">
						<Image
							src={student.DP}
							className="rounded-5"
							width={100}
							height={90}
							alt="Uniskills Talents - Student Display Picture"
						/>
					</div>
					<div className="student-list-body">
						<div className="list-info">
							<h6>{student.FULLNAME}</h6>
							{student.EDUCATIONAL_LEVEL ? (
								<li className="d-flex align-items-center">
									<i className="bi bi-mortarboard-fill fs-4"></i>
									<span>{student.EDUCATIONAL_LEVEL}</span>
								</li>
							) : (
								<li className="d-flex align-items-center">
									<i className="bi bi-mortarboard-fill fs-4"></i>
									Education
								</li>
							)}
							<li>{student.PROFESSION}</li>
						</div>
					</div>
				</div>

				<div className="student-card-lower-body">
					{student.BIO ? (
						<p
							className="fs-sm fs-md-lg pe-md-3 text-gray-900"
							dangerouslySetInnerHTML={{
								__html:
									truncateText(student.BIO, 40) +
									(student.BIO.split(" ").length > 40
										? "<span className='text-muted' style='cursor: pointer'>See more</span>"
										: ""
									).toString(),
							}}
						/>
					) : null}

					<div className="skills d-flex align-items-center">
						{student.SKILLS.map((item, index) =>
							index > 3 ? null : (
								<span className="" key={index}>
									{item.trim()}
								</span>
							)
						)}
						<span className="bg-transparent px-0  text-primary">
							{student.SKILLS.length > 3 &&
								(student.SKILLS.length - 4 === 0
									? null
									: "+" + (student.SKILLS.length - 4))}
						</span>
					</div>
				</div>

				<div className="student-list-action">
					<div className="d-flex col-12">
						<li className="d-flex  col-12">
							<Stars rating={student.RATING} />

							<i className="ms-auto mt-1 bi bi-geo-alt-fill"></i>
							{student.LOCATION ?? "Location"}
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
