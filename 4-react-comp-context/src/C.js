import React, { Component } from 'react';
import ColorContext from './ColorContext';

class C extends Component {
    render() {
        return (
            <div>
                <div className="card card-body">
                    C component :
                        <ColorContext.Consumer>
                        {value => value}
                    </ColorContext.Consumer>
                </div>
            </div>
        );
    }
}

export default C;