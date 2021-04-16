// import node modules
import React, { useState, useEffect } from 'react';
import axios from 'axios';
// import local scripts
import useScript from '../utils/useScript.hook';
import Navbar from '../components/hoc/Navbar';
import ProductsHeader from '../components/products/ProductsHeader';
import CategorySidebar from '../components/products/CategorySidebar';
import SortDropdown from '../components/products/SortDropdown';
import ProductThumbnail from '../components/products/ProductThumbnail';
import Footer from '../components/hoc/Footer';

/**
 * This function returns the jsx for the /products endpoint
 * @returns Product List Page container jsx
 */
function Products() {
	// states
	const [ products, setProducts ] = useState([]);
	const [ searchValue, setSearchValue ] = useState('');
	const [ loading, setLoading ] = useState(false);

	// call useEffect hook to get product data from API
	useEffect(() => {
		setLoading(true);
		axios
			.get(
				`https://hha-capstone.herokuapp.com/api/customer/search?cate=${localStorage.getItem(
					'categoryInput'
				)}&sort=discount_price:${localStorage.getItem('sortInput')}`
			)
			.then((res) => {
				setProducts(res.data.content);
				setLoading(false);
			})
			.catch((err) => {
				console.log(err);
			});
	}, []);

	// handle search keyword
	const searchHandler = (value) => {
		setSearchValue(value);
	};

	// update product result based on user search keyword
	let updateProducts = products.filter((item) => {
		return item.product_name.toLowerCase().includes(searchValue);
	}, []);

	// call useScript hook
	useScript('https://d3e54v103j8qbb.cloudfront.net/js/jquery-3.5.1.min.dc5e7f18c8.js?site=5ff6189ef3859a509a1e9dfe');
	useScript('https://res.cloudinary.com/hsse18xji/raw/upload/v1612153620/HHA/js/webflow_vdcwdg.js');
	useScript('https://res.cloudinary.com/hntzzmpn9/raw/upload/v1612562182/hha/webflow_slud7c.js');

	// jsx
	return (
		<div>
			<Navbar />
			<ProductsHeader searchHandler={searchHandler} />
			<div class="product-list-section cc-product-list-section">
				<CategorySidebar />
				<div class="product-list-elements-wrapper">
					<SortDropdown />
					<div class="product-list-wrapper">
						<div class="product-list-wrap">
							{(searchValue === '' ? products : updateProducts).map((product) => (
								<div class="product" key={product.product_name}>
									<a
										href={`/#/product/${product.product_id}`}
										class="product-thumbnail-link w-inline-block"
									>
										<div
											class="product-thumbnail-image"
											style={{ backgroundImage: `url(${product.image_url})` }}
										/>
										<div class="cc-product-desc cc-product-desc-name">
											<div class="product-name-text">{product.product_name}</div>
										</div>
										<div class="cc-product-desc cc-product-desc-price">
											<div class="product-price-text">${product.discount_price}</div>
										</div>
									</a>
									<a
										href={`/#/product/${product.product_id}`}
										class="product-thumbnail-button-link w-inline-block"
									>
										<h6 class="product-thumbnail-button-text">read more</h6>
									</a>
								</div>
							))}
						</div>
					</div>
				</div>
			</div>
			<Footer />
		</div>
	);
}

// default export
export default Products;