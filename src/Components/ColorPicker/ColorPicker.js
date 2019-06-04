import React from 'react';
import './ColorPicker.css';

import convert from 'color-convert';
import { CustomPicker } from 'react-color';

class ColorPicker extends React.Component {
  constructor(props) {
    super(props);
 
  }
  
  render() {
    let pickerClass = '';
    const mode = this.props.mode;
    switch (mode) {
      case 'PC':
        pickerClass="Colorpicker pc-colorpicker";
        break;
      case 'Mobile' :
        pickerClass="Colorpicker mobile-colorpicker";
        break;
      case 'Tablet':
        pickerClass="Colorpicker tablet-colorpicker";
        break;
      default:
        pickerClass="Colorpicker";
    }
    
    return (
      <div className={pickerClass}>
        
      </div>
    )   
  }
}

export default CustomPicker(ColorPicker);