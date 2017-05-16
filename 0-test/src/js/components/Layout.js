import React from "react";

import Footer from "./Footer";
import Header from "./Header";

export default class Layout extends React.Component {
  constructor() {
    super();


    this.state = {
      title: "Welcome wwww",
    };
  }

  changeTitle(title) {
    this.setState({title});
  }

/*
      <Header changeTitle={this.changeTitle.bind(this)} title={this.state.title} />
      <Footer />  
*/

  render() {
    function formatName(user) {
      return user.firstName + ' ' + user.lastName;
    }

    let user = {
      firstName: 'Harper 123 ',
      lastName: 'Perez'
    };

    let element = (
      <h1>
        Hello, {formatName(user)}!
      </h1>
    );

    const name = 'will';

    return (
        <h1>
           <br/>{element}
        </h1>
    );
  }
}
