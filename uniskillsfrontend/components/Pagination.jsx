const Pagination = ({ setPage, meta, isLoading }) => {
	const pagItems = Array.from({ length: meta.last_page }, (_, index) => {
		return (
			<li class="page-item" key={index}>
				<button
					className={`${
						meta.current_page === index + 1 ? "text-dark" : "text-muted"
					} page-link`}
					onClick={() => {
						setPage(index + 1);
					}}
					href='#'
				>
					{index + 1}
				</button>
			</li>
		);
	});

	const handleNext = () => {
		setPage((prev) => {
			if (meta?.current_page < meta?.last_page) {
				return prev + 1;
			} else {
			}
		});
	};

	const handledPrev = () => {
		setPage((prev) => {
			if (meta?.current_page > 1) {
				return prev - 1;
			} else {
			}
		});
	};

	return (
		<div className="d-flex">
			<nav aria-label="Page navigation example">
				<ul class="pagination">
					<li class="page-item">
						<button
							disabled={meta?.current_page === 1 || isLoading}
							className={`${
								meta?.current_page === 1 || isLoading ? "disabled" : ""
							} page-link`}
							aria-label="Previous"
							onClick={handledPrev}
						>
							<span aria-hidden="true">&laquo;</span>
						</button>
					</li>
					{pagItems}
					<li class="page-item">
						<button
							disabled={meta?.current_page === meta?.last_page || isLoading}
							className={` ${
								meta?.current_page === meta?.last_page || isLoading
									? "disabled"
									: ""
							} page-link`}
							// href="#"
							aria-label="Next"
							onClick={handleNext}
						>
							<span aria-hidden="true">&raquo;</span>
						</button>
					</li>
				</ul>
			</nav>
		</div>
	);
};

export default Pagination;
