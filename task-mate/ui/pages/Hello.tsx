import * as React from 'react';
import { NextPage } from 'next';


export interface Props {
    greeting: string
    name?: string
}

function Hello({name, greeting}: Props){
    return <div>{greeting} {name}</div>;
}


export default Hello;