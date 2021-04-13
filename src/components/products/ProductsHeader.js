import React from 'react';

const ProductsHeader = ({ searchHandler }) => {
	const handleSearchInputChange = (e) => {
		searchHandler(e.target.value);
	};

	const handleCategoryClick = (e) => {
		localStorage.setItem('categoryInput', e.target.innerText);
		document.location.reload();
	};

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

export default ProductsHeader;