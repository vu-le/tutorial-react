import React from "react";

import Footer from "./Footer";
import Header from "./Header";

import Title from "./Header/Title";

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
       <h1> Hello, {formatName(user)}! </h1>
    );

    const name = 'will';

    var list = [ <Header title='test1'/>,<Header title='test2'/> ];

    setTimeout(() => {
     // this.setState({title: 'Vu Le'})
      this.changeTitle('asdfasdf')
    }, 3000)

    return (
        <div>
           {this.state.title} <br/>
           <Header title='my test'/>
           <Footer/>

        </div>
    );
  }
}
