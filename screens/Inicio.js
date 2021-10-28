import React from 'react'; 
import {StyleSheet,View,Text} from 'react-native'; 
 

const Flex = () => { 

    return( 

<View style={[styles.container, {flexDirection: "column"}]}> 
            <Text> Estamos en Home </Text> 

<View style={{ flex: 1, backgroundColor: "red" }}>

<Text> segundario </Text> 

</View>
<View style={{ flex: 2, backgroundColor: "blue"}}>
    
<Text> segundario </Text> 

</View>
<View style={{ flex: 3, backgroundColor:"green"}}>
    
<Text> segundario </Text> 

</View>


        </View> 
    ); 
  
}  
const styles = StyleSheet.create({
container:{
    flex: 1,
    padding:20,
}

})

export default Flex;