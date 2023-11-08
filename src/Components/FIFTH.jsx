import React from "react";
import Slider from "./NetflixSlider";
import cameramen from './statics/Camera.avif'
function FIFTH() {
  const movies = [
    {
      id: 1,
      image: cameramen,
    },
    {
      id: 9,
      image: cameramen,
    },
    {
      id: 2,
      image: cameramen,
    },
    {
      id: 3,
      image: cameramen,
    },
    {
      id: 4,
      image: cameramen,
    },
    {
      id: 5,
      image: cameramen,
    },
    {
      id: 6,
      image: cameramen,
    },
  ];
  return (
    <div className="w-full h-[424px] flex flex-col justify-center items-center translate-y-32">
      <div className="w-full h-[80px] flex justify-start items-end pl-12 text-white text-4xl font-serif ">Gallery</div>
      <Slider>
        {movies.map((movie) => (
          <Slider.Item movie={movie} key={movie.id}>
            item1
          </Slider.Item>
        ))}
      </Slider>
    </div>
  );
}

export default FIFTH;
