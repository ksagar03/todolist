import React from "react";

const Todolistview = ({date, disciption}) => {
  return (
    <div className="flex border-2 rounded-lg border-gray-800 px-5  sm:flex-row flex-col min-w-fit">
      <div className=" flex-auto">
        <h2 className="text-white text-lg title-font font-medium mb-3">
          {date}
        </h2>
        <p className="leading-relaxed text-base">
          {disciption}
        </p>
      </div>
    </div>
  );
};

export default Todolistview;
