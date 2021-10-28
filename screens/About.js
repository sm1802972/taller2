import React from 'react'; 
import {StyleSheet,View,Image,FlatList,SafeAreaView,Text,ScrollView} from 'react-native'; 


export default function About(){ 

    return( 
        <>
  <View style={[styles.container, {backgroundColor:'black',flexDirection: "column"}]}> 
        
<View style={{ flex: 10, backgroundColor: "black"}}>
<Text style={styles.titulo}>Lo mejor</Text>
  <ScrollView vertical>
  <Image 
       style={styles.banner}
      source={require('../img/nuevo1.jpeg')} 
      /> 
 
    <View style={styles.datos}  >
    <Text style={styles.informacion}>Nombre</Text>
    <Text style={styles.informacion2}>YOU</Text>
    <Text style={styles.informacion}>Tipo</Text>
    <Text style={styles.informacion2}>Serie</Text>
    <Text style={styles.informacion}>Fecha</Text>
    <Text style={styles.informacion2}>15 de octubre</Text>
    </View>
    <Text style={{backgroundColor:'black'}}>{"\n"}</Text>
    <View style={{flexDirection:'row'}} >
    <Image 
       style={styles.banner}
      source={require('../img/nuevo2.jpeg')} 
      /> 

    </View>
    <View style={styles.datos}  >
    <Text style={styles.informacion}>Nombre</Text>
    <Text style={styles.informacion2}>Ejercito de ladrones</Text>
    <Text style={styles.informacion}>Tipo</Text>
    <Text style={styles.informacion2}>Pelicula</Text>
    <Text style={styles.informacion}>Fecha</Text>
    <Text style={styles.informacion2}>29 de octubre</Text>
    <Text style={styles.informacion2}></Text>
    </View>
    <Text style={{backgroundColor:'black'}}>{"\n"}</Text>
    <View style={{flexDirection:'row'}} >
      <Image 
       style={styles.banner}
      source={require('../img/nuevo3.jpeg')} 
      /> 
    </View>
    <View style={styles.datos}  >
    <Text style={styles.informacion}>Nombre</Text>
    <Text style={styles.informacion2}>Fauces de la noche</Text>
    <Text style={styles.informacion}>Tipo</Text>
    <Text style={styles.informacion2}>Pelicula</Text>
    <Text style={styles.informacion}>Fecha</Text>
    <Text style={styles.informacion2}>20 de Octubre</Text>
    </View>
    <Text style={{backgroundColor:'black'}}>{"\n"}</Text>
    <View style={{flexDirection:'row'}} >
      <Image 
       style={styles.banner}
      source={require('../img/nuevo4.jpeg')} 
      /> 
    </View>
  
    <View style={styles.datos}  >
    <Text style={styles.informacion}>Nombre</Text>
    <Text style={styles.informacion2}>La batalla olvidada</Text>
    <Text style={styles.informacion}>Tipo</Text>
    <Text style={styles.informacion2}>Pelicula</Text>
    <Text style={styles.informacion}>Fecha</Text>
    <Text style={styles.informacion2}>15 de octubre</Text>
    </View>
    <Text style={{backgroundColor:'black'}}>{"\n"}</Text>
    <View style={{flexDirection:'row'}} >
      <Image 
       style={styles.banner}
      source={require('../img/nuevo5.jpeg')} 
      /> 
    </View>
    <View style={styles.datos}  >
    <Text style={styles.informacion}>Nombre</Text>
    <Text style={styles.informacion2}>Sexo y Amor</Text>
    <Text style={styles.informacion}>Tipo</Text>
    <Text style={styles.informacion2}>Serie</Text>
    <Text style={styles.informacion}>Fecha</Text>
    <Text style={styles.informacion2}>21 de octubre</Text>
    </View>
    <Text style={{backgroundColor:'black'}}>{"\n"}</Text>
    
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
        flex:1 ,
        width:'100%',
      },
    
     
      titulo:{
        fontWeight:'bold',
        color:'white',
        fontSize:25,
        textAlign: 'center',
      },
          
     
      informacion:{
        fontWeight:'bold',
        color:'white',
        fontSize:18,
        textAlign: 'center',
      },
      informacion2:{
        fontWeight:'bold',
        color:'#979a9a',
        fontSize:13,
        textAlign: 'center',
      },
      
      
      contenedor:{
        marginHorizontal:0,
        backgroundColor:'black',
      },
      ciudad:{
        width:200,
        height:250,
        marginRight:10,
       
      },
      datos:{
          backgroundColor: 'black',
          width:'100%',
        height:150,
        marginRight:10,

      }
});