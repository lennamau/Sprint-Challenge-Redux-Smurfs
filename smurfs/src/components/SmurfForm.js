import React from "react";

class SmurfForm extends React.Component {
  constructor(props) {
    super(props);
    if (this.props.smurf) {
      this.state = {
        id: this.props.smurf.id,
        name: this.props.smurf.name,
        age: this.props.smurf.age,
        height: this.props.smurf.height
      }
    } else {
      this.state = {
        id: null,
        name: "",
        age: "",
        height: ""
      }
    }
  }

  handleChanges = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  handleSubmit = e => {
    e.preventDefault();
    if (this.state.id) {
      const smurf = {
        id: this.state.id,
        name: this.state.name,
        age: this.state.age,
        height: this.state.height
      };
      this.props.submit(smurf);
      this.setState({
        id: null,
        name: "",
        age: "",
        height: ""
      });
    }
    const smurf = {
      name: this.state.name,
      age: this.state.age,
      height: this.state.height
    };
    this.props.submit(smurf);
    this.setState({
      id: null,
      name: "",
      age: "",
      height: ""
    });
  };

  render() {
    return (
      <div className="SmurfForm">
        <h2>Add Smurf</h2>
        <form className="form-items" onSubmit={this.handleSubmit}>
          <input
            name="name"
            value={this.state.name}
            placeholder="Smurf Name"
            onChange={this.handleChanges}
          />
          <div className="baseline" />
          <input
            name="height"
            value={this.state.height}
            placeholder="height"
            onChange={this.handleChanges}
          />
          <div className="baseline" />
          <input
            name="age"
            value={this.state.age}
            placeholder="age"
            onChange={this.handleChanges}
          />
          <div className="baseline" />

          <button className="myButton">Add Smurf</button>
        </form>
      </div>
    );
  }
}

export default SmurfForm;
