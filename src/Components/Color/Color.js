import React from 'react';
import './Color.css';

class Color extends React.Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.props.changePaletteIndex(this.props.number);
    this.props.changeColor(this.props.color);
  }
  
  render() {
    return (
      <div className={`Color${this.props.active ? ' activeColor' : ''}`}
        style={{ backgroundColor: this.props.color }}
        onClick={this.handleClick}
      >
        
      </div>
    )   
  }
}

export default Color;