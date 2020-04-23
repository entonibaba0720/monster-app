import React, { Component } from "react";
import trash from "./icons/trash-can.svg";
import attack from "./icons/attack.svg";
import defense from "./icons/defense.svg";

class Monster extends Component {
  render() {
    return (
      <div>
        <div className="monster-card">
          <img src={this.props.elementImg} alt="elementalimg"></img>
          <h4>{this.props.newMonsterName}</h4>
          <div className="power-counter">
            <img src={attack} alt="attack" className="icon"></img>
            <p>{this.props.attackCounter}</p>
            <img src={defense} alt="defense" className="icon"></img>
            <p>{this.props.defenseCounter}</p>
            <img
              id="trash"
              src={trash}
              alt="delete"
              className="icon"
              name="trash"
              onClick={this.deleteMonster}></img>
          </div>
        </div>
      </div>
    );
  }
}

export default Monster;
