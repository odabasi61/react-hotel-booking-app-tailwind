import Navbar from "../components/Navbar";
import Header from "../components/Header";
import SearchItem from "../components/SearchItem";
import { useLocation } from "react-router-dom";
import { useState } from "react";
import { format } from "date-fns";
import { DateRange } from "react-date-range";

const List = () => {
  const location = useLocation();
  const [destination, setDestination] = useState(location.state.destination);
  const [date, setDate] = useState(location.state.date);
  const [options, setOptions] = useState(location.state.options);
  const [openDate, setOpenDate] = useState(false);

  return (
    <div>
      <Navbar />
      <Header type="list" />
      <div className="listContainer flex justify-center mt-5">
        <div className="listWrapper w-full max-w[1024px] flex flex-col sm:flex-row justify-center gap-5 px-10 sm:px-0">
          <div className="listSearch bg-[#febb02] p-2 rounded-lg h-max shadow-xl">
            <h1 className="lsTitle text-lg md:text-xl lg:text-2xl xl:text-3xl text-gray-600 mb-2">
              Search
            </h1>
            <div className="lsItem flex flex-col gap-1 mb-2">
              <label>Destination</label>
              <input
                className="h-8 border-none outline-none p-1"
                placeholder={destination}
                type="text"
              />
            </div>
            <div className="lsItem flex flex-col gap-1 mb-2">
              <label>Check-in Date</label>
              <span
                className="h-8 p-1 flex bg-white items-center cursor-pointer"
                onClick={() => setOpenDate(!openDate)}
              >{`${format(date[0].startDate, "MM/dd/yyyy")} to ${format(
                date[0].endDate,
                "MM/dd/yyyy"
              )}`}</span>
              {openDate && (
                <DateRange
                  onChange={(item) => setDate([item.selection])}
                  minDate={new Date()}
                  ranges={date}
                />
              )}
            </div>
            <div className="lsItem flex flex-col gap-1 mb-2">
              <label>Options</label>
              <div className="lsOptions p-2">
                <div className="lsOptionItem flex justify-between mb-2 text-gray-600 font-normal">
                  <span className="lsOptionText">
                    Min price <small>per night</small>
                  </span>
                  <input
                    type="number"
                    className="lsOptionInput w-12 text-center"
                  />
                </div>
                <div className="lsOptionItem flex justify-between mb-2 text-gray-600 font-normal">
                  <span className="lsOptionText">
                    Max price <small>per night</small>
                  </span>
                  <input
                    type="number"
                    className="lsOptionInput w-12 text-center"
                  />
                </div>
                <div className="lsOptionItem flex justify-between mb-2 text-gray-600 font-normal">
                  <span className="lsOptionText">Adult</span>
                  <input
                    type="number"
                    min={1}
                    className="lsOptionInput w-12 text-center"
                    placeholder={options.adult}
                  />
                </div>
                <div className="lsOptionItem flex justify-between mb-2 text-gray-600 font-normal">
                  <span className="lsOptionText">Children</span>
                  <input
                    type="number"
                    min={0}
                    className="lsOptionInput w-12 text-center"
                    placeholder={options.children}
                  />
                </div>
                <div className="lsOptionItem flex justify-between mb-2 text-gray-600 font-normal">
                  <span className="lsOptionText">Room</span>
                  <input
                    type="number"
                    min={1}
                    className="lsOptionInput w-12 text-center"
                    placeholder={options.room}
                  />
                </div>
              </div>
            </div>
            <button className="p-2 bg-[#0071c2] text-white border border-[#0071c2] hover:bg-white hover:text-[#0071c2] duration-300 rounded-xl w-full font-medium">
              Search
            </button>
          </div>
          <div className="listResult">
            <SearchItem />
            <SearchItem />
            <SearchItem />
            <SearchItem />
            <SearchItem />
            <SearchItem />
            <SearchItem />
            <SearchItem />
            <SearchItem />
          </div>
        </div>
      </div>
    </div>
  );
};

export default List;
