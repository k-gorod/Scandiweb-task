import React from 'react';
import { resData } from '../MovieSearchBlock';

interface slideProps {
    data: resData,
    active: number,
    thisNumb: number,
    swipe: number
}

const Slide: React.FC<slideProps> = ({ data, active, thisNumb, swipe }) => {
    const style =
        swipe !== 0 && active === thisNumb ?
            {
                transform: `translateX(${-swipe}px) scale(${1 - Math.abs(swipe * 0.001)})`,
                transition: "none"
            } : {
                transform: active > thisNumb ? "translateX(-100%) scale(0.1)" : active < thisNumb ? "translateX(100%) scale(0.1)" : ""
            }

    return (
        <div className='movieBlock__poster poster' style={style}>
            <div className="poster__img" style={{ background: `url(${data.Poster}) center/auto 100% no-repeat` }}></div>
            <p>{data.Title}</p>
            <p>{data.Year}</p>
        </div>
    )
}

export default Slide;