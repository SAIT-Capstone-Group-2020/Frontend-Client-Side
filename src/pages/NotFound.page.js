import React from 'react';
import Navbar from '../components/hoc/Navbar';
import useScript from '../utils/useScript.hook';
import Slide from '../components/slider/Slide'

const NotFound = () => {
  useScript(
    'https://d3e54v103j8qbb.cloudfront.net/js/jquery-3.5.1.min.dc5e7f18c8.js?site=5ff4fd881cc2cd35ee68ff88',
  );
  useScript(
    'https://res.cloudinary.com/hsse18xji/raw/upload/v1612153620/HHA/js/webflow_vdcwdg.js',
  );
  return (
    <div>
      <Navbar />
      <div className="section cc-not-found-page">
        <div className="_404-banner">
          <div
            data-delay="4000"
            data-animation="cross"
            data-autoplay="1"
            data-autoplay-limit="120000"
            data-duration="400"
            data-infinite="1"
            className="image-slider _404-slider w-slider"
          >
            <div className="slider-content main-slide-wrap"></div>
            <div className="slider-wrap featured-wrap w-slider-mask">
              <Slide styleName="slide w-slide" image="https://images.unsplash.com/photo-1534723452862-4c874018d66d?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80" />
              <Slide styleName="slide w-slide" image="https://images.unsplash.com/photo-1545601445-4d6a0a0565f0?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1867&q=80" />
              <Slide styleName="slide w-slide" image="https://images.unsplash.com/photo-1516594798947-e65505dbb29d?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=1950&q=80" />
            </div>
            <div className="left-arrow w-slider-arrow-left">
              <div className="w-icon-slider-left"></div>
            </div>
            <div className="right-arrow w-slider-arrow-right">
              <div className="w-icon-slider-right"></div>
            </div>
            <div className="slide-nav w-slider-nav w-shadow w-round"></div>
          </div>
          <div className="slider-shield-main _404-slider-shield">
            <h1 className="slider-header">page not found</h1>
            <h2 className="slider-header _404-sub-head">
              Sorry! The page you&#x27;re looking for does not exist.
            </h2>
            <a
              href="/"
              className="button cc-white-button _404-slider-btn w-button"
            >
              Return home
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NotFound;
