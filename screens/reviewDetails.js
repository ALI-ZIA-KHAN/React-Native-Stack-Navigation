import React from 'react';
import { StyleSheet,View,Text,Button } from 'react-native';
import {globalStyles} from '../styles/global';


export default function ReviewDetails({navigation}){

    //alag se props pass krne ki zrwat nhi stack navg mn jo screens hai directly prop lelete navigation ka
    //yaahan navigation se destructure kia

    //getParams treeqa to get data
 

    return(

        <View style={globalStyles.container}>
            <Text>{navigation.getParam('title')}</Text>
            <Text>{navigation.getParam('body')}</Text>
            <Text>{navigation.getParam('rating')}</Text>
        </View>
    )
}

