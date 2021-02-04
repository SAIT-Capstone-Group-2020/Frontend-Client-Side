import React from 'react';
import Navbar from '../components/hoc/Navbar';
import useScript from '../utils/useScript.hook';
import Slide from '../components/slider/Slide';
import Slider from '../components/slider/Slider';
import WeeklySale from '../components/wrapper/WeeklySale'
import Footer from '../components/hoc/Footer';

const Home = () => {
  useScript(
    'https://d3e54v103j8qbb.cloudfront.net/js/jquery-3.5.1.min.dc5e7f18c8.js?site=5ff4fd881cc2cd35ee68ff88',
  );
  useScript(
    'https://res.cloudinary.com/hsse18xji/raw/upload/v1612153620/HHA/js/webflow_vdcwdg.js',
  );
  return (
    <div>
      <Navbar />
      <div className="section cc-store-home-wrap">
        <div className="banners-without-event">
          <Slider styleName="image-slider w-slider">
            <div className="slider-content main-slide-wrap">
              <h1 className="slider-header slider-main-header">
                hiep hoa asian food market
              </h1>
              <h2 className="slider-header slider-h2">
                This is the max characters. asdjnfkas dfnasdlkfja sdfj asldf
                alksjd flkajsd flkaj dlkfja sdlkfj asdjf alksdj falksjd flaksdj
                falsdkjf aslkdjf asdfalsdkjf asdlfkajsd fsaljd flaskdjf
                sa,dslafms dklfansjfsd
              </h2>
            </div>
            <div className="slider-wrap featured-wrap w-slider-mask">
              <Slide
                styleName="slide w-slide"
                image="https://images.unsplash.com/photo-1534723452862-4c874018d66d?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80"
              />
              <Slide
                styleName="slide w-slide"
                image="https://images.unsplash.com/photo-1545601445-4d6a0a0565f0?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1867&q=80"
              />
              <Slide
                styleName="slide w-slide"
                image="https://images.unsplash.com/photo-1516594798947-e65505dbb29d?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=1950&q=80"
              />
            </div>
          </Slider>
          <div className="slider-shield-main"></div>
        </div>
      </div>
      <WeeklySale />
      <Footer />
    </div>
  );
};

export default Home;
