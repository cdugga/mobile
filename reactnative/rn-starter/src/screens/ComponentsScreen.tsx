import React from 'react'

import {Text, StyleSheet} from 'react-native'


export default class ComponentsScreen extends React.Component {

    render () {
        return <Text style={styles.textStyle} >Mayo for Sam, from components screen!</Text>;
    }
   
}

// const ComponentsScreen = () => {

//     return <Text style={styles.textStyle} >Mayo for Sam, from components screen!</Text>;

// };

const styles = StyleSheet.create({

    textStyle: {
        fontSize: 30
    }


});

//export default ComponentsScreen;