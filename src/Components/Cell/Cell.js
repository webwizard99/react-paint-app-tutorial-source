import React from 'react';
import './Cell.css';

class Cell extends React.Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }

  shouldComponentUpdate(nextProps) {
    if (this.props !== nextProps) {
      return true;
    } else return false;
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
      onPointerDown={this.handleClick}
      onPointerMove={this.handleClick}
      style={ 
        {
          backgroundColor: this.props.cellContents ?
            this.props.cellContents : '',
          height: `${this.props.cellSize}px`,
          width: `${this.props.cellSize}px`
        }
      }
    ></div>
    )
  }
}

export default Cell;