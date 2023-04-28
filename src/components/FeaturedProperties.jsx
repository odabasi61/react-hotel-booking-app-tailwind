import React from "react";

const FeaturedProperties = () => {
  return (
    <div className="fp w-full max-w-[1024px] flex flex-wrap lg:flex-nowrap px-8 lg:px-0 justify-center gap-5">
      <div className="fpItem flex gap-2 flex-col shadow-xl w-full sm:w-2/5 lg:w-full">
        <img
          src="https://cdn.pixabay.com/photo/2021/08/27/01/33/bedroom-6577523_960_720.jpg"
          alt=""
          className="fpImg w-full h-[250px] object-cover"
        />
        <span className="fpName text-gray-400 font-bold ps-2">
          Aparthotel Stare Miasto
        </span>
        <span className="fpCity font-normal ps-2">Madrid</span>
        <span className="fpPrice font-medium ps-2">Starting from $120</span>
        <div className="fpRating ps-2 pb-2">
          <span className="text-white bg-[#003580] px-1 font-bold">
            8.8
          </span>
          <span className="text-md"> Excellent · 1483 rates</span>
        </div>
      </div>

      <div className="fpItem flex gap-2 flex-col shadow-xl w-full sm:w-2/5 lg:w-full">
        <img
          src="https://cf.bstatic.com/xdata/images/hotel/max1280x900/215955381.jpg?k=ff739d1d9e0c8e233f78ee3ced82743ef0355e925df8db7135d83b55a00ca07a&o=&hp=1"
          alt=""
          className="fpImg w-full h-[250px] object-cover"
        />
        <span className="fpName text-gray-400 font-bold ps-2">
          Comfort Suites Airport
        </span>
        <span className="fpCity font-normal ps-2">Austin</span>
        <span className="fpPrice font-medium ps-2">Starting from $140</span>
        <div className="fpRating ps-2  pb-2">
          <span className="text-white bg-[#003580] px-1 font-bold">
            9.2
          </span>
          <span className="text-md"> Exceptional · 2214 rates</span>
        </div>
      </div>

      <div className="fpItem flex gap-2 flex-col shadow-xl w-full sm:w-2/5 lg:w-full">
        <img
          src="https://cdn.pixabay.com/photo/2014/05/18/19/15/walkway-347319_960_720.jpg"
          alt=""
          className="fpImg w-full h-[250px] object-cover"
        />
        <span className="fpName text-gray-400 font-bold ps-2">
          Four Seasons Hotel
        </span>
        <span className="fpCity font-normal ps-2">Lisbon</span>
        <span className="fpPrice font-medium ps-2">Starting from $99</span>
        <div className="fpRating ps-2  pb-2">
          <span className="text-white bg-[#003580] px-1 font-bold">
            8.7
          </span>
          <span className="text-md"> Excellent · 1066 rates</span>
        </div>
      </div>

      <div className="fpItem flex gap-2 flex-col shadow-xl w-full sm:w-2/5 lg:w-full">
        <img
          src="https://cf.bstatic.com/xdata/images/hotel/max1280x900/322658536.jpg?k=3fffe63a365fd0ccdc59210188e55188cdb7448b9ec1ddb71b0843172138ec07&o=&hp=1"
          alt=""
          className="fpImg w-full h-[250px] object-cover"
        />
        <span className="fpName text-gray-400 font-bold ps-2">
          Hilton Garden Inn
        </span>
        <span className="fpCity font-normal ps-2">Berlin</span>
        <span className="fpPrice font-medium ps-2">Starting from $105</span>
        <div className="fpRating ps-2  pb-2">
          <span className="text-white bg-[#003580] px-1 font-bold">
            8.9
          </span>
          <span className="text-md"> Excellent · 969 rates</span>
        </div>
      </div>
    </div>
  );
};

export default FeaturedProperties;
