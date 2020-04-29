import React, { Component } from "react";
import Monster from "./Monster";
import NewMonsterForm from "./NewMonsterForm";
import Search from "./Search";

class CreateMonster extends Component {
  constructor(props) {
    super(props);
    this.state = {
      monsters: [],
      search: "",
      isSearching: false,
    };
    this.create = this.create.bind(this);
    this.filter = this.filter.bind(this);
  }

  create(newMonster) {
    this.setState({
      monsters: [...this.state.monsters, newMonster],
    });
  }

  delete(monsterIndex, event) {
    const monsters = Object.assign([], this.state.monsters);
    monsters.splice(monsterIndex, 1);
    this.setState({
      monsters: monsters,
    });
  }

  filter(query) {
    if (query) {
      this.setState({
        search: query,
        isSearching: true,
      });
    } else {
      this.setState({
        search: query,
        isSearching: false,
      });
    }
  }

  render() {
    let filteredMonster = this.state.monsters.filter((monster) => {
      return monster.elementalName.indexOf(this.state.search) !== -1;
    });
    const monstersToRender =
      this.state.isSearching === true ? filteredMonster : this.state.monsters;
    const monsters = monstersToRender.map((monster, monsterIndex) => {
      return (
        <Monster
          elementalName={monster.elementalName}
          elementalImg={monster.elementalImg}
          attackCounter={Number(monster.attackCounter)}
          defenseCounter={Number(monster.defenseCounter)}
          index={monster.index}
          key={monster.monsterIndex}
          monsterIndex={monster.monsterIndex}
          delete={this.delete.bind(this, monsterIndex)}
        />
      );
    });

    return (
      <div>
        <NewMonsterForm createMonster={this.create} />
        <Search filter={this.filter} />
        <ul>{monsters}</ul>
      </div>
    );
  }
}

export default CreateMonster;
