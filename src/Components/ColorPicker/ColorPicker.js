import React from 'react';
import './ColorPicker.css';

class ColorPicker extends React.Component {
  constructor(props) {
    super(props);

    this.getColorPicker = this.getColorPicker.bind(this);
  }

  getColorPicker() {
    
  }
  
  render() {
    let pickerClass = '';
    const mode = this.props.mode;
    switch (mode) {
      case 'PC':
        pickerClass="colorpicker pc-colorpicker";
        break;
      case 'Mobile' :
        pickerClass="colorpicker mobile-colorpicker";
        break;
      case 'Tablet':
        pickerClass="colorpicker tablet-colorpicker";
        break;
      default:
        pickerClass="colorpicker";
    }
    
    return (
      <div className={pickerClass}>
        {this.getColorPicker()}
      </div>
    )   
  }
}

export default ColorPicker;