import React, { Component } from 'react';
import DivTwo from './DivTwo';


class DivOne extends Component {
   
    render() {
        return (
            <div>
               <DivTwo tardis={this.props.tardis} func={this.props.func}/> 
            </div>
        );
    }
}

export default DivOne;