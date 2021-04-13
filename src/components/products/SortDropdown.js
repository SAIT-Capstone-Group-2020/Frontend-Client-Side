import React from 'react';

const SortDropdown = () => {
	const handleSortClick = (e) => {
		if (e.target.innerText == 'Sort by price: low to high') {
			localStorage.setItem('sortInput', 'asc');
		}
		else if (e.target.innerText == 'Sort by price: high to low') {
			localStorage.setItem('sortInput', 'desc');
		}

		document.location.reload();
	};

	return (
		<div className="product-list-filter-wrap">
			<div className="product-list-filter w-clearfix">
				<div data-hover="" data-delay="0" className="product-list-filter-dropdown w-dropdown">
					<div className="product-list-filter-toggle w-dropdown-toggle">
						<div className="w-icon-dropdown-toggle" />
						<div className="product-list-filter-name">Choose Sort By</div>
					</div>
					<nav className="product-filter-dropdown-list w-dropdown-list">
						<a
							href="/#/products"
							onClick={handleSortClick}
							className="product-list-filter-option w-dropdown-link"
						>
							Sort by price: low to high
						</a>
						<a
							href="/#/products"
							onClick={handleSortClick}
							className="product-list-filter-option w-dropdown-link"
						>
							Sort by price: high to low
						</a>
					</nav>
				</div>
			</div>
		</div>
	);
};

SortDropdown.propTypes = {};

export default SortDropdown;
