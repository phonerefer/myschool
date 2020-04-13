/* eslint-disable no-useless-constructor */
import React , {Component} from 'react';

class Home extends  Component{
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="container">
                <h1>Hello! World</h1>
                <p>I am not from this world.</p>
            </div>
        );
    }

}
export  default Home;