// import React, { useReducer, useEffect } from 'react';
// import useScript from '../utils/useScript.hook';
// import Navbar from '../components/hoc/Navbar';
// import ProductsHeader from '../components/products/ProductsHeader';
// import CategorySidebar from '../components/products/CategorySidebar';
// import SortDropdown from '../components/products/SortDropdown';
// import ProductThumbnail from '../components/products/ProductThumbnail';
// import Footer from '../components/hoc/Footer';

// const PRODUCT_API_URL = "https://hha-capstone.herokuapp.com/api/customer/product";

// const initialState = {
//   loading: true,
//   products: [],
//   errorMessage: null
// };

// const reducer = (state, action) => {
//   switch (action.type) {
//     case "SEARCH_PRODUCTS_REQUEST":
//       return {
//         ...state,
//         loading: true,
//         errorMessage: null
//       };
//     case "SEARCH_PRODUCTS_SUCCESS":
//       return {
//         ...state,
//         loading: false,
//         products: action.payload
//       };
//     case "SEARCH_PRODUCTS_FAILURE":
//       return {
//         ...state,
//         loading: false,
//         errorMessage: action.error
//       };
//     default:
//       return state;
//   }
// };

// const Products = () => {
//   useScript('https://d3e54v103j8qbb.cloudfront.net/js/jquery-3.5.1.min.dc5e7f18c8.js?site=5ff6189ef3859a509a1e9dfe');
// 	useScript('https://res.cloudinary.com/hsse18xji/raw/upload/v1612153620/HHA/js/webflow_vdcwdg.js');
//   useScript('https://res.cloudinary.com/hntzzmpn9/raw/upload/v1612562182/hha/webflow_slud7c.js');

// 	const [state, dispatch] = useReducer(reducer, initialState);

// 	useEffect(() => {
//     fetch(PRODUCT_API_URL)
//             .then(response => response.json())
//             .then(jsonResponse => {
//             dispatch({
//                 type: "SEARCH_PRODUCTS_SUCCESS",
//                 payload: jsonResponse.Search
//         	});
//       	});
//   	}, []);

// 	const search = searchValue => {
//     	dispatch({
//       	type: "SEARCH_PRODUCTS_REQUEST"
//     	});

//         fetch(`https://hha-capstone.herokuapp.com/api/customer/search?term=${searchValue}`)
//       	.then(response => response.json())
//       	.then(jsonResponse => {
//         	if (jsonResponse.Response === "True") {
//           	dispatch({
//                 type: "SEARCH_PRODUCTS_SUCCESS",
//                 payload: jsonResponse.Search
//           	});
//         	} else {
//           	dispatch({
//                 type: "SEARCH_PRODUCTS_FAILURE",
//                 error: jsonResponse.Error
//           	});
//           }
//         });
//     	};

// 	const { products, errorMessage, loading } = state;

// 	return (
// 		<div>
// 			<Navbar />
// 			<ProductsHeader search={search}/>
// 			<div class="product-list-section cc-product-list-section">
// 				<CategorySidebar />
// 				<div class="product-list-elements-wrapper">
// 					<SortDropdown />
// 					<div class="product-list-wrapper">
// 						<div class="product-list-wrap">
// 							{loading && !errorMessage ? (
//          <span>loading...</span>
//          ) : errorMessage ? (
//           <div>{errorMessage}</div>
//         ) : (
//           products.map((product, index) => (
// 			  <ProductThumbnail key={`${index}-${product.product_name}`}product={product}/>

//           ))
//         )}

// 						</div>
// 					</div>
// 				</div>
// 			</div>
// 			<Footer />
// 		</div>
// 	);
// };

// export default Products;

import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';
import useScript from '../utils/useScript.hook';
import Navbar from '../components/hoc/Navbar';
import ProductsHeader from '../components/products/ProductsHeader';
import CategorySidebar from '../components/products/CategorySidebar';
import SortDropdown from '../components/products/SortDropdown';
import ProductThumbnail from '../components/products/ProductThumbnail';
import Footer from '../components/hoc/Footer';

function Products() {
	const [ products, setProducts ] = useState([]);
	const [ searchValue, setSearchValue ] = useState('');
	const [ loading, setLoading ] = useState(false);
	// const [filteredProducts, setFilteredProducts] = useState([]);

	useEffect(() => {
		setLoading(true);
		axios
			.get('https://hha-capstone.herokuapp.com/api/customer/product')
			.then((res) => {
				setProducts(res.data);
				setLoading(false);
				console.log(res.data);
			})
			.catch((err) => {
				console.log(err);
			});
	}, []);

	const searchHandler = (value) => {
		setSearchValue(value);
	};

	let updateProducts = products.filter((item) => {
		return item.product_name.toLowerCase().includes(searchValue);
	}, []);

	// useEffect(() => {
	//   setFilteredProducts(
	//     products.filter((product) =>
	//       product.product_name.toLowerCase().includes(search.toLowerCase())
	//     )
	//   );
	// }, [search, products]);

	// if (loading) {
	//   return <p>Loading products...</p>;
	// }

	useScript('https://d3e54v103j8qbb.cloudfront.net/js/jquery-3.5.1.min.dc5e7f18c8.js?site=5ff6189ef3859a509a1e9dfe');
	useScript('https://res.cloudinary.com/hsse18xji/raw/upload/v1612153620/HHA/js/webflow_vdcwdg.js');
	useScript('https://res.cloudinary.com/hntzzmpn9/raw/upload/v1612562182/hha/webflow_slud7c.js');

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
									<a href="#" class="product-thumbnail-link w-inline-block">
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
									<a href="#" class="product-thumbnail-button-link w-inline-block">
										<h6 class="product-thumbnail-button-text">in store only</h6>
									</a>
								</div>
							))}

							{/* {loading && !errorMessage ? (
         <span>loading...</span>
         ) : errorMessage ? (
          <div>{errorMessage}</div>
        ) : (
          products.map((product, index) => (
			  <ProductThumbnail key={`${index}-${product.product_name}`}product={product}/>
			
          ))
        )}
							 */}
						</div>
					</div>
				</div>
			</div>
			<Footer />
		</div>
	);
}

export default Products;
