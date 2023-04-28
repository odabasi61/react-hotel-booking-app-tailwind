import React from "react";

const SearchItem = () => {
  return (
    <div className="searchItem p-2 rounded-xl flex flex-col lg:flex-row mb-5 gap-5 border border-1 border-gray-500 shadow-xl">
      <img
        src="https://cf.bstatic.com/xdata/images/hotel/square600/261707778.webp?k=fa6b6128468ec15e81f7d076b6f2473fa3a80c255582f155cae35f9edbffdd78&o=&s=1"
        alt=""
        className="siImg w-full lg:w-52 h-52 object-cover"
      />
      <div className="siDesc flex flex-col gap-2">
        <h1 className="siTitle text-2xl text-[#0071c2]">
          Tower Street Apartments
        </h1>
        <span className="siDistance text-sm">500m from center</span>
        <span className="siTaxiOp text-sm bg-[#008009] text-white py-1 px-2 rounded-lg w-fit">
          Free airport taxi
        </span>
        <span className="siSubtitle text-sm font-bold">
          Studio Apartment with Air conditioning
        </span>
        <span className="siFeatures text-sm">
          Entire studio • 1 bathroom • 21m² 1 full bed
        </span>
        <span className="siCancelOp text-sm font-bold text-[#008009]">
          Free cancellation{" "}
        </span>
        <span className="siCancelOpSubtitle text-sm text-[#008009]">
          You can cancel later, so lock in this great price today!
        </span>
      </div>
      <div className="siDetails flex flex-col justify-between">
        <div className="siRating flex justify-between">
          <span className="font-medium">Excellent</span>
          <span className="bg-[#003580] text-white p-1 font-bold">8.9</span>
        </div>
        <div className="siDetailTexts flex flex-col gap-1 text-right">
          <span className="siPrice text-2xl font-medium">$112</span>
          <span className="siTaxOp text-sm text-gray-500">
            Includes taxes and fees
          </span>
          <button className="siCheckButton bg-[#0071c2] text-white font-bold py-2 p-1 rounded-lg">
            See availability
          </button>
        </div>
      </div>
    </div>
  );
};

export default SearchItem;
