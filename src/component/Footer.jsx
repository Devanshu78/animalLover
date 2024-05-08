import React from "react";

function Footer() {
  const date = new Date();
  return (
    <div className="absolute bottom-0 text-center text-[#EEF7FF] font-bold w-[100%] ">
      <h5>copyright &copy; {date.getFullYear()}. All right reserved</h5>
    </div>
  );
}

export default Footer;
