import * as React from 'react';



export interface Props {
    greeting: string
    name?: string
}

function Hello({name, greeting}: Props){
    return <div>{greeting} {name}</div>;
}


export default Hello;