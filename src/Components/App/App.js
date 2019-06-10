import React from 'react';
import './reset.css';
import './App.css';

import Palette from '../Palette/Palette';
import ColorPicker from '../ColorPicker/ColorPicker';
import Canvas from '../Canvas/Canvas';


import screenInfo from '../../Utilities/screenInfo';

class App extends React.Component {
  constructor(props) {
    super(props);
    
    this.state = {
      mode: '',
      currentColor: 'rgb(120, 160, 200)',
      palette: [],
      paletteIndex: 0
    }

    this.setCanvas = this.setCanvas.bind(this);
    this.setCell = this.setCell.bind(this);
    this.changeColor = this.changeColor.bind(this);
    this.setPalette = this.setPalette.bind(this);
    this.changePaletteIndex = this.changePaletteIndex.bind(this);
    this.changePaletteColor = this.changePaletteColor.bind(this);
  }

  componentDidMount() {
    screenInfo.init();
    const mode = screenInfo.getMode();
  
    this.setState({
      mode: mode
    });

  }

  shouldComponentUpdate(nextProps, nextState) {
    if (this.state !== nextState) {
      return true;
    } else {
      return false;
    }
  }

  changeColor(newColor) {
    this.setState({
      currentColor: newColor
    });
  }

  getView() {
    const mode = this.state.mode;
    
    if (!mode) { return ''; }
    switch (mode) {
      case 'PC': 
        return (
          <div className="main-app">
            <div className="menubar-vertical">
              <Palette mode={mode} 
                palette={this.state.palette}
                paletteIndex={this.state.paletteIndex}
                setPalette={this.setPalette}
                changePaletteIndex={this.changePaletteIndex}
                changeColor={this.changeColor}
              />
              <ColorPicker mode={mode} 
                color={this.state.currentColor}
                changeColor={this.changeColor}
                changePaletteColor={this.changePaletteColor}
              />
            </div>
            <Canvas mode={mode}
              setCanvas={this.setCanvas}
              canvas={this.state.canvas}
              setCell={this.setCell} />
          </div>
        );
      case 'Mobile':
        return (
        <div className="main-app app-vertical">
          <Palette mode={mode}
            palette={this.state.palette}
            paletteIndex={this.state.paletteIndex}
            setPalette={this.setPalette}
            changePaletteIndex={this.changePaletteIndex}
            changeColor={this.changeColor}
          />
          <Canvas mode={mode}
            setCanvas={this.setCanvas}
            canvas={this.state.canvas}
            setCell={this.setCell} />
        </div>
        );
      case 'Tablet': 
        return (
          <div className="main-app app-vertical">
            <Canvas mode={mode}
              setCanvas={this.setCanvas}
              canvas={this.state.canvas}
              setCell={this.setCell} />
            <div className="menubar-horizontal">
              <ColorPicker mode={mode} 
                color={this.state.currentColor}
                changeColor={this.changeColor}
                changePaletteColor={this.changePaletteColor}
              />
              <Palette mode={mode}
                palette={this.state.palette}
                paletteIndex={this.state.paletteIndex}
                setPalette={this.setPalette}
                changePaletteIndex={this.changePaletteIndex}
                changeColor={this.changeColor}
              />
            </div>
          </div>
          );
      default:
        console.log('mode unknown!');
    }
  }

  setCanvas(newCanvas) {
    if (!newCanvas || newCanvas.length < 1) {
      return false;
    }
    this.setState({
      canvas: newCanvas
    });
  }

  setCell(x,y) {
    let model= [...this.state.canvas];
    if (model[y][x] === this.state.currentColor) {
      return;
    }
    model[y][x] = this.state.currentColor;
    this.setState({ canvas: model });
  }

  setPalette(newPalette) {
    this.setState({
      palette: newPalette
    });
  }

  changePaletteIndex(newIndex) {
    this.setState({
      paletteIndex: newIndex
    });
  }

  changePaletteColor(newColor) {
    const newPalette = JSON.parse(JSON.stringify(this.state.palette));
    newPalette[this.state.paletteIndex] = newColor;
    this.setState({
      palette: newPalette
    });
  }

  render() {
    return (
      <div className="App">
        {this.getView()}
      </div>
    )
  }
}

export default App;