
import React, { useState } from 'react';
import {AppLoading} from 'expo';
import * as Font from 'expo-font';
import Home from './screens/home';
import About from './screens/about';
import ReviewDetails from './screens/reviewDetails';
import Navigator from './routes/homeStack';


const getFonts = () => Font.loadAsync({
  'nunito-regular': require('./assets/fonts/Nunito-Regular.ttf'),
  'nunito-bold': require('./assets/fonts/Nunito-Bold.ttf')
});



export default function App() {

  const [fontsLoaded,setFontsLoaded] = useState(true);


  if (fontsLoaded) {
    return (
      <Navigator/>
    );

  } 
  else {

return (
  <AppLoading
//see notepad for explantion of this
  startAsync={getFonts}
  onFinish={()=> setFontsLoaded(true)}
  />

   );
  }
}

