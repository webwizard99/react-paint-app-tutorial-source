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
        paletteClass="Palette pc-palette";
        break;
      case 'Mobile' :
        paletteClass="Palette mobile-palette";
        break;
      case 'Tablet':
        paletteClass="Palette tablet-palette";
        break;
      default:
        paletteClass="Palette";
    }
    
    return (
      <div className={paletteClass}>
        {this.getPalette()}
      </div>
    )   
  }
}

export default Palette;