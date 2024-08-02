import React from "react";

const Activities = () => {
  return (
    <div className="max-w-[1140px] m-auto w-full md:flex mt-[-75px]">
      <div className="relative p-4">
        <h3 className="absolute z-10 top-[50%] left-[50%] translate-x-[-50%] translate-y-[50%] text-white text-2xl font-bold">
          Resorts
        </h3>
        <img
          className="w-full h-full object-cover relative border-4 border-white shadow-lg"
          src="https://images.unsplash.com/photo-1529316275402-0462fcc4abd6?q=80&w=1171&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt="/"
        />
      </div>
      <div className="relative p-4">
        <h3 className="absolute z-10 top-[50%] left-[50%] translate-x-[-50%] translate-y-[50%] text-white text-2xl font-bold">
          Cruises
        </h3>
        <img
          className="w-full h-full object-cover relative border-4 border-white shadow-lg"
          src="https://images.unsplash.com/photo-1663687059883-c18e1c5ae099?q=80&w=1311&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt="/"
        />
      </div>
      <div className="relative p-4">
        <h3 className="absolute z-10 top-[50%] left-[50%] translate-x-[-50%] translate-y-[50%] text-white text-2xl font-bold">
          Excursions
        </h3>
        <img
          className="w-full h-full object-cover relative border-4 border-white shadow-lg"
          src="https://images.unsplash.com/photo-1566356650976-6fae5694dc8a?q=80&w=1025&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt="/"
        />
      </div>
    </div>
  );
};

export default Activities;
