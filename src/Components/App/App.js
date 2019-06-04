import React from 'react';
import './reset.css';
import './App.css';

import Palette from '../Palette/Palette';
import ColorPicker from '../ColorPicker/ColorPicker';
import Canvas from '../Canvas/Canvas';


import screenInfo from '../../Utilities/screenInfo';
import canvasManager from '../../Utilities/canvasManager';

class App extends React.Component {
  constructor(props) {
    super(props);
    
    this.state = {
      mode: '',
      currentColor: 'rgb(120, 160, 200)'
    }

    this.setCanvas = this.setCanvas.bind(this);
    this.setCell = this.setCell.bind(this);
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


  getView() {
    const mode = this.state.mode;
    
    if (!mode) { return ''; }
    switch (mode) {
      case 'PC': 
        return (
          <div className="main-app">
            <div className="menubar-vertical">
              <Palette mode={mode} />
              <ColorPicker mode={mode} 
                color={this.state.currentColor}
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
          <Palette mode={mode} />
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
              />
              <Palette mode={mode} />
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

  render() {
    return (
      <div className="App">
        {this.getView()}
      </div>
    )
  }
}

export default App;