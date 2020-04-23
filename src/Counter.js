import React, { Component } from "react";
import attack from "./icons/attack.svg";
import defense from "./icons/defense.svg";

class Counter extends Component {
  constructor(props) {
    super(props);

    this.state = {
      elementalName: "",
      attackCounter: "",
      defenseCounter: "",
    };

    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(event) {
    event.preventDefault();
    const elementImage = document.getElementsByClassName("elemental-img");
    const newMonsterName = document.getElementById("new-monster-name").value;
    const attackCounter = document.getElementById("attack-counter").value;
    const defenseCounter = document.getElementById("defense-counter").value;

    this.setState({
      elementImage: this.imageList,
      elementalName: newMonsterName,
      attackCounter: Number(attackCounter),
      defenseCounter: Number(defenseCounter),
    });

    let monsters = [
      {
        elementImage: this.imageList,
        elementalName: newMonsterName,
        attackCounter: Number(attackCounter),
        defenseCounter: Number(defenseCounter),
      },
    ];
    console.log(monsters);
    var monsterHTML = "";

    for (var monster of monsters) {
      monsterHTML += `<li class="list-group-item">${monster.attackCounter} ${monster.defenseCounter}</li>`;
    }

    document.getElementById("createMonster").innerHTML =
      `<img>${elementImage}</img><h3>${newMonsterName}</h3><ul class="list-group">` +
      monsterHTML +
      `</ul>`;
  }

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <div className="elemental-name">
            <label>
              Name:
              <input
                id="new-monster-name"
                name="elementalName"
                value={this.state.value}
                min="1"
                max="250"
              ></input>
            </label>
          </div>
          <div className="power-counter">
            <div className="power-counter-row">
              <img src={attack} alt="attack" className="icon"></img>
              <input
                type="number"
                id="attack-counter"
                name="attackCounter"
                min="1"
                max="250"
                value={this.value}
              />
              <img src={defense} alt="defense" className="icon"></img>
              <input
                type="number"
                name="defenseCounter"
                id="defense-counter"
                min="1"
                max="250"
                value={this.value}
              />
            </div>
            <div>
              <button onClick={this.handleSubmit}>Add</button>
            </div>
          </div>
        </form>
        <div id="createMonster"></div>
      </div>
    );
  }
}

export default Counter;
