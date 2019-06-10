import React from 'react';
import './Palette.css';
import paletteManager from '../../Utilities/paletteManager';
import Color from '../Color/Color';

class Palette extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    paletteManager.init();
    const tempPalette = JSON.parse(JSON.stringify(paletteManager.getPalette()));
    this.props.setPalette(tempPalette);
  }

  getPalette() {
    const model = this.props.palette;
    return model.map((color, colorN) => {
      return (
        <Color key={colorN}
          active={colorN === this.props.paletteIndex ? true : false}
          number={colorN}
          color={color}
          changePaletteIndex={this.props.changePaletteIndex}
          changeColor={this.props.changeColor}
        />
      )
    })
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