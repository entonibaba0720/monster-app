import React, { Component } from "react";
import attack from "./icons/attack.svg";
import defense from "./icons/defense.svg";
import air from "./icons/air.svg";
import earth from "./icons/earth.svg";
import fire from "./icons/fire.svg";
import water from "./icons/water.svg";

const imgList = [air, earth, fire, water];

class NewMonsterForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      elementalName: "",
      elementImg: "",
      attackCounter: "",
      defenseCounter: "",
      index: 0,
      monsterIndex: 1,
    };

    this.onClickPrev = this.onClickPrev.bind(this);
    this.onClickNext = this.onClickNext.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  onClickPrev() {
    if (this.state.index - 1 === -1) {
      this.setState({
        index: imgList.length - 1,
      });
    } else {
      this.setState({
        index: this.state.index - 1,
      });
    }
  }

  onClickNext() {
    if (this.state.index + 1 === imgList.length) {
      this.setState({
        index: 0,
      });
    } else {
      this.setState({
        index: this.state.index + 1,
      });
    }
  }

  handleChange(event) {
    this.setState({ [event.target.name]: event.target.value });
  }

  handleSubmit(event) {
    event.preventDefault();

    let elementalName = this.state.elementalName;
    let attackCounter = this.state.attackCounter;
    let defenseCounter = this.state.defenseCounter;

    if ((!elementalName, !attackCounter, !defenseCounter)) {
      alert("Fields are required!");
    } else {
      this.setState((prev) => {
        return {
          monsterIndex: prev.monsterIndex + 1,
        };
      });

      this.props.createMonster(this.state);

      this.setState({
        elementalName: "",
        elementalImg: "",
        attackCounter: "",
        defenseCounter: "",
      });
    }
  }

  render() {
    return (
      <div>
        <h4>Create Monster</h4>
        <div className="monster-card">
          <form onSubmit={this.handleSubmit} ref="form">
            <div className="elemental">
              <img
                src="./images/icons/arrow-left.svg"
                alt="prev"
                className="prev-arrow"
                onClick={this.onClickPrev}></img>

              <img
                src={imgList[this.state.index]}
                name={this.state.index}
                index={this.state.index}
                alt="Elemental"
                className="elemental-img"
                id="elementalImg"></img>
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
                  name="elementalName"
                  type="text"
                  value={this.state.elementalName}
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
                    value={this.state.attackCounter}
                    onChange={this.handleChange}
                  />
                  <img src={defense} alt="defense" className="icon"></img>
                  <input
                    type="number"
                    name="defenseCounter"
                    id="defense-counter"
                    min="1"
                    max="250"
                    value={this.state.defenseCounter}
                    onChange={this.handleChange}
                  />
                </div>
              </div>
            }
            <button type="submit">Add</button>
          </form>
        </div>
      </div>
    );
  }
}

export default NewMonsterForm;
