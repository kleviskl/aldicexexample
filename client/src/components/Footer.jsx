import React from "react";

const Footer = (props) => {
  return (
    <footer className="bg-white">
      <div className="max-w-7xl mx-auto py-8 px-4 sm:px-6 md:flex md:items-center md:justify-between lg:px-8">
        {/* <div className="flex justify-center space-x-6 md:order-2"></div> */}
        <div className="mt-8 md:mt-0 md:order-1">
          <p className="text-center text-base text-gray-400">
            Logo Here (before paragraph) &copy; 2022 Company Name, Inc. All
            rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
