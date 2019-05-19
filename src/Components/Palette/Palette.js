import React from 'react';
import './Palette.css';

class Palette extends React.Component {
  constructor(props) {
    super(props);

  }

  getPalette() {
    
  }
  
  render() {
    let paletteClass = '';
    const mode = this.props.mode;
    switch (mode) {
      case 'PC':
        paletteClass="palette pc-palette";
        break;
      case 'Mobile' :
        paletteClass="palette mobile-palette";
        break;
      case 'Tablet':
        paletteClass="palette tablet-palette";
        break;
      default:
        paletteClass="palette";
    }
    
    return (
      <div className={paletteClass}>
        {this.getPalette()}
      </div>
    )   
  }
}

export default Palette;