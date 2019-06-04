import React from 'react';
import './Canvas.css';
import Cell from '../Cell/Cell';

import canvasManager from '../../Utilities/canvasManager';

class Canvas extends React.Component {
  constructor(props) {
    super(props);

  }

  componentDidMount() {
    canvasManager.init();
    const tempBlankCanvas = canvasManager.createBlankCanvas();
    this.props.setCanvas(tempBlankCanvas);
  }

  getCanvas() {
    const model = this.props.canvas;
    const cellSize = canvasManager.getCellSize();
    
    if (!model || model.length < 1) return '';
    return model.map((row, rowNum) => {
      
      return (
        <div className="row" key={rowNum}>
          {row.map((cell, cellNum) => {
            return (
              <Cell key={cellNum}
                cellContents={cell}
                x={cellNum}
                y={rowNum}
                cellSize={cellSize}
                setCell={this.props.setCell}
              />
            );
            })
          }
        </div>
      );
    });
  }
  
  render() {
    let canvasClass = '';
    const mode = this.props.mode;
    switch (mode) {
      case 'PC':
        canvasClass="Canvas pc-canvas";
        break;
      case 'Mobile' :
        canvasClass="Canvas mobile-canvas";
        break;
      case 'Tablet':
        canvasClass="Canvas tablet-canvas";
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