import React from 'react';

/**
 * This function returns the jsx of the Category Sidebar Section
 * @returns Category sidebar component jsx
 */
const CategorySidebar = () => {
	// handle categoy click on computer size screen
	const handleCategoryClick = (e) => {
		// save user category input on local storage
		localStorage.setItem('categoryInput', e.target.innerText);
		// page refresh after category click
		document.location.reload();
	};

	// jsx
	return (
		<div className="store-heading-categories-wrap">
			<div className="category-link-list-wrapper">
				<div className="category-link-list-wrap cc-category-list">
					<div className="divider cc-product-category-divider" />
					<div className="category-link-wrapper">
						<a href="/#/products" onClick={handleCategoryClick} className="category-link">
							meat
						</a>
					</div>
					<div className="divider cc-product-category-divider" />
					<div className="category-link-wrapper">
						<a href="/#/products" onClick={handleCategoryClick} className="category-link">
							fruit
						</a>
					</div>
					<div className="divider cc-product-category-divider" />
					<div className="category-link-wrapper">
						<a href="/#/products" onClick={handleCategoryClick} className="category-link">
							seafood
						</a>
					</div>
					<div className="divider cc-product-category-divider" />
					<div className="category-link-wrapper">
						<a href="/#/products" onClick={handleCategoryClick} className="category-link">
							frozen
						</a>
					</div>
					<div className="divider cc-product-category-divider" />
					<div className="category-link-wrapper">
						<a href="/#/products" onClick={handleCategoryClick} className="category-link">
							snack
						</a>
					</div>
					<div className="divider cc-product-category-divider" />
					<div className="category-link-wrapper">
						<a href="/#/products" onClick={handleCategoryClick} className="category-link">
							dairy
						</a>
					</div>
					<div className="divider cc-product-category-divider" />
					<div className="category-link-wrapper">
						<a href="/#/products" onClick={handleCategoryClick} className="category-link">
							beauty &amp; household
						</a>
					</div>
					<div className="divider cc-product-category-divider" />
				</div>
			</div>
		</div>
	);
};

// default export
export default CategorySidebar;