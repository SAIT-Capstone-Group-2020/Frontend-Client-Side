import React from 'react';

const WeeklySale = () => {
  return (
    <div className="weekly-sale-wrapper">
      <div className="container main-page-header-container">
        <div className="products-heading main-page-heading">
          <h1 className="main-page-header featured-h1">
            Weekly
            <br />
            <span className="main-page-header-span">Sale</span>
          </h1>
        </div>
      </div>
      <div className="weekly-sale-img" style={{"backgroundImage": `url(${"https://mysait-my.sharepoint.com/personal/michael_doctor_edu_sait_ca/Documents/Microsoft%20Teams%20Chat%20Files/Screen%20Shot%202021-01-24%20at%201.27.14%20PM.png"})`}}></div>
    </div>
  );
};

export default WeeklySale;
