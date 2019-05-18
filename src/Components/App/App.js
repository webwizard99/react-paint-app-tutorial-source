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
      mode: ''
    }
  }

  componentDidMount() {
    screenInfo.init();
    const mode = screenInfo.getMode();
    console.log(mode);

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
    console.log(mode);
    
    if (!mode) { return ''; }
    switch (mode) {
      case 'PC': 
        return (
          <div className="main-app">
            <div className="menubar-vertical">
              <Palette mode={mode} />
              <ColorPicker mode={mode} />
            </div>
            <Canvas mode={mode} />
          </div>
        );
      case 'Mobile':
        return (
        <div className="main-app app-vertical">
          <Palette mode={mode} />
          <Canvas mode={mode} />
        </div>
        );
      case 'Tablet': 
        return (
          <div className="main-app app-vertical">
            <Canvas mode={mode}/>
            <div className="menubar-horizontal">
              <ColorPicker mode={mode} />
              <Palette mode={mode} />
            </div>
          </div>
          );
      default:
        console.log('mode unknown!');
    }
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