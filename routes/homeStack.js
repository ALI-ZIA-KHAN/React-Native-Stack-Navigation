import { createStackNavigator } from "react-navigation-stack";
import { createAppContainer } from "react-navigation";
import Home from "../screens/home";
import ReviewDetails from "../screens/reviewDetails";




//naam kch bhi deskte the pr logicallly ye sahi lgraha
const screens={

    //jo uper rkha hai  wo stack pr pehle hoga
    Home:{
        screen:Home,
        navigationOptions:{
            title:'GameZone',
            // headerStyle:{backgroundColor:'#eff'}

            //neeche wale headerstyle ko override krna hai to yahan headerStyle alg se dedo
        }
    },
    ReviewDetails:{
        screen:ReviewDetails,
        navigationOptions:{
            title:'Review Details',
            // headerStyle:{backgroundColor:'#eff'}
        }
    },
   
   
}
const HomeStack=createStackNavigator(screens,{
    defaultNavigationOptions:{
        //by defeault jo stack navigator pr jo header milta use customize kia hai with object
        headerTintColor:'#411',
        headerStyle:{backgroundColor:'#eff',height:100}

    }
})//function acquire krlia jo import kia jo object leta jn screens ko navigate krna isme daalte alg se obj bnak daldia better approach

export default createAppContainer(HomeStack)

//akele createStackNavigator kch nhi krega blk  createAppContainer ek component return krta jo app.js render krske