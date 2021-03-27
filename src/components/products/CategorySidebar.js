import React from 'react';
import { Link } from 'react-router-dom';

const CategorySidebar = () => {
	return (
		<div className="store-heading-categories-wrap">
			<div className="category-link-list-wrapper">
				<div className="category-link-list-wrap cc-category-list">
					{/* <div className="divider cc-product-category-divider" /> */}
					{/* <div className="category-link-wrapper"> */}
					{/* <Link
							to={{ pathname: '#//products', state: { category: '' } }}
							aria-current="page"
							className="category-link w--current"
						>
							all products
						</Link> */}
					{/* </div> */}
					<div className="divider cc-product-category-divider" />
					<div className="category-link-wrapper">
						<Link to={{ pathname: '/products', state: { category: 'meat', sort: 'asc' } }} className="category-link">
							meat
						</Link>
					</div>
					<div className="divider cc-product-category-divider" />
					<div className="category-link-wrapper">
						<Link to={{ pathname: '/products', state: { category: 'fruit', sort: 'asc' } }} className="category-link">
							fruit &amp; vegetables
						</Link>
					</div>
					<div className="divider cc-product-category-divider" />
					<div className="category-link-wrapper">
						<Link to={{ pathname: '/products', state: { category: 'seafood', sort: 'asc' } }} className="category-link">
							seafood
						</Link>
					</div>
					<div className="divider cc-product-category-divider" />
					<div className="category-link-wrapper">
						<Link to={{ pathname: '/products', state: { category: 'frozen', sort: 'asc' } }} className="category-link">
							dairy &amp; frozen
						</Link>
					</div>
					<div className="divider cc-product-category-divider" />
					<div className="category-link-wrapper">
						<Link to={{ pathname: '/products', state: { category: 'snack', sort: 'asc' } }} className="category-link">
							snacks
						</Link>
					</div>
					<div className="divider cc-product-category-divider" />
					<div className="category-link-wrapper">
						<Link
							to={{ pathname: '/products', state: { category: 'food essentials', sort: 'asc' } }}
							className="category-link"
						>
							food essentials
						</Link>
					</div>
					<div className="divider cc-product-category-divider" />
					<div className="category-link-wrapper">
						<Link to={{ pathname: '/products', state: { category: 'beauty', sort: 'asc' } }} className="category-link">
							beauty &amp; household
						</Link>
					</div>
					<div className="divider cc-product-category-divider" />
				</div>
			</div>
		</div>
	);
};

export default CategorySidebar;