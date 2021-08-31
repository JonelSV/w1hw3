import React, { Component } from 'react';

class DivThree extends Component {
   
    render() {
        return (
            <div>
                <h3 onClick={ () => (this.props.func(this.props.tardis))}>{this.props.tardis}</h3>
            </div>
            
        );
    }
}

export default DivThree;