import Navbar from "../components/Navbar";
import Header from "../components/Header";
import MailList from "../components/MailList";
import Footer from "../components/Footer";
import { useState } from "react";
import { AiOutlineArrowLeft, AiOutlineArrowRight } from "react-icons/ai";
import { CiLocationOn } from "react-icons/ci";
import { HiXMark } from "react-icons/hi2";

const Hotel = () => {
  const [slideNumber, setSlideNumber] = useState(0);
  const [open, setOpen] = useState(false);

  const handleOpen = (i) => {
    setSlideNumber(i);
    setOpen(true);
  };

  const handleMove = (direction) => {
    let newSlideNumber;

    if (direction === "l") {
      newSlideNumber = slideNumber === 0 ? 5 : slideNumber - 1;
    } else {
      newSlideNumber = slideNumber === 5 ? 0 : slideNumber + 1;
    }

    setSlideNumber(newSlideNumber);
  };

  const photos = [
    {
      src: "https://cf.bstatic.com/xdata/images/hotel/max1280x900/261707778.jpg?k=56ba0babbcbbfeb3d3e911728831dcbc390ed2cb16c51d88159f82bf751d04c6&o=&hp=1",
    },
    {
      src: "https://cf.bstatic.com/xdata/images/hotel/max1280x900/261707367.jpg?k=cbacfdeb8404af56a1a94812575d96f6b80f6740fd491d02c6fc3912a16d8757&o=&hp=1",
    },
    {
      src: "https://cf.bstatic.com/xdata/images/hotel/max1280x900/261708745.jpg?k=1aae4678d645c63e0d90cdae8127b15f1e3232d4739bdf387a6578dc3b14bdfd&o=&hp=1",
    },
    {
      src: "https://cf.bstatic.com/xdata/images/hotel/max1280x900/261707776.jpg?k=054bb3e27c9e58d3bb1110349eb5e6e24dacd53fbb0316b9e2519b2bf3c520ae&o=&hp=1",
    },
    {
      src: "https://cf.bstatic.com/xdata/images/hotel/max1280x900/261708693.jpg?k=ea210b4fa329fe302eab55dd9818c0571afba2abd2225ca3a36457f9afa74e94&o=&hp=1",
    },
    {
      src: "https://cf.bstatic.com/xdata/images/hotel/max1280x900/261707389.jpg?k=52156673f9eb6d5d99d3eed9386491a0465ce6f3b995f005ac71abc192dd5827&o=&hp=1",
    },
  ];

  return (
    <div>
      <Navbar />
      <Header type="list" />
      <div className="hotelContainer flex flex-col items-center mt-5">
        {open && (
          <div className="slider sticky top-0 left-0 w-full h-[100vh] bg-black/40 z-30 flex items-center">
            <HiXMark
              className="close absolute top-5 right-5 text-2xl rounded-full bg-gray-300 cursor-pointer"
              onClick={() => setOpen(false)}
            />
            <AiOutlineArrowLeft
              className="arrow m-5 text-4xl rounded-full bg-gray-300 cursor-pointer"
              onClick={() => handleMove("l")}
            />
            <div className="sliderWrapper w-full h-full flex justify-center items-center">
              <img
                src={photos[slideNumber].src}
                alt=""
                className="sliderImg w-full lg:w-[80vw] h-[50vh] sm:h-[80vh]"
              />
            </div>
            <AiOutlineArrowRight
              className="arrow m-5 text-4xl rounded-full bg-gray-300 cursor-pointer"
              onClick={() => handleMove("r")}
            />
          </div>
        )}

        <div className="hotelWrapper w-full max-w-[1024px] flex flex-col gap-2 relative px-4 lg:px-0">
          <button className="bookNow absolute top-0 sm:top-3 sm:right-2 py-2 px-5 bg-[#0071c2] text-white border border-1 border-[#0071c2] hover:bg-white hover:text-[#0071c2] duration-300 font-bold rounded-lg">
            Reserve or Book Now!
          </button>
          <h1 className="hotelTitle text-2xl mt-12 sm:mt-0">
            Tower Street Apartments
          </h1>
          <div className="hotelAddress text-sm flex items-center gap-2">
            <CiLocationOn />
            <span>Elton St 125 New york</span>
          </div>
          <span className="hotelDistance text-[#0071c2] font-medium">
            Excellent location – 500m from center
          </span>
          <span className="hotelPriceHighlight text-[#008009] font-medium">
            Book a stay over $114 at this property and get a free airport taxi
          </span>
          <div className="hotelImages flex flex-wrap justify-center gap-2">
            {photos.map((photo, i) => (
              <div className="hotelImgWrapper w-[40%] lg:w-[31%]" key={i}>
                <img
                  onClick={() => handleOpen(i)}
                  src={photo.src}
                  alt=""
                  className="hotelImg w-full object-cover cursor-pointer"
                />
              </div>
            ))}
          </div>
          <div className="hotelDetails flex flex-col sm:flex-row justify-between gap-5 mt-5">
            <div className="hotelDetailsTexts">
              <h1 className="hotelTitle">Stay in the heart of City</h1>
              <p className="hotelDesc text-lg mt-5">
                Located a 5-minute walk from St. Florian's Gate in Krakow, Tower
                Street Apartments has accommodations with air conditioning and
                free WiFi. The units come with hardwood floors and feature a
                fully equipped kitchenette with a microwave, a flat-screen TV,
                and a private bathroom with shower and a hairdryer. A fridge is
                also offered, as well as an electric tea pot and a coffee
                machine. Popular points of interest near the apartment include
                Cloth Hall, Main Market Square and Town Hall Tower. The nearest
                airport is John Paul II International Kraków–Balice, 16.1 km
                from Tower Street Apartments, and the property offers a paid
                airport shuttle service.
              </p>
            </div>
            <div className="hotelDetailsPrice bg-[#ebf3ff] py-2 px-3 flex flex-col gap-5 min-w-[250px] max-w-[250px] rounded-lg h-fit m-auto">
              <h1 className="text-xl font-medium">
                Perfect for a 9-night stay!
              </h1>
              <span className="text-md">
                Located in the real heart of Krakow, this property has an
                excellent location score of 9.8!
              </span>
              <h2 className="font-thin">
                <b>$945</b> (9 nights)
              </h2>
              <button className="py-2 px-4 bg-[#0071c2] text-white border border-1 border-[#0071c2] hover:bg-white hover:text-[#0071c2] duration-300 rounded-lg font-bold">
                Reserve or Book Now!
              </button>
            </div>
          </div>
        </div>
        <MailList />
        <Footer />
      </div>
    </div>
  );
};

export default Hotel;
