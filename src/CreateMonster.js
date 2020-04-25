import React, { Component } from "react";

import Monster from "./Monster";
import NewMonsterForm from "./NewMonsterForm";

class CreateMonster extends Component {
  constructor(props) {
    super(props);
    this.state = {
      monsters: [],
    };

    this.create = this.create.bind(this);
  }

  create(newMonster) {
    this.setState({
      monsters: [...this.state.monsters, newMonster],
    });
  }
  render() {
    const monsters = this.state.monsters.map((monster) => {
      return (
        <Monster
          elementalName={monster.elementalName}
          elementalImg={monster.currentImg}
          attackCounter={monster.attackCounter}
          defenseCounter={monster.defenseCounter}
        />
      );
    });
    return (
      <div>
        <h1>Monster List</h1>
        <NewMonsterForm createMonster={this.create} />
        <ul>{monsters}</ul>
      </div>
    );
  }
}

export default CreateMonster;
