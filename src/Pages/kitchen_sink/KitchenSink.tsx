import BookNow from "../../components/Buttons/BookNow";

// const KitchenSink = () => {
//   // Styling classes
//   const wrapperStyle = "flex flex-col";
//   const statsHeaderStyle = "font-openSan text-sm font-normal mb-7";
//   const statsParaStyle = "font-openSan text-base font-normal text-gray-400";
//   const headStyleOne = "font-openSan text-sm font-normal text-gray-400 mb-8";
//   const headStyleTwoThree =
//     "font-openSan text-sm font-normal text-gray-400 mb-3";
//   const getYourTicketStyle =
//     "font-openSan text-sm font-normal text-gray-400 mb-7";
//   const numberStyle = "font-noto text-5xl font-bold";

//   return (
//     <>
//       <div className="grid md:grid-cols-5 grid-cols-3 border-2 border-black w-full h-auto px-24 pt-6 pb-8 bg-gray-400">
//         <div className="col-span-auto justify-self-start bg-purple-500">
//           <p className={statsHeaderStyle}>Statistics</p>
//           <p className={statsParaStyle}>
//             Statistics reflect the exact
//             <br /> data, collected from authentic <br />
//             sources.
//           </p>
//         </div>

//         <div className="col-span-auto justify-self-center bg-blue-500">
//           <p className={headStyleOne}>Coverage kms</p>
//           <p className={numberStyle}>15</p>
//         </div>

//         <div className="col-span-auto justify-self-end bg-yellow-500">
//           <p className={headStyleTwoThree}>
//             Flights <br /> per day
//           </p>
//           <p className={numberStyle}>09</p>
//         </div>

//         <div className="col-span-auto justify-self-center bg-red-500">
//           <p className={headStyleTwoThree}>
//             Next <br /> Flight
//           </p>
//           <p className={numberStyle}>08:15</p>
//         </div>

//         <div className="col-span-auto justify-self-center bg-green-500">
//           <p className={getYourTicketStyle}>
//             Get your ticket <br /> for the lowest price.
//           </p>
//           <BookNow />
//         </div>
//       </div>
//     </>
//   );
// };

// export default KitchenSink;
const KitchenSink = () => {
  // Styling classes
  const wrapperStyle = "flex flex-col";
  const statsHeaderStyle = "font-openSan text-sm font-normal mb-7";
  const statsParaStyle = "font-openSan text-base font-normal text-gray-400";
  const headStyleOne = "font-openSan text-sm font-normal text-gray-400 mb-8";
  const headStyleTwoThree =
    "font-openSan text-sm font-normal text-gray-400 mb-3";
  const getYourTicketStyle =
    "font-openSan text-sm font-normal text-gray-400 mb-7";
  const numberStyle = "font-noto text-5xl font-bold";

  return (
    <>
      <div className="flex flex-row items-center justify-center border-2 border-black w-screen h-auto pt-6 pb-8 bg-gray-400">
        <div className="mr-44 bg-purple-500">
          <p className={statsHeaderStyle}>Statistics</p>
          <p className={statsParaStyle}>
            Statistics reflect the exact
            <br /> data, collected from authentic <br />
            sources.
          </p>
        </div>

        <div className="flex flex-row ">
          <div className="mr-44 bg-blue-500">
            <p className={headStyleOne}>Coverage kms</p>
            <p className={numberStyle}>15</p>
          </div>

          <div className="mr-28 bg-yellow-500">
            <p className={headStyleTwoThree}>
              Flights <br /> per day
            </p>
            <p className={numberStyle}>09</p>
          </div>

          <div className="bg-red-500">
            <p className={headStyleTwoThree}>
              Next <br /> Flight
            </p>
            <p className={numberStyle}>08:15</p>
          </div>
        </div>

        <div className="ml-56 bg-green-500">
          <p className={getYourTicketStyle}>
            Get your ticket <br /> for the lowest price.
          </p>
          <BookNow />
        </div>
      </div>
    </>
  );
};

export default KitchenSink;
