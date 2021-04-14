import React from 'react';

/**
 * This function returns the jsx of the Product List page's Header Section
 * @param searchHandler Passed from Product List Page
 * @returns Product List Page Header component jsx
 */
const ProductsHeader = ({ searchHandler }) => {
	// handle search input
	const handleSearchInputChange = (e) => {
		// get user search input
		searchHandler(e.target.value);
	};

	// handle category click on mobile phone size screen
	const handleCategoryClick = (e) => {
		// save user category input on local storage
		localStorage.setItem('categoryInput', e.target.innerText);
		// page refresh after category click
		document.location.reload();
	};

	// jsx
	return (
		<div className="product-list-header-section cc-product-list-heading-section">
			<div className="product-list-header-container cc-heading-wrap">
				<h1 className="product-list-heading-1">Explore Our Products!</h1>
				<div className="store-product-search-bar-wrap">
					<form className="product-search-bar-wrapper w-form">
						<input
							onChange={handleSearchInputChange}
							type="text"
							className="search-bar-input-field w-input"
							maxlength="100"
							name="query"
							placeholder="Search for any product ..."
							required=""
						/>
						<input type="submit" value="Search" className="search-button w-button" disabled />
					</form>
				</div>
				<div className="store-heading-categories-wrap cc-heading-category">
					<div className="category-link-list-wrapper cc-heading-category">
						<div className="category-link-list-wrap cc-category-list cc-heading-category">
							<div className="category-link-wrapper cc-heading-category">
								<a
									href="/#/products"
									onClick={handleCategoryClick}
									className="category-link cc-heading-category"
								>
									meat
								</a>
							</div>
							<div className="category-link-wrapper cc-heading-category">
								<a
									href="/#/products"
									onClick={handleCategoryClick}
									className="category-link cc-heading-category"
								>
									fruit
								</a>
							</div>
							<div className="category-link-wrapper cc-heading-category">
								<a
									href="/#/products"
									onClick={handleCategoryClick}
									className="category-link cc-heading-category"
								>
									seafood
								</a>
							</div>
							<div className="category-link-wrapper cc-heading-category">
								<a
									href="/#/products"
									onClick={handleCategoryClick}
									className="category-link cc-heading-category"
								>
									frozen
								</a>
							</div>
							<div className="category-link-wrapper cc-heading-category">
								<a
									href="/#/products"
									onClick={handleCategoryClick}
									className="category-link cc-heading-category"
								>
									snack
								</a>
							</div>
							<div className="category-link-wrapper cc-heading-category">
								<a
									href="/#/products"
									onClick={handleCategoryClick}
									className="category-link cc-heading-category"
								>
									dairy
								</a>
							</div>
							<div className="category-link-wrapper cc-heading-category">
								<a
									href="/#/products"
									onClick={handleCategoryClick}
									className="category-link cc-heading-category"
								>
									beauty &amp; household
								</a>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

// default export
export default ProductsHeader;