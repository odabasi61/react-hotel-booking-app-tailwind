import React from "react";

const Footer = () => {
  return (
    <div className="footer w-full text-sm p-4 lg:px-20 xl:px-48">
      <div className="fLists w-full flex flex-wrap flex-col sm:flex-row justify-between text-center">
        <div>
          <ul className="fList list-none p-0">
            <li className="fListItem">Countries</li>
            <li className="fListItem">Regions</li>
            <li className="fListItem">Cities</li>
            <li className="fListItem">Districts</li>
            <li className="fListItem">Airports</li>
            <li className="fListItem">Hotels</li>
          </ul>
        </div>
        <div>
          <ul className="fList list-none p-0">
            <li className="fListItem">Homes </li>
            <li className="fListItem">Apartments </li>
            <li className="fListItem">Resorts </li>
            <li className="fListItem">Villas</li>
            <li className="fListItem">Hostels</li>
            <li className="fListItem">Guest houses</li>
          </ul>
        </div>
        <div>
          <ul className="fList list-none p-0">
            <li className="fListItem">Unique places to stay </li>
            <li className="fListItem">Reviews</li>
            <li className="fListItem">Unpacked: Travel articles </li>
            <li className="fListItem">Travel communities </li>
            <li className="fListItem">Seasonal and holiday deals </li>
          </ul>
        </div>
        <div>
          <ul className="fList list-none p-0">
            <li className="fListItem">Car rental </li>
            <li className="fListItem">Flight Finder</li>
            <li className="fListItem">Restaurant reservations </li>
            <li className="fListItem">Travel Agents </li>
          </ul>
        </div>
        <div>
          <ul className="fList list-none p-0">
            <li className="fListItem">Curtomer Service</li>
            <li className="fListItem">Partner Help</li>
            <li className="fListItem">Careers</li>
            <li className="fListItem">Sustainability</li>
            <li className="fListItem">Press center</li>
            <li className="fListItem">Safety Resource Center</li>
            <li className="fListItem">Investor relations</li>
            <li className="fListItem">Terms & conditions</li>
          </ul>
        </div>
      </div>
      <p className="fText text-center py-4 text-lg">
        Copyright © {new Date().getFullYear()} Wisebooking
      </p>
    </div>
  );
};

export default Footer;
