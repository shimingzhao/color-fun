import React from "react";

class Box extends React.Component {
  render() {
    return (
      <div className="wrapper">
        <div style={{
          backgroundColor: this.props.color ? `${this.props.color}` : 'white'
        }}
             className="box">
          <button onClick={()=>{this.props.handleClick()}}>Change Color</button>
        </div>
      </div>
    )
  }
}

export default Box;