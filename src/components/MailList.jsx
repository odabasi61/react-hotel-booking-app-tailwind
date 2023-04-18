import React from "react";

const MailList = () => {
  return (
    <div className="mail w-full mt-12 bg-[#003580] text-white flex flex-col items-center gap-5 p-12">
      <h1 className="mailTitle text-center text-lg md:text-xl lg:text-2xl xl:text-3xl">
        Save time, save money!
      </h1>
      <span className="mailDesc text-center">
        Sign up and we'll send the best deals to you
      </span>
      <div className="mailInputContainer flex flex-wrap justify-center gap-4 items-center">
        <input
          type="text"
          placeholder="Your Email"
          className="w-[300px] h-[30px] p-2 border-none rounded-md outline-none"
        />
        <button className="py-1 px-3 bg-[#0071c2] text-white font-normal rounded-md">
          Subscribe
        </button>
      </div>
    </div>
  );
};

export default MailList;
