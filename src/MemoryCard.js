import React, { Component } from 'react';
import './MemoryCard.css';

//<img src="https://www.digitalcrafts.com/img/DigitalCrafts-Logo-Wrench.png"/>

class MemoryCardBack extends Component {
  render() {
    var memoryCardInnerClass = "MemoryCardInner";
    if (this.props.isFlipped) {
      memoryCardInnerClass = memoryCardInnerClass + " flipped"
    }
    return (
      <div className="MemoryCard" onClick={this.props.pickCard}>
        <div className={memoryCardInnerClass}>
          <div className="MemoryCardBack">

          </div>
          <div className="MemoryCardFront">
            {this.props.symbol}
          </div>
        </div>
      </div>
    );
  }
}

export default MemoryCardBack;