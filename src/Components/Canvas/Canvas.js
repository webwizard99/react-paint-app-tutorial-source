import React from 'react';
import './Canvas.css';

class Canvas extends React.Component {
  constructor(props) {
    super(props);

  }

  getCanvas() {
    
  }
  
  render() {
    let canvasClass = '';
    const mode = this.props.mode;
    switch (mode) {
      case 'PC':
        canvasClass="canvas pc-canvas";
        break;
      case 'Mobile' :
        canvasClass="canvas mobile-canvas";
        break;
      case 'Tablet':
        canvasClass="canvas tablet-canvas";
        break;
      default:
        canvasClass="Canvas";
    }
    return (
      <div className={canvasClass}>
        {this.getCanvas()}
      </div>
    )
  }
}

export default Canvas;