import React from "react";
import ReactDOM from "react-dom";

import Layout from "./components/Layout";

/*
class Test extends React.Component {
    render() {

        function formatName(user) {
          return user.firstName + ' ' + user.lastName;
        }

        let user = {
          firstName: 'Harper 333333',
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
                <br/>{formatName(user)}
            </h1>
        )
    }
}
*/

const app = document.getElementById('app');

//ReactDOM.render(element, app);
//ReactDOM.render(<Test/>, app);
ReactDOM.render(<Layout/>, app);
