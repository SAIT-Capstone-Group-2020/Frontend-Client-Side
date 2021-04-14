import React from 'react';

/**
 * This function returns the jsx of the Price Sort Dropdown Section of Product List Page
 * @returns Price sort dropdown component jsx
 */
const SortDropdown = () => {
	// handle sort dropdown click
	const handleSortClick = (e) => {
		// save user sort input on local storage
		if (e.target.innerText == 'Sort by price: low to high') {
			localStorage.setItem('sortInput', 'asc');
		}
		else if (e.target.innerText == 'Sort by price: high to low') {
			localStorage.setItem('sortInput', 'desc');
		}

		// page refresh after price sort dropdown click
		document.location.reload();
	};

	// jsx
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

// default export
export default SortDropdown;