import Head from "next/head";

export default function Preloader() {
	return (
		<>
			<Head>
				{/* Required meta tags */}
				<meta charSet="utf-8" />
				<meta name="theme-color" content="#000000" />
				<meta name="description" content=" ." />
				<meta
					name="viewport"
					content="width=device-width, initial-scale=1, shrink-to-fit=no"
				/>
				<meta name="keywords" content="" />
				<meta name="author" content=" " />
				{/* End Required meta tags */}

				{/* Begin SEO tag */}
				<meta property="og:title" content="UniSkills" />
				<meta property="og:locale" content="en_US" />
				<meta
					property="og:description"
					content="Study, connect, collaborate, and deliver business projects."
				/>
				<meta property="og:site_name" content="UniSkills" />
				{/* End SEO meta tags */}
			</Head>
			<style jsx>{`
				.preload-circle {
					animation: animate 1s ease-in-out infinite;
				}

				@keyframes animate {
					0% {
						transform: scale(1);
					}
					50% {
						transform: scale(0);
					}
					100% {
						transform: scale(1);
					}
				}
			`}</style>
			<div
				style={{
					height: "100vh",
					width: "100%",
					display: "flex",
					alignItems: "center",
					justifyContent: "center",
				}}
				className="col-12 bg-white d-flex justify-content-center align-items-center"
			>
				<div className="d-flex flex-column align-items-center">
					<div
						className="preload-circle rounded-circle bg-light"
						style={{
							width: "50px",
							height: "50px",
							marginBottom: "5px",
							background: "#f5f5f9",
							borderRadius: "50%",
							fontFamily: "san-serif"
						}}
					></div>
					<span className="text-muted">Loading...</span>
				</div>
			</div>
		</>
	);
}
