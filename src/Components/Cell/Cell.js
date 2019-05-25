import React from 'react';
import './Cell.css';

class Cell extends React.Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(e) {
    if (e.buttons === 1 || e.type === 'mouseDown') {
      const refX = this.props.x;
      const refY = this.props.y;
      this.props.setCell(refX, refY);
    }
  }
  
  render() {
    return (
      <div className="Cell"
      onMouseDown={this.handleClick}
      onMouseOver={this.handleClick}
      style={ 
        {
          backgroundColor: this.props.cellContents,
          height: `${this.props.cellSize}px`,
          width: `${this.props.cellSize}px`
        }
      }
    ></div>
    )
  }
}

export default Cell;