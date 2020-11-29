import React from 'react';
import './index.scss'
interface OptProps {
    value: number;
    pos: number,
    height: number
    z: number,
    closeSelect: ()=>void,
    changeActive: (value:number)=>void,
    disable:boolean
}
const Opt: React.FC<OptProps> = ({value, pos, height, z, closeSelect, changeActive, disable}) => {
    const click = () => {
        if(!disable)changeActive(value);
        closeSelect()
    }
    const style = {
        height: height,
        zIndex: z,
        transform: `translateY(${pos*110}%)`,
        color: disable?'rgba(0, 0, 0, 0.2)':'  rgb(57, 170, 51)'
    }
    return (
        <div style={style} className='select__opt' onClick={click}>
            {value}
        </div>
    )
}

export default Opt;