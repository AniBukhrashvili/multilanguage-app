import React, { useState } from "react";
import Slider from "react-slick";

import Box from "@mui/material/Box";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./Slider.css";

const PhotoSlider = () => {
  const [settings] = useState({
    dots: true,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    speed: 2000,
    autoplaySpeed: 3000,
  });

  return (
    <Box sx={{ marginTop: "200px" }}>
      <Slider {...settings}>
        <Box>
          <img src={require("../../assets/iphone.jpeg")} />
        </Box>
        <Box>
          <img src={require("../../assets/ipads.jpeg")} />
        </Box>
        <Box>
          <img
            src={require("../../assets/macbooks.jpeg")}
            style={{ width: "650px" }}
          />
        </Box>
        <Box>
          <img
            src={require("../../assets/watch.jpeg")}
            style={{ width: "700px" }}
          />
        </Box>
      </Slider>
    </Box>
  );
};

export default PhotoSlider;
