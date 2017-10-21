import React, { Component } from 'react';
import { Text } from 'react-native';
import Login from './src/routes/Login';
import Signup from './src/routes/Signup';
// export default class App () => {
//     this.state={component:'Signup'};
//     render(){
//         if(this.state.component="Signup")
//             return(
//                     <Signup/>
//                 )
//     }
// }
export default class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = { component: 'Signup' };
    }
    changestate(com) {
        this.setState({ component: com });
    }
    render() {
        if (this.state.component == 'Signup') {
            return <Signup changeV={this.changestate.bind(this)} />;
        } else if (this.state.component == 'Login') {
            return <Login changeV={this.changestate.bind(this)} />;
        }
    }
}
