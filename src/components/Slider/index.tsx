import React, { useContext, useState } from "react";
import { resData } from "../MovieSearchBlock";
import "./index.scss";
import ActiveZone from "./ActiveZone";
import CustomSelect from "../CustomSelect";
import { Context } from "../../context";

interface SliderProps {
  data: resData[];
}
const Silder: React.FC<SliderProps> = ({ data }) => {
  const [activeSlide, setActiveSlide] = useState(0);
  const [swipeStart, setSwipeStart] = useState(0);
  const [swipeNumber, setSwipeNumber] = useState(0);
  const { globalFunctions } = useContext(Context);
  const toDefault = () => {
    setSwipeStart(0);
    setSwipeNumber(0);
  };
  const rightArrowClick = () => {
    toDefault();
    activeSlide < (data.length-1)?
    setActiveSlide(activeSlide + 1):
    setActiveSlide(0);
  };
  const leftArrowClick = () => {
    toDefault();
    activeSlide > 0?
    setActiveSlide(activeSlide - 1):
    setActiveSlide((data.length-1))
  };
  const moveToSlide = (number: number) => {
    setActiveSlide(number);
  };
  globalFunctions.moveToSlide = moveToSlide;
  const mouseDown = (
    e: React.MouseEvent<HTMLDivElement> & React.TouchEvent
  ) => {
    setSwipeStart(e.type === "touchstart" ? e.touches[0].clientX : e.clientX);
  };
  const mouseUp = () => {
    if (swipeNumber > 100) {
      rightArrowClick();
    }
    if (swipeNumber < -100) {
      leftArrowClick();
    } else {
      toDefault();
    }
  };
  const mouseMove = (
    e: React.MouseEvent<HTMLDivElement> & React.TouchEvent
  ) => {
    if (swipeStart) {
      setSwipeNumber(
        swipeStart - (e.type === "touchmove" ? e.touches[0].clientX : e.clientX)
      );
    }
  };
  const arr = data.map((_, i) => {
    return i + 1;
  });
  console.log(data);
  
  return (
    <div
      className="topBlock__slider slider"
      onMouseLeave={mouseUp}
      onTouchEnd={mouseUp}
      onMouseUp={mouseUp}
      onTouchStart={mouseDown}
      onMouseDown={mouseDown}
      onTouchMove={mouseMove}
      onMouseMove={mouseMove}
    >
      <div className="slider__counter">
        <CustomSelect options={arr} height={18} currenValue={activeSlide} />
      </div>
      <svg
        className="slider__arrowLeft"
        viewBox="0 0 5 9"
        onClick={leftArrowClick}
      >
        <path d="M0.419,9.000 L0.003,8.606 L4.164,4.500 L0.003,0.394 L0.419,0.000 L4.997,4.500 L0.419,9.000 Z" />
      </svg>
      <ActiveZone data={data} currentSlide={activeSlide} swipe={swipeNumber} />
      <svg
        className="slider__arrowRight"
        viewBox="0 0 5 9"
        onClick={rightArrowClick}
      >
        <path d="M0.419,9.000 L0.003,8.606 L4.164,4.500 L0.003,0.394 L0.419,0.000 L4.997,4.500 L0.419,9.000 Z" />
      </svg>
    </div>
  );
};
export default Silder;
