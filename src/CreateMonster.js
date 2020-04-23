import React, { Component } from "react";
import Monster from "./Monster";
import air from "./icons/air.svg";
import earth from "./icons/earth.svg";
import fire from "./icons/fire.svg";
import water from "./icons/water.svg";
import attack from "./icons/attack.svg";
import defense from "./icons/defense.svg";

class CreateMonster extends Component {
  constructor(props) {
    super(props);

    this.onClickPrev = this.onClickPrev.bind(this);
    this.onClickNext = this.onClickNext.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);

    this.state = {
      index: 0,
      elementImg: "",
      elementalName: "",
      attackCounter: "",
      defenseCounter: "",
      imgList: [air, earth, fire, water],
      isSubmitted: false,
    };
  }

  //képek váltakozása
  onClickPrev() {
    if (this.state.index - 1 === -1) {
      this.setState({
        index: this.state.imgList.length - 1,
      });
    } else {
      this.setState({
        index: this.state.index - 1,
      });
    }
  }

  onClickNext() {
    if (this.state.index + 1 === this.state.imgList.length) {
      this.setState({
        index: 0,
      });
    } else {
      this.setState({
        index: this.state.index + 1,
      });
    }
  }

  handleSubmit = (event) => {
    event.preventDefault();

    var elementalName = this.state.elementalName;
    var elementImg = this.state.imgList[this.state.index];
    var attackCounter = this.state.attackCounter;
    var defenseCounter = this.state.defenseCounter;

    if ((!elementalName, !attackCounter, !defenseCounter)) {
      alert("Az adatok kitöltése kötelező!");
    } else {
      var monster = {
        elementalName,
        elementImg,
        attackCounter,
        defenseCounter,
        isSubmitted: true,
      };
    }

    this.setState({
      isSubmitted: true,
    });

    if (monster.isSubmitted) {
      this.refs.form.reset();
    }
  };

  handleChange = (event) => {
    event.preventDefault();
    this.setState({ [event.target.name]: event.target.value });
  };

  render() {
    return (
      <div>
        <div className="monster-card">
          <form onSubmit={this.handleChange} ref="form">
            <div className="elemental">
              <img
                src="./images/icons/arrow-left.svg"
                alt="prev"
                className="prev-arrow"
                onClick={this.onClickPrev}></img>
              <img
                src={this.state.imgList[this.state.index]}
                value={this.state.value}
                onChange={this.handleChange}
                alt="Elemental"
                className="elemental-img"
                name="elementalImg"></img>
              <img
                src="./images/icons/arrow-right.svg"
                alt="next"
                className="next-arrow"
                onClick={this.onClickNext}></img>
            </div>

            <div className="elemental-name">
              <label>
                Name:
                <input
                  id="new-monster-name"
                  name="elementalName"
                  type="text"
                  value={this.state.value}
                  onChange={this.handleChange}
                  min="1"
                  max="250"></input>
              </label>
            </div>
            {
              <div className="power-counter">
                <div className="power-counter-row">
                  <img src={attack} alt="attack" className="icon"></img>
                  <input
                    type="number"
                    id="attack-counter"
                    name="attackCounter"
                    min="1"
                    max="250"
                    value={this.state.value}
                    onChange={this.handleChange}
                  />
                  <img src={defense} alt="defense" className="icon"></img>
                  <input
                    type="number"
                    name="defenseCounter"
                    id="defense-counter"
                    min="1"
                    max="250"
                    value={this.state.value}
                    onChange={this.handleChange}
                  />
                </div>
              </div>
            }
            <button
              type="submit"
              onClick={(event) => {
                this.handleSubmit(event);
              }}>
              Add
            </button>
          </form>
        </div>
        <div id="createMonster">
          {this.state.isSubmitted && (
            <Monster
              elementImg={this.state.imgList[this.state.index]}
              newMonsterName={this.state.elementalName}
              attackCounter={this.state.attackCounter}
              defenseCounter={this.state.defenseCounter}
            />
          )}
        </div>
      </div>
    );
  }
}

export default CreateMonster;
