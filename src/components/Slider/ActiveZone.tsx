import React, { useRef } from 'react';
import { resData } from '../MovieSearchBlock';
import Slide from './Slide';
interface ActiveZoneProps {
    data: resData[],
    currentSlide: number,
    swipe: number
}

const ActiveZone: React.FC<ActiveZoneProps> = ({ data, currentSlide, swipe }) => {
    const activeZoneRef = useRef<HTMLDivElement>(null);
    return (
        <div className='slider__activeZone' ref={activeZoneRef}>
            {data.map((e, i) => {
                return (
                    <Slide data={e} active={currentSlide} thisNumb={i} key={`${i}-post`} swipe={swipe} />
                )
            })}
        </div>
    )
}

export default ActiveZone;