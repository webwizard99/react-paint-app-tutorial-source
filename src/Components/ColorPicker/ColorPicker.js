import React from 'react';
import './ColorPicker.css';

class ColorPicker extends React.Component {
  constructor(props) {
    super(props);

    this.getColorPicker = this.getColorPicker.bind(this);
  }

  getColorPicker() {
    const mode = this.props.mode;

    switch(mode) {
      case 'PC':
        return (<div className="colorpicker pc-colorpicker">

        </div>);
      case 'Mobile':
        return ('');
      case 'Tablet':
        return (<div className="colorpicker tablet-colorpicker">

        </div>);
      default:
        return ''
    }
  }
  
  render() {
    return (
      <div className="ColorPicker">
        {this.getColorPicker()}
      </div>
    )   
  }
}

export default ColorPicker;