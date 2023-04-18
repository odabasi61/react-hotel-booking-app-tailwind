import React from "react";

const PropertyList = () => {
  return (
    <div className="pList w-full max-w-[1024px] flex flex-wrap lg:flex-nowrap justify-center gap-2 px-8 sm:px-2 lg:px-0 lg:gap-5">
      <div className="pListItem rounded-lg overflow-hidden shadow-2xl w-3/5 sm:w-2/5 md:w-1/5 lg:w-full">
        <img
          src="https://cf.bstatic.com/xdata/images/xphoto/square300/57584488.webp?k=bf724e4e9b9b75480bbe7fc675460a089ba6414fe4693b83ea3fdd8e938832a6&o="
          alt=""
          className="pListImg w-full h-[150px] object-cover"
        />
        <div className="pListTitles px-2">
          <h1 className="text-xl text-gray-400">Hotels</h1>
          <h2 className="text-md font-normal">233 hotels</h2>
        </div>
      </div>

      <div className="pListItem rounded-lg overflow-hidden shadow-2xl w-3/5 sm:w-2/5 md:w-1/5 lg:w-full">
        <img
          src="https://cf.bstatic.com/static/img/theme-index/carousel_320x240/card-image-apartments_300/9f60235dc09a3ac3f0a93adbc901c61ecd1ce72e.jpg"
          alt=""
          className="pListImg w-full h-[150px] object-cover"
        />
        <div className="pListTitles px-2">
          <h1 className="text-xl text-gray-400">Apartments</h1>
          <h2 className="text-md font-normal">2331 hotels</h2>
        </div>
      </div>

      <div className="pListItem rounded-lg overflow-hidden shadow-2xl w-3/5 sm:w-2/5 md:w-1/5 lg:w-full">
        <img
          src="https://cf.bstatic.com/static/img/theme-index/carousel_320x240/bg_resorts/6f87c6143fbd51a0bb5d15ca3b9cf84211ab0884.jpg"
          alt=""
          className="pListImg w-full h-[150px] object-cover"
        />
        <div className="pListTitles px-2">
          <h1 className="text-xl text-gray-400">Resorts</h1>
          <h2 className="text-md font-normal">2331 hotels</h2>
        </div>
      </div>

      <div className="pListItem rounded-lg overflow-hidden shadow-2xl w-3/5 sm:w-2/5 md:w-1/5 lg:w-full">
        <img
          src="https://cf.bstatic.com/static/img/theme-index/carousel_320x240/card-image-villas_300/dd0d7f8202676306a661aa4f0cf1ffab31286211.jpg"
          alt=""
          className="pListImg w-full h-[150px] object-cover"
        />
        <div className="pListTitles px-2">
          <h1 className="text-xl text-gray-400">Villas</h1>
          <h2 className="text-md font-normal">2331 hotels</h2>
        </div>
      </div>

      <div className="pListItem rounded-lg overflow-hidden shadow-2xl w-3/5 sm:w-2/5 md:w-1/5 lg:w-full">
        <img
          src="https://cf.bstatic.com/static/img/theme-index/carousel_320x240/card-image-chalet_300/8ee014fcc493cb3334e25893a1dee8c6d36ed0ba.jpg"
          alt=""
          className="pListImg w-full h-[150px] object-cover"
        />
        <div className="pListTitles px-2">
          <h1 className="text-xl text-gray-400">Cabins</h1>
          <h2 className="text-md font-normal">2331 hotels</h2>
        </div>
      </div>
    </div>
  );
};

export default PropertyList;
