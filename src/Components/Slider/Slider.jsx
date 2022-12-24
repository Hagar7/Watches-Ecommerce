import axios from "axios";
import React, { useEffect, useState } from "react";
import style from "./Slider.module.scss";

export default function Slider(slides) {
  const [sliders, setSliders] = useState([]);

  const getSliders = async () => {
    let { data } = await axios.get("http://localhost:3002/sliders");
    setSliders(data);
  };
  useEffect(() => {
    getSliders();
  }, []);

  return (
    <>
      <div className={`${style.slider}`}>
        <div
          id="carouselExampleCaptions"
          className="carousel slide"
          data-bs-ride="false"
        >
          <div className={`${style.myInd} carousel-indicators`}>
            <button
              type="button"
              data-bs-target="#carouselExampleCaptions"
              data-bs-slide-to={0}
              className="active"
              aria-current="true"
              aria-label="Slide 1"
            />
            <button
              type="button"
              data-bs-target="#carouselExampleCaptions"
              data-bs-slide-to={1}
              aria-label="Slide 2"
            />
            <button
              type="button"
              data-bs-target="#carouselExampleCaptions"
              data-bs-slide-to={2}
              aria-label="Slide 3"
            />
            <button
              type="button"
              data-bs-target="#carouselExampleCaptions"
              data-bs-slide-to={3}
              aria-label="Slide 4"
            />
          </div>
          <div className={`${style.myCarousel} carousel-inner`}>
            <div className="carousel-item active">
              <img
                src="images/slider4.jpg"
                className="d-block w-100"
                alt="slider"
              />
              <div className={`${style.caption} carousel-caption  d-md-block`}>
                <h5>Trending Product</h5>
                <p>Everything That's New & Now</p>
              </div>
            </div>

            {sliders.map((slide) => (
              <div className="carousel-item" key={slide.id}>
                <img
                  src={`images/${
                    slide.image.split("\\")[slide.image.split("\\").length - 1]
                  }`}
                  className="d-block w-100"
                  alt="slider"
                />
                <div
                  className={`${style.caption} carousel-caption  d-md-block`}
                >
                  <h5>{slide.name}</h5>
                  <p>{slide.caption}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
