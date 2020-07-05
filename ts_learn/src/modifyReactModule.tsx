import * as React from 'react';
import {renderToString} from 'react-dom'


declare module 'react' {
    interface Component {
        helloWorld(): string;
    }
}

React.Component.prototype.helloWorld = function(){
    return 'HelloWorld!';
};

class MyComponent extends React.Component {
    render(){
    return <div>{this.helloWorld()}</div>
    }
}

console.log(renderToString(<MyComponent/>))