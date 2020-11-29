import { Context } from 'context';
import React, { useContext, useState } from 'react';
// import { globalFunctions } from '../../constants';
import './index.scss'
import Opt from './Opt';

interface SelectProps {
    options: number[],
    height: number,
    currenValue: number,
}

const CustomSelect: React.FC<SelectProps> = ({options, height, currenValue}) => {
    const [active, setActive] = useState(false)
    const {globalFunctions} = useContext(Context)
    const selectClick = () => {
        setActive(true)
    }
    const closeSelect = () => {
        if (active) {
           setActive(false)
        }
    }
    globalFunctions.closeSelect = closeSelect
    const changeActive = (value: number) => {
        globalFunctions.moveToSlide(value - 1)
    }
    return (
        <div className='select'>
            <div className='select__wrp' onClick={selectClick} style={{ zIndex: active ? 0 : options.length + 1 }}>
            </div>
            {options.map((e, i) => {
                return (
                    <Opt
                        key={"opt-" + i}
                        z={(currenValue + 1) === e ? 2 : 1}
                        pos={active ? i : 0}
                        value={e}
                        height={height}
                        closeSelect={closeSelect}
                        changeActive={changeActive}
                        disable={false} />
                )
            })}
        </div>
    )
}



export default CustomSelect;