import React, { useState } from 'react';
import { StyleSheet, View, Text, TouchableOpacity, FlatList } from 'react-native';
import { globalStyles } from '../styles/global';

export default function Home({ navigation }) {

    //navigation as a prop lerahe ab data bhi pass krrahe to routes
  const [reviews, setReviews] = useState([
    { title: 'Zelda, Breath of Fresh Air', rating: 5, body: 'lorem ipsum', key: '1' },
    { title: 'Gotta Catch Them All (again)', rating: 4, body: 'lorem ipsum', key: '2' },
    { title: 'Not So "Final" Fantasy', rating: 3, body: 'lorem ipsum', key: '3' },
  ]);

  // for line(19)-> navigate krte hue data bhjna ho to 2nd parameter obj dete wo item hai already
  //hr ek obj alg page pr lejaega review k along with daata
  //key ki value lazmi hai
  return (
    <View style={globalStyles.container}>

      <FlatList data={reviews} renderItem={({ item }) => (
        <TouchableOpacity onPress={() => navigation.navigate('ReviewDetails', item)}>
 

          <Text style={globalStyles.titleText}>{ item.title }</Text>
        </TouchableOpacity>
      )} />
    </View>
  );
}