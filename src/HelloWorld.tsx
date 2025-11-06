import React from 'react';
import {Text, View,Button} from 'react-native';

const HelloWorldApp = () => {
  return (
    
    <View
        style={{
            flex: 1,
            justifyContent: 'center',
            alignItems: 'center',
        }}>
        <Text style={{fontSize:20,}}>Hello, world!</Text>
        <Button title='Press yes'></Button>
    </View>
  );
};
export default HelloWorldApp
