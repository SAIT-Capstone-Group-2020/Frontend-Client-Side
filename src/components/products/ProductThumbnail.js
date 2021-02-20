import React, { Component } from 'react';

class ProductThumbnail extends Component {
  state = {
    loading: true,
        product: [],
    };

    async componentDidMount() {
        const url = "https://capstone-hha.herokuapp.com/api/customer/product";
        const response = await fetch(url);
        const data = await response.json();
      this.setState({ product: data, loading: false });
    }

    render() {
        return (
            <div>{this.state.loading || !this.state.product ? (
                <div>No product...</div>
          ) : (          
              <div class="product">
                {this.state.product.map((productDetail, index)=> {
                  return <div class="product">
                <a href="#" class="product-thumbnail-link w-inline-block">
                  <div class="product-thumbnail-image"></div>
                  <div class="cc-product-desc cc-product-desc-name">
                    <div class="product-name-text">{productDetail.product_name}</div>
                  </div>
                  <div class="cc-product-desc cc-product-desc-price">
                    <div class="product-price-text">${productDetail.sales_price}</div>
                  </div>
                </a>
                <a href="#" class="product-thumbnail-button-link w-inline-block">
                  <h6 class="product-thumbnail-button-text">in store only</h6>
                </a>
              </div>
          })}
              </div>

            
            )}
            </div>
        );
    }
}

export default ProductThumbnail;

// const ProductThumbnail = () => {
//   return (
//     <div class="product">
//         <a href="#" class="product-thumbnail-link w-inline-block">
//             <div class="product-thumbnail-image"></div>
//             <div class="cc-product-desc cc-product-desc-name">
//                 <div class="product-name-text">Product name</div>
//             </div>
//             <div class="cc-product-desc cc-product-desc-price">
//                 <div class="product-price-text">$XX.XX</div>
//             </div>
//         </a>
//         <a href="#" class="product-thumbnail-button-link w-inline-block">
//           <h6 class="product-thumbnail-button-text">in store only</h6>
//         </a>
//     </div>
//   );
// };