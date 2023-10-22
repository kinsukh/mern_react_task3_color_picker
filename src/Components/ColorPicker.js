import React, { useState } from "react";
import "./ColorPicker.css";

const ColorPicker = () => {
    const [showColorList, setShowColorList] = useState(false);
    const [selectedColor, setSelectedColor] = useState('white');

    const toggleColorList = () => {
        setShowColorList(!showColorList);
    }

    // eslint-disable-next-line
    const colors = ['red', 'green', 'blue', 'yellow', 'rgb(0,255,255)', 'orange', '#81007F' ,'#FFC0CB','darkgreen', 
    ,'#FE6347','#01CED1','brown' , '#FF8B00','#4682B4','#FED700'];

    const selectColor = (color) => {
        setSelectedColor(color);
        setShowColorList(false);
    }

    return (
        <div>
            <div className='color-big-box' style={{ backgroundColor: selectedColor }}>
                <div className="color-list">
                    {showColorList && (
                        <div className={'color-options'}>
                            {colors.map((color, index) => (
                                <div
                                    key={index}
                                    className={`color-option ${color === selectedColor ? 'selected' : ''}`}
                                    style={{
                                        backgroundColor: color,
                                        cursor: 'pointer'
                                    }}
                                    onClick={() => selectColor(color)}
                                ></div>
                            ))}
                        </div>
                    )}
                    <button onClick={toggleColorList} className={showColorList ? 'active' : ''}>
                        {showColorList ? 'Cancel' : 'Pick your color'}
                    </button>
                </div>
            </div>
        </div>
    )
}

export default ColorPicker;
