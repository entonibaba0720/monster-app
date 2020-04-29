import React, { Component } from "react";
import trash from "./icons/trash-can.svg";
import attack from "./icons/attack.svg";
import defense from "./icons/defense.svg";
import imgList from "./ImgList";

class Monster extends Component {
  render() {
    return (
      <div className="monster-card">
        <img
          src={imgList[this.props.index]}
          name={this.props.index}
          index={this.props.index}
          id="elementalImg"
          alt="elementalimg"
        />
        <h4>{this.props.elementalName}</h4>
        <div className="power-counter">
          <img src={attack} alt="attack" className="icon" />
          <p>{this.props.attackCounter}</p>
          <img src={defense} alt="defense" className="icon" />
          <p>{this.props.defenseCounter}</p>
          <img
            src={trash}
            alt="delete"
            className="icon trash"
            name="trash"
            onClick={this.props.delete}
            id={this.props.monsterIndex}></img>
        </div>
      </div>
    );
  }
}

export default Monster;
