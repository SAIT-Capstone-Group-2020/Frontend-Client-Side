import React from 'react';
import { Link } from 'react-router-dom';

const CategorySidebar = () => {
	const handleClick = e => {
		localStorage.setItem('categoryInput', e.target.innerText);
		document.location.reload();
	}
	
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
						{/* <Link to={{ pathname: '/products', state: { category: 'meat'} }} className="category-link">
							meat
						</Link> */}
						{/* <Link to={{ pathname: '/products', state: { category: 'meat'} }} className="category-link">
							meat
						</Link> */}
						<a href="/#/products" onClick={ handleClick } className="category-link">
              meat
            </a>
					</div>
					<div className="divider cc-product-category-divider" />
					<div className="category-link-wrapper">
						{/* <Link to={{ pathname: '/products', state: { category: 'fruit'} }} className="category-link">
							fruit &amp; vegetables
						</Link> */}
						<a href="/#/products" onClick={ handleClick } className="category-link">
              fruit
            </a>
					</div>
					<div className="divider cc-product-category-divider" />
					<div className="category-link-wrapper">
						{/* <Link to={{ pathname: '/products', state: { category: 'seafood'} }} className="category-link">
							seafood
						</Link> */}
						<a href="/#/products" onClick={ handleClick } className="category-link">
              seafood
            </a>
					</div>
					<div className="divider cc-product-category-divider" />
					<div className="category-link-wrapper">
						{/* <Link to={{ pathname: '/products', state: { category: 'frozen'} }} className="category-link">
							dairy &amp; frozen
						</Link> */}
						<a href="/#/products" onClick={ handleClick } className="category-link">
              frozen
            </a>
					</div>
					<div className="divider cc-product-category-divider" />
					<div className="category-link-wrapper">
						{/* <Link to={{ pathname: '/products', state: { category: 'snack'} }} className="category-link">
							snacks
						</Link> */}
						<a href="/#/products" onClick={ handleClick } className="category-link">
              snack
            </a>
					</div>
					<div className="divider cc-product-category-divider" />
					<div className="category-link-wrapper">
						{/* <Link
							to={{ pathname: '/products', state: { category: 'food essentials'} }}
							className="category-link"
						>
							food essentials
						</Link> */}
						<a href="/#/products" onClick={ handleClick } className="category-link">
              dairy
            </a>
					</div>
					<div className="divider cc-product-category-divider" />
					<div className="category-link-wrapper">
						{/* <Link to={{ pathname: '/products', state: { category: 'beauty'} }} className="category-link">
							beauty &amp; household
						</Link> */}
						<a href="/#/products" onClick={ handleClick } className="category-link">
              beauty & household
            </a>
					</div>
					<div className="divider cc-product-category-divider" />
				</div>
			</div>
		</div>
	);
};

export default CategorySidebar;