import * as React from 'react';
import { NextPage } from 'next';
import Hello from './Hello'

interface InitialProps {
    greeting: string
}

export interface Props extends InitialProps {
    a: string
}

const IndexPage: NextPage<Props, InitialProps> = (props) => {
return <div>{props.greeting} <Hello greeting="howya now" name="colin"/> </div>;
};

IndexPage.getInitialProps = async() => ({
    greeting: 'Hello World'
}); 

export default IndexPage;