import React from 'react'; 
import { useState } from 'react';
import {StyleSheet,View,Image,Text,ScrollView, Alert} from 'react-native'; 

export default function Home(){ 

 
    return( 
      <>
        <View style={[styles.container, {backgroundColor:'black',height:'100%',flexDirection: "column"}]}> 

<View style={{ flex: 6, backgroundColor: "black" }}>


<View style={{flexDirection:'row'}} > 
    <Image  
    style={styles.banner} 
    source={require('../img/nuevo4.jpeg')} /> 
  </View>


</View>
<View style={{ flex: 3, backgroundColor: "black"}}>

<Text style={styles.titulo}>Acción</Text>
  <ScrollView horizontal>


    <View>
      <Image 
      style={styles.ciudad} 
      source={require('../img/accion1.png')} 
      /> 
    </View>
    <View>
      
      <Image 
      style={styles.ciudad} 
      source={require('../img/accion2.png')} 
      /> 
    </View><View>
      <Image 
      style={styles.ciudad} 
      source={require('../img/accion3.png')} 
      /> 
    </View>
    <View>
      <Image 
      style={styles.ciudad} 
      source={require('../img/accion4.png')} 
      /> 
    </View>
    <View>
      <Image 
      style={styles.ciudad} 
      source={require('../img/accion5.png')} 
      /> 
    </View>
    <View>
      <Image 
      style={styles.ciudad} 
      source={require('../img/accion6.png')} 
      /> 
    </View>
  </ScrollView>

</View>
<View style={{ flex: 3, backgroundColor:"black"}}>


<Text style={styles.titulo}>Romance</Text>
  <ScrollView horizontal>
    <View>
      <Image 
      style={styles.ciudad} 
      source={require('../img/romance1.png')} 
      /> 
    </View>
    <View>
      <Image 
      style={styles.ciudad} 
      source={require('../img/romance2.png')} 
      /> 
    </View><View>
      <Image 
      style={styles.ciudad} 
      source={require('../img/romance3.png')} 
      /> 
    </View>
    <View>
      <Image 
      style={styles.ciudad} 
      source={require('../img/romance4.png')} 
      /> 
    </View>
    <View>
      <Image 
      style={styles.ciudad} 
      source={require('../img/romance5.png')} 
      /> 
    </View>
    <View>
      <Image 
      style={styles.ciudad} 
      source={require('../img/romance6.png')} 
      /> 
    </View>
  </ScrollView>


</View>
<View style={{ flex: 3, backgroundColor:"black"}}>


<Text style={styles.titulo}>Humor</Text>
  <ScrollView horizontal>
    <View>
      <Image 
      style={styles.ciudad} 
      source={require('../img/comedia1.png')} 
      /> 
    </View>
    <View>
      <Image 
      style={styles.ciudad} 
      source={require('../img/comedia2.png')} 
      /> 
    </View><View>
      <Image 
      style={styles.ciudad} 
      source={require('../img/comedia3.png')} 
      /> 
    </View>
    <View>
      <Image 
      style={styles.ciudad} 
      source={require('../img/comedia4.png')} 
      /> 
    </View>
    <View>
      <Image 
      style={styles.ciudad} 
      source={require('../img/comedia5.png')} 
      /> 
    </View>
    <View>
      <Image 
      style={styles.ciudad} 
      source={require('../img/comedia6.png')} 
      /> 
    </View>
  </ScrollView>


</View>



    </View> 
    </>
    ); 
}
const styles = StyleSheet.create({
    container:{
        flex: 1,
        padding:5,
    },
    contenedoor:{ 
        backgroundColor:'black', 
        flex:1, 
        //flexDirection:'column' 
        flexDirection:'row' ,
        justifyContent:'space-around',
      alignItems: 'flex-end',
      }, 
      banner:{ 
        height:250, 
        flex:1 
      },
    
     
      titulo:{
        fontWeight:'bold',
        color:'white',
        fontSize:20,
        padding:2,
      },
      
      contenedor:{
        marginHorizontal:0,
        backgroundColor:'black',
      },
      ciudad:{
        width:80,
        height:90,
        marginRight:10,
       
      },
      vistamodal:{
        backgroundColor:'#000000aa',
        flex:1,

      },
      Modal: {
        backgroundColor:'#fff',
        margin: 50,
        padding: 40,
        borderRadius: 10,
        flex:1,

      },
      subtitulo:{
        fontWeight:'bold',
        fontSize: 14,
        justifyContent:'center',

      },
});