'use client'

import { useSwiper } from 'swiper/react';
import { PiCaretLeftBold, PiCaretRightBold } from "react-icons/pi";
import React from 'react'

const WorkSliderBtn = ({containerStyles, btnStyles, iconStyles }) => {
    const swiper = useSwiper();
  return (
    <div className={containerStyles}>
      <button className={btnStyles} onClick={() => swiper.slidePrev()}>
        <PiCaretLeftBold className={iconStyles}/>
      </button>
      <button className={btnStyles} onClick={() => swiper.slideNext()}>
        <PiCaretRightBold/>
      </button>
    </div>
  )
}

export default WorkSliderBtn
