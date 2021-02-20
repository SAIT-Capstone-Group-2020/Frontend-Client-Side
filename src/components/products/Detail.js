import React from 'react';

const Detail = () => {
  return (
    <div classNameName="section cc-product-detail">
    <div className="product-image" style={{"backgroundImage":`url(${"https://www.google.com/imgres?imgurl=https%3A%2F%2Fcdn.i-scmp.com%2Fsites%2Fdefault%2Ffiles%2Fstyles%2F768x768%2Fpublic%2Fd8%2Fimages%2Fmethode%2F2020%2F10%2F13%2Fea674f86-076b-11eb-afc8-92e0da0ef1c3_image_hires_135401.jpg%3Fitok%3DEUh-DxEg%26v%3D1602568447&imgrefurl=https%3A%2F%2Fwww.scmp.com%2Fmagazines%2Fstyle%2Fcelebrity%2Farticle%2F3104886%2Fk-pop-idol-turned-k-drama-star-bae-suzy-5-things-about&tbnid=mvuEaS4HExIihM&vet=12ahUKEwjwqYbZ6NPuAhVKADQIHW9KAegQMygBegUIARC1AQ..i&docid=HD4SRN3z7V0_1M&w=768&h=768&q=suzy&ved=2ahUKEwjwqYbZ6NPuAhVKADQIHW9KAegQMygBegUIARC1AQ"})`}}></div>
    <div className="product-details-wrap">
      <div className="product-detail-main-details">
        <h1 className="product-detail-name">Product Name</h1>
        <div className="paragraph-light">Product Description</div>
      </div>
      <div className="divider cc-dark-divider"></div>
      <div className="product-info">
        <ul className="list w-list-unstyled">
          <li className="list-item">
            <div className="paragraph-light">Category</div>
            <div className="product-detail-measurement">
              <div className="product-detail-info cc-mid-text">Food Essentials</div>
            </div>
          </li>
          <li className="list-item">
            <div className="paragraph-light">Weight</div>
            <div className="product-detail-measurement">
              <div className="product-detail-info">2 oz</div>
            </div>
          </li>
        </ul>
      </div>
      <div className="product-detail-main-details">
        <div className="product-detail-price">$21.80</div>
      </div>
      <div className="add-to-cart">
        <form className="w-commerce-commerceaddtocartform add-to-cart-default-state"><label for="quantity-3f8ec8b146ca9ed4b1d9cb3082673eb" className="label">Quantity</label>
          <div className="product-detail-action-wrap">
              <input type="number" pattern="^[0-9]+$" name="commerce-add-to-cart-quantity-input" min="1" className="w-commerce-commerceaddtocartquantityinput input-field cc-quantity-field" value="1"/><input type="submit" value="Add To Cart" className="w-commerce-commerceaddtocartbutton button cc-product-detail-cart-button"/></div>
        </form>
        <div style={{"display":"none"}} className="w-commerce-commerceaddtocartoutofstock status-message">
          <div>This product is out of stock.</div>
        </div>
        {/* <div data-node-type="commerce-add-to-cart-error" style="display:none" className="w-commerce-commerceaddtocarterror error-state">
        </div> */}
      </div>
    </div>
  </div>
  );
};

Detail.propTypes = {};

export default Detail;