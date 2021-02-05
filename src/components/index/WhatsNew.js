import React from 'react';
import PropTypes from 'prop-types';
import NewItem from './NewItem';

const WhatsNew = () => {
  return (
    <div className="whats-new-wrapper">
      <div className="container main-page-header-container">
        <div className="products-heading main-page-heading">
          <h1 className="main-page-header">
            New
            <br />
            <span className="main-page-header-span">Products</span>
          </h1>
        </div>
      </div>
      <div className="collection-list-wrapper">
        <div className="collection-grid-wrapper">
          <NewItem image="https://images.unsplash.com/photo-1567423285116-c31e6a93e939?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=975&q=80" />

          <NewItem image="https://images.unsplash.com/photo-1598866594230-a7c12756260f?ixid=MXwxMjA3fDB8MHxzZWFyY2h8Mnx8c3BhZ2hldHRpfGVufDB8fDB8&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60" />

          <NewItem image="https://images.unsplash.com/photo-1575506142613-499224781394?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxzZWFyY2h8NDh8fHNwYWdoZXR0aXxlbnwwfHwwfA%3D%3D&auto=format&fit=crop&w=800&q=60" />

          <NewItem image="https://images.unsplash.com/photo-1556761223-4c4282c73f77?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1001&q=80" />
        </div>
      </div>
    </div>
  );
};

WhatsNew.propTypes = {};

export default WhatsNew;
