import React from "react";
import FeaturedProject_desktop from "../../sub-blocks/FeaturedProject_desktop";
import FeaturedProject_mobile from "../../sub-blocks/FeaturedProject_mobile";

export default function FeaturedProject({ dataObj, mb }) {
  return (
    <>
      {/* <FeaturedProject_mobile dataObj={dataObj} mb={mb}/> */}
      <FeaturedProject_desktop dataObj={dataObj} />
    </>
  );
}
