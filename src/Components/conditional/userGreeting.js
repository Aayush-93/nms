import React, { Component } from "react";

export class UserGreeting extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoggedIn: false,
    };
  }
  render() {
    if (this.state.isLoggedIn) {
      return <h1> Welcome user Aayush</h1>;
    } else {
      return <h1> Welcome Guest</h1>;
    }

    // or u can do is Using ternarry operator
    // return this.state.isLoggedIn ? <h1> Welcome</h1> : <h1>u r a guest</h1>;

    // return (
    //   <div>
    //     <h1>Welcome Aayush</h1>
    //     <h1> Welcome Guest</h1>
    //   </div>
    // );
  }
}

export default UserGreeting;
