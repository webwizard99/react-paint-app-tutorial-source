import React from 'react';
import './ColorPicker.css';

import convert from 'color-convert';
import { CustomPicker } from 'react-color';
import { Saturation, Hue } from 'react-color/lib/components/common';

class ColorPicker extends React.Component {
  constructor(props) {
    super(props);
 
    this.handleChange = this.handleChange.bind(this);
    this.handleHueChange = this.handleHueChange.bind(this);
    this.handleMouseUp = this.handleMouseUp.bind(this);
  }

  handleChange(color) {
    const rgbColor = convert.hsv.rgb(
      color.h, color.s, color.v
    );
    const rgbText = `rgb(${rgbColor[0]}, ${rgbColor[1]}, ${rgbColor[2]})`;
    this.props.changeColor(rgbText);
    this.props.changePaletteColor(rgbText);
  }
  
  handleHueChange(color) {
    const colorSplit = (this.props.color)
    .match(/(\d)+,\s*(\d)+,\s*(\d)+/)[0]
    .split(',');
  
    // we need the color prop in hsl format
    const hslColor = convert.rgb.hsl([colorSplit[0], colorSplit[1], colorSplit[2]]);

    const hslComposite = { h: color.h, s: hslColor[1], l: hslColor[2] };
    const rgbColor = convert.hsl.rgb(
      hslComposite.h, hslComposite.s, hslComposite.l);
    const rgbText = `rgb(${rgbColor[0]},${rgbColor[1]},${rgbColor[2]})`;
    this.props.changeColor(rgbText);  
    this.props.changePaletteColor(rgbText);
  }

  handleMouseUp() {
    document.activeElement.blur();
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
      <div className={pickerClass}
        color={this.props.color}>
        <div className="PickerComponents">
          <div className="SaturationContainer">
            <Saturation
              {...this.props}
              onChange={this.handleChange}
              onMouseUp={this.handleMouseUp}
            />
          </div>
          <div className="HueContainer">
            <Hue
              {...this.props}
              onChange={this.handleHueChange}
              onMouseUp={this.handleMouseUp}
            />
          </div>
        </div>
      </div>
    )   
  }
}

export default CustomPicker(ColorPicker);