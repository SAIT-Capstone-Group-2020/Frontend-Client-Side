import React from 'react';

const CategorySidebar = () => {
	const handleCategoryClick = (e) => {
		localStorage.setItem('categoryInput', e.target.innerText);
		document.location.reload();
	};

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

export default CategorySidebar;