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
        {this.getColorPicker()}
      </div>
    )   
  }
}

export default ColorPicker;