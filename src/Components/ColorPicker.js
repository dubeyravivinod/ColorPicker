import './ColorPicker.css';
import React from 'react';


const ColorPicker = (props) => {
    return (
        <div className='box' >
            <div className='bg' style={{backgroundColor:props.color}}></div>
            <div className='details'>
                <h4>{props.colorCode}</h4>
                <p style={{color:props.colorCode}}>{props.name}</p>
            </div>
        </div>
    );
}

export default ColorPicker;