import React from 'react';
import useScript from '../utils/useScript.hook';

const Cart = () => {
	useScript('https://d3e54v103j8qbb.cloudfront.net/js/jquery-3.5.1.min.dc5e7f18c8.js?site=5ff6189ef3859a509a1e9dfe');
	useScript('https://res.cloudinary.com/hsse18xji/raw/upload/v1612153620/HHA/js/webflow_vdcwdg.js');
	useScript('https://res.cloudinary.com/hntzzmpn9/raw/upload/v1612562182/hha/webflow_slud7c.js');

	return (
		<div>
			<div data-open-product="" data-wf-cart-type="rightSidebar" className="w-commerce-commercecartwrapper cart">
				<a href="#" className="w-commerce-commercecartopenlink button cc-cart w-inline-block">
					<div
						// style={{"display":" none"}}
						data-count-hide-rule="always"
						className="w-commerce-commercecartopenlinkcount cart-quantity"
					>
						0
					</div>
					<div className="w-inline-block">Cart</div>
				</a>
				<div // style={{"display":" none"}}
				className="w-commerce-commercecartcontainerwrapper w-commerce-commercecartcontainerwrapper--cartType-rightSidebar cart-wrapper">
					<div className="w-commerce-commercecartcontainer cart-container">
						<div className="w-commerce-commercecartheader cart-header">
							<h4 className="head-jumbo-tiny">your cart</h4>
							<a href="#" className="w-commerce-commercecartcloselink close-button w-inline-block">
								<img src="images/close-icon.svg" width="16" alt="" className="icon" />
							</a>
						</div>
						<div className="w-commerce-commercecartformwrapper cart-form-wrapper">
							<form // style={{"display":" none"}}
							className="w-commerce-commercecartform cart-default-state">
								<div className="test-cart-list">
									<div className="test-cart-item">
										<img
											src="images/dev_image.png"
											srcset="images/dev_image-p-500.png 500w, images/dev_image.png 530w"
											sizes="(max-width: 479px) 100vw, (max-width: 767px) 44vw, (max-width: 991px) 53vw, 24vw"
											alt=""
											className="w-commerce-commercecartitemimage test-cart-image"
										/>
										<div className="test-cart-item-info-wrap">
											<div className="w-commerce-commercecartproductname test-product-name-text test-cc-name-text-cart">
												Beef Finger Meat Whole Pack
											</div>
											<div className="test-cart-price">$ 8.99</div>
											<div className="test-cart-option-list">
												<div className="test-cart-option-wrap">
													<div className="test-cart-option-type">Weight: </div>
													<div className="test-cart-option-item-value">1lb</div>
												</div>
												<a href="#" className="test-cart-remove-button w-button">
													REMOVE
												</a>
											</div>
										</div>
										<div className="test-input-field">1</div>
									</div>
								</div>
								<script
									type="text/x-wf-template"
									id="wf-template-338fcf85-0add-3b81-68ce-59ae991bfb80"
								/>
								<div
									className="w-commerce-commercecartlist cart-list"
									data-wf-collection="database.commerceOrder.userItems"
									data-wf-template-id="wf-template-338fcf85-0add-3b81-68ce-59ae991bfb80"
								/>
								<div className="w-commerce-commercecartfooter cart-footer">
									<div className="w-commerce-commercecartlineitem cart-item-total">
										<div>Subtotal</div>
										<div className="w-commerce-commercecartordervalue paragraph-bigger cart-item-total-price">
											$8.99 CAD
										</div>
									</div>
									<a
										href="#"
										value="Continue to Checkout"
										className="w-commerce-commercecartcheckoutbutton button cc-cart-button"
									>
										Continue to Checkout
									</a>
									{/* <div className="checkout-actions">
												<div
													className="cart-payment-buttons"
												>
													<a
														href="#"
														value="Continue to Checkout"
														className="w-commerce-commercecartcheckoutbutton button cc-cart-button"
													>
														Continue to Checkout
													</a>
												</div>
											</div> */}
								</div>
							</form>
							{/* <div className="w-commerce-commercecartemptystate cart-empty-state">
										<div className="paragraph-light">No products in the cart.</div>
									</div> */}
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Cart;
