import React, { Component } from 'react';
import DivThree from './DivThree';

class DivTwo extends Component {
   
    render() {
        return (
            <div>
                <DivThree tardis={this.props.tardis} func={this.props.func} />
                <DivThree tardis={this.props.tardis} func={this.props.func} />
            </div>
        );
    }
}

export default DivTwo;