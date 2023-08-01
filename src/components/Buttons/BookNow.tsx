import React from "react";

const BookNow = () => {
  const bookNowStyle: string =
    "font-openSan font-bold text-red-700 text-sm border-2 border-red-700 border-solid w-48 h-11 sm:mt-0 mt-6";
  return <button className={bookNowStyle}>Book Now</button>;
};

export default BookNow;
