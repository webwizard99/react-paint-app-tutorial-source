import React from 'react';
import './Canvas.css';

class Canvas extends React.Component {
  constructor(props) {
    super(props);

    this.getCanvas = this.getCanvas.bind(this);
  }

  getCanvas() {
    const mode = this.props.mode;

    switch(mode) {
      case 'PC':
        return (<div className="canvas pc-canvas">

        </div>);
      case 'Mobile':
        return (<div className="canvas mobile-canvas">

        </div>);
      case 'Tablet':
        return (<div className="canvas tablet-canvas">

        </div>);
      default:
        return ''
    }
  }
  
  render() {
    return (
      <div className="Canvas">
        {this.getCanvas()}
      </div>
    )
  }
}

export default Canvas;