import React, { Component } from "react";

export class Login extends Component {
  constructor() {
    super();
    this.state = {
      username: "",
      password: "",
      number: "",
    };
    this.submitHandler = this.submitHandler.bind(this);
    this.handleChange1 = this.handleChange1.bind(this);
  }
  handleChange1(e) {
    const name = e.target.name;
    this.setState({
      [name]: e.target.value,
    });
  }

  submitHandler(e) {
    e.preventDefault();
    alert(
      "your name is" +
        this.state.username +
        "your password is" +
        this.state.password +
        "your number is" +
        this.state.number
    );
  }
  render() {
    return (
      <div>
        <form onSubmit={this.submitHandler}>
          <div className="input">
            <input
              type="text"
              name="username"
              value={this.state.username}
              placeholder="UserName"
              onChange={this.handleChange1}
            />
          </div>
          <br />

          <div className="input">
            <input
              type="password"
              name="password"
              placeholder="Password"
              value={this.state.password}
              onChange={this.handleChange1}
            />
          </div>
          <br />
          <div className="input">
            <input
              type="number"
              name="number"
              placeholder="Number"
              value={this.state.number}
              onChange={this.handleChange1}
            />
          </div>

          <br />
          <button type="submit">LogIn</button>
        </form>
      </div>
    );
  }
}

export default Login;
