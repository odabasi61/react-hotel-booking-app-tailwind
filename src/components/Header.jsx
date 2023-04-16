import { MdHotel } from "react-icons/md";
import { AiTwotoneCalendar } from "react-icons/ai";
import { GiCommercialAirplane } from "react-icons/gi";
import {
  BsFillCarFrontFill,
  BsTaxiFrontFill,
  BsActivity,
  BsFillPersonFill,
} from "react-icons/bs";

const Header = () => {
  return (
    <div className="header bg-[#003580] flex justify-center text-white relative">
      <div className="header-container w-full max-w-[1024px] mt-5 mb-24">
        <div className="header-list flex flex-wrap gap-10 mb-12">
          <div className="headerlist-item active flex gap-2 items-center">
            <MdHotel size={20} />
            <span>Stays</span>
          </div>
          <div className="headerlist-item flex gap-2 items-center">
            <GiCommercialAirplane size={20} />
            <span>Flights</span>
          </div>
          <div className="headerlist-item flex gap-2 items-center">
            <BsFillCarFrontFill size={20} />
            <span>Car Rentals</span>
          </div>
          <div className="headerlist-item flex gap-2 items-center">
            <BsActivity size={20} />
            <span>Attractions</span>
          </div>
          <div className="headerlist-item flex gap-2 items-center">
            <BsTaxiFrontFill size={20} />
            <span>Airport Taxis</span>
          </div>
        </div>
        <h1 className="headerTitle text-xl md:text-2xl lg:text-3xl xl:text-4xl font-bold">
          A lifetime of discounts? It's Genius.
        </h1>
        <p className="headerDesc py-5">
          Get rewarded for your travels – unlock instant savings of 10% or more
          with a free Lamabooking account
        </p>
        <button className="headerBtn bg-[#0071c2] text-white py-2 px-3 font-medium">
          Sign in / Register
        </button>
        <div className="headerSearch h-[30px] bg-white flex items-center border-2 border-[#febb02] justify-around py-5 rounded-sm absolute -bottom-5 w-full max-w-[1024px]">
          <div className="headerSearchItem flex gap-2 items-center">
            <MdHotel className="headerIcon" />
            <input
              type="text"
              placeholder="Where are you going?"
              className="headerSearchInput"
            />
          </div>

          <div className="headerSearchItem flex gap-2 items-center">
            <AiTwotoneCalendar className="headerIcon text-gray-400" />
            <span className="headerSearchText text-black">date to date</span>
          </div>

          <div className="headerSearchItem flex gap-2 items-center">
            <BsFillPersonFill className="headerIcon text-gray-400" />
            <span className="headerSearchText text-black">
              2 adults 2 children 1 room
            </span>
          </div>

          <div className="headerSearchItem">
            <button className="headerBtn bg-[#0071c2] text-white py-1 px-2 font-medium">
              Search
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
