import React from "react";

const Loading = () => {
  return (
    <div className="flex justify-center items-center w-screen h-screen space-x-2">
      <div className="w-10 h-10 bg-black-faded animate-fade-in-down"></div>
      <div className="w-10 h-10 bg-black-faded animate-fade-out-down"></div>
      <div className="w-10 h-10 bg-black-faded animate-fade-in-up"></div>
      <div className="w-10 h-10 bg-black-faded animate-fade-out-up"></div>
    </div>
  );
};

export default Loading;
