import React from 'react'; 
import Home from './Home'; 
import About from './About'; 
import Contact from './Contact'; 
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs'; 
 
const Tab=createBottomTabNavigator(); 
export default function Navigation(){ 
return( 
    <>
    
<Tab.Navigator > 
        <Tab.Screen name="home" component={Home} options={{title:'Peliculas'}}/> 
        <Tab.Screen name="contact" component={Contact} options={{title:'Series'}}/> 
        <Tab.Screen name="about" component={About} options={{title:'Proximamente'}}/> 
    </Tab.Navigator>
     </>
); 
}