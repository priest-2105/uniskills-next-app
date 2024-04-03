import { useState } from "react";
import PortfolioCard from "./PortfolioCard";

const PortfolioTab = ({ PORT_INFO }) => {
	const [meta, setMeta] = useState({
		page: 1,
		itemsPerPage: 5,
	});

	return (
		<div
			className="tab-pane fade"
			id="pills-portfolio"
			role="tabpanel"
			aria-labelledby="pills-portfolio-tab"
			tabindex="0"
		>
			<div className="px-3">
				{PORT_INFO?.length > 0 ? (
					PORT_INFO?.map((port, index) => {
						return <PortfolioCard key={index} portfolio={port} />;
					}).slice(0, meta.page * meta.itemsPerPage)
				) : (
					<div
						style={{ borderRadius: "10px" }}
						className="bg-secondary py-1 ps-2 my-5"
					>
						<li> No portfolio added!</li>{" "}
					</div>
				)}
				{PORT_INFO?.length > meta.page * meta.itemsPerPage && (
					<div className="text-center">
						<button
							onClick={() => {
								setMeta((prev) => {
									return {
										...prev,
										page: prev.page + 1,
									};
								});
							}}
							className="btn text-primary"
						>
							See more
						</button>
					</div>
				)}
			</div>
		</div>
	);
};

export default PortfolioTab;
