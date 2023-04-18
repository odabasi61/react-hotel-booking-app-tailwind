import { MdHotel } from "react-icons/md";
import { AiTwotoneCalendar } from "react-icons/ai";
import { GiCommercialAirplane } from "react-icons/gi";
import {
  BsFillCarFrontFill,
  BsTaxiFrontFill,
  BsActivity,
  BsFillPersonFill,
} from "react-icons/bs";
import "react-date-range/dist/styles.css"; // main css file
import "react-date-range/dist/theme/default.css"; // theme css file
import { format } from "date-fns";
import { DateRange } from "react-date-range";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Header = ({ type }) => {
  //hotel search
  const navigate = useNavigate();
  const [destination, setDestination] = useState("");

  // for the calendar
  const [openDate, setOpenDate] = useState(false);
  const [date, setDate] = useState([
    {
      startDate: new Date(),
      endDate: new Date(),
      key: "selection",
    },
  ]);

  // number of person
  const [openOptions, setOpenOptions] = useState(false);
  const [options, setOptions] = useState({
    adult: 1,
    children: 0,
    room: 1,
  });

  const handleOption = (name, operation) => {
    setOptions((prev) => {
      return {
        ...prev,
        [name]: operation === "i" ? options[name] + 1 : options[name] - 1,
      };
    });
  };

  const handleSearch = () => {
    navigate("/hotels", { state: { destination, date, options } });
  };

  return (
    <div className="header bg-[#003580] flex justify-center text-white relative">
      <div
        className={
          type === "list" ? "headerContainer listMode" : "headerContainer"
        }
      >
        <div className="header-list px-4 lg:px-0 flex flex-wrap justify-center md:justify-normal gap-10 mb-12">
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
        {type !== "list" && (
          <>
            <h1 className="headerTitle px-4 lg:px-0 text-xl md:text-2xl lg:text-3xl xl:text-4xl font-bold">
              A lifetime of discounts? It's Genius.
            </h1>
            <p className="headerDesc py-5 px-4 lg:px-0">
              Get rewarded for your travels – unlock instant savings of 10% or
              more with a free Lamabooking account
            </p>
            <button className="headerBtn ms-4 lg:ms-0 bg-[#0071c2] text-white hover:text-[#0071c2] hover:bg-white duration-300 border border-[#0071c2] py-2 px-3 font-medium">
              Sign in / Register
            </button>
            <div className="headerSearch bg-white flex flex-col md:flex-row gap-2 md:gap-0 items-center border-2 border-[#febb02] justify-around py-2 md:py-5 rounded-sm absolute -bottom-16 md:-bottom-5 w-full max-w-[1024px] h-fit md:h-[30px]">
              <div className="headerSearchItem flex gap-2 items-center">
                <MdHotel className="headerIcon text-gray-600" />
                <input
                  type="text"
                  placeholder="Where are you going?"
                  className="headerSearchInput outline-none text-gray-600 border border-1 rounded-md ps-2"
                  onChange={(e) => setDestination(e.target.value)}
                />
              </div>

              <div className="headerSearchItem flex gap-2 items-center">
                <AiTwotoneCalendar className="headerIcon text-gray-600" />
                <span
                  onClick={() => setOpenDate(!openDate)}
                  className="headerSearchText text-gray-600"
                >{`${format(date[0].startDate, "MM/dd/yyyy")} to ${format(
                  date[0].endDate,
                  "MM/dd/yyyy"
                )}`}</span>
                {openDate && (
                  <DateRange
                    editableDateInputs={true}
                    onChange={(item) => setDate([item.selection])}
                    moveRangeOnFirstSelection={false}
                    ranges={date}
                    className="date absolute top-[70px] md:top-[40px] z-20"
                  />
                )}
              </div>

              <div
                onClick={() => setOpenOptions(!openOptions)}
                className="headerSearchItem flex gap-2 items-center"
              >
                <BsFillPersonFill className="headerIcon text-gray-600" />
                <span className="headerSearchText text-gray-600">
                  {`${options.adult} adult · ${options.children} children · ${options.room} room`}
                </span>
                {openOptions && (
                  <div className="options absolute top-[100px] md:top-[40px] border-2 shadow-xl w-48 bg-white z-20">
                    <div className="optionItem flex items-center justify-between gap-2 p-2 hover:bg-gray-300">
                      <span className="optionText text-gray-600">Adult</span>
                      <div className="flex gap-2 items-center">
                        <button
                          className="optionCounterButton px-2 text-sm rounded-full border border-[#0071c2] text-black"
                          onClick={() =>
                            options.adult > 1 && handleOption("adult", "d")
                          }
                          // disabled={options.adult <= 1}
                        >
                          -
                        </button>
                        <span className="optionCounterNumber text-gray-600">
                          {options.adult}
                        </span>
                        <button
                          className="optionCounterButton px-2 text-sm rounded-full border border-[#0071c2] text-black"
                          onClick={() => handleOption("adult", "i")}
                        >
                          +
                        </button>
                      </div>
                    </div>

                    <div className="optionItem flex items-center justify-between gap-2 p-2 hover:bg-gray-300">
                      <span className="optionText text-gray-600">Children</span>
                      <div className="flex gap-2 items-center">
                        <button
                          className="optionCounterButton px-2 text-sm rounded-full border border-[#0071c2] text-black"
                          onClick={() =>
                            options.children > 0 &&
                            handleOption("children", "d")
                          }
                        >
                          -
                        </button>
                        <span className="optionCounterNumber text-gray-600">
                          {options.children}
                        </span>
                        <button
                          className="optionCounterButton px-2 text-sm rounded-full border border-[#0071c2] text-black"
                          onClick={() => handleOption("children", "i")}
                        >
                          +
                        </button>
                      </div>
                    </div>

                    <div className="optionItem flex items-center justify-between gap-2 p-2 hover:bg-gray-300">
                      <span className="optionText text-gray-600">Room</span>
                      <div className="flex gap-2 items-center">
                        <button
                          className="optionCounterButton px-2 text-sm rounded-full border border-[#0071c2] text-black"
                          onClick={() =>
                            options.room > 1 && handleOption("room", "d")
                          }
                        >
                          -
                        </button>
                        <span className="optionCounterNumber text-gray-600">
                          {options.room}
                        </span>
                        <button
                          className="optionCounterButton px-2 text-sm rounded-full border border-[#0071c2] text-black"
                          onClick={() => handleOption("room", "i")}
                        >
                          +
                        </button>
                      </div>
                    </div>
                  </div>
                )}
              </div>

              <div className="headerSearchItem">
                <button
                  onClick={handleSearch}
                  className="headerBtn bg-[#0071c2] text-white hover:text-[#0071c2] hover:bg-white duration-300 border border-[#0071c2] py-1 px-2 font-medium"
                >
                  Search
                </button>
              </div>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default Header;
