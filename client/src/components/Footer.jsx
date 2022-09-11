import React from "react";

const Footer = (props) => {
  return (
    <footer className="bg-white">
      <div className="max-w-7xl mx-auto py-8 px-4 sm:px-6 md:flex md:items-center md:justify-between lg:px-8">
        {/* <div className="flex justify-center space-x-6 md:order-2"></div> */}
        <div className="mt-8 md:mt-0 md:order-1">
          <p className="text-center text-base text-gray-400">
            Developed By DXC Tecnology For Ford &copy; 2022 All
            rights reserved.
          </p>
           {/* Logo image */}
      <div class="flex -space-x-2 overflow-hidden">
                  <img class="inline-block h-10 w-10 rounded-full ring-1 ring-white" src="C:\Users\kkoleci\Desktop\New folder (3)\aldic\client\src\dxc-technology.svg" alt="">
                  </img>
                </div>
        </div>
      </div>
     
      
    </footer>
  );
};

export default Footer;
