import React from 'react'; 
import {StyleSheet,View,Image,Button,Text,ScrollView} from 'react-native'; 
 
export default function Contact(){ 
    return( 
        <>
        <View style={[styles.container, {backgroundColor:'black',flexDirection: "column"}]}> 

<View style={{ flex: 6, backgroundColor: "black" }}>

<View style={{flexDirection:'row'}} > 
    <Image  
    style={styles.banner} 
    source={require('../img/nuevo3.jpeg')} /> 
  </View>


</View>
<View style={{ flex: 8, backgroundColor: "black"}}>

<Text style={styles.titulo}>Escoge tu preferencia</Text>
  <ScrollView vertical>
  <ScrollView horizontal>
    <View>
      <Image 
      style={styles.ciudad} 
      source={require('../img/serie1.png')} 
      /> 
    </View>
    <View style={styles.datos}  >
    <Text style={styles.informacion}>Nombre</Text>
    <Text style={styles.informacion2}>On My Block</Text>
    <Text style={styles.informacion}>Clacificacion</Text>
    <Text style={styles.informacion2}>13+</Text>
    <Text style={styles.informacion}>Numero de temporadas</Text>
    <Text style={styles.informacion2}>4 Temporadas</Text>
    </View>
    </ScrollView>
    <Text style={{backgroundColor:'black'}}>{"\n"}</Text>
    <ScrollView horizontal>
    <View>
      <Image 
      style={styles.ciudad} 
      source={require('../img/serie2.png')} 
      /> 
    </View>
    <View style={styles.datos}  >
    <Text style={styles.informacion}>Nombre</Text>
    <Text style={styles.informacion2}>The Seven Deadly Sins</Text>
    <Text style={styles.informacion}>Clacificacion</Text>
    <Text style={styles.informacion2}>13+</Text>
    <Text style={styles.informacion}>Numero de temporadas</Text>
    <Text style={styles.informacion2}>5 Temporadas</Text>
    </View>
    </ScrollView>
    <Text style={{backgroundColor:'black'}}>{"\n"}</Text>
    <ScrollView horizontal>
    <View>
      <Image 
      style={styles.ciudad} 
      source={require('../img/serie3.png')} 
      /> 
    </View>
    <View style={styles.datos}  >
    <Text style={styles.informacion}>Nombre</Text>
    <Text style={styles.informacion2}>Las cosas Por Limpiar</Text>
    <Text style={styles.informacion}>Clacificacion</Text>
    <Text style={styles.informacion2}>16+</Text>
    <Text style={styles.informacion}>Numero de temporadas</Text>
    <Text style={styles.informacion2}>Miniserie</Text>
    </View>
    </ScrollView>
    <Text style={{backgroundColor:'black'}}>{"\n"}</Text>
    <ScrollView horizontal>
    <View>
      <Image 
      style={styles.ciudad} 
      source={require('../img/serie4.png')} 
      /> 
    </View>
    <View style={styles.datos}  >
    <Text style={styles.informacion}>Nombre</Text>
    <Text style={styles.informacion2}>Sex Education</Text>
    <Text style={styles.informacion}>Clacificacion</Text>
    <Text style={styles.informacion2}>16+</Text>
    <Text style={styles.informacion}>Numero de temporadas</Text>
    <Text style={styles.informacion2}>3 Temporadas</Text>
    </View>
    </ScrollView>
    <Text style={{backgroundColor:'black'}}>{"\n"}</Text>
    <ScrollView horizontal>
    <View>
      <Image 
      style={styles.ciudad} 
      source={require('../img/serie5.png')} 
      /> 
    </View>
    <View style={styles.datos}  >
    <Text style={styles.informacion}>Nombre</Text>
    <Text style={styles.informacion2}>Pablo Escobar</Text>
    <Text style={styles.informacion}>Clacificacion</Text>
    <Text style={styles.informacion2}>16+</Text>
    <Text style={styles.informacion}>Numero de temporadas</Text>
    <Text style={styles.informacion2}>1 Temporada</Text>
    </View>
    </ScrollView>
    <Text style={{backgroundColor:'black'}}>{"\n"}</Text>
    <ScrollView horizontal>
    <View>
      <Image 
      style={styles.ciudad} 
      source={require('../img/serie6.png')} 
      /> 
    </View>
    <View style={styles.datos}  >
    <Text style={styles.informacion}>Nombre</Text>
    <Text style={styles.informacion2}>El Señor de los Cielos</Text>
    <Text style={styles.informacion}>Clacificacion</Text>
    <Text style={styles.informacion2}>16+</Text>
    <Text style={styles.informacion}>Numero de temporadas</Text>
    <Text style={styles.informacion2}>3 Temporadas</Text>
    </View>
    </ScrollView>
    
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
        
      },
    
     
      titulo:{
        fontWeight:'bold',
        color:'white',
        fontSize:20,
        padding:2,
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
        width:120,
        height:150,
        marginRight:10,
       
      },
      datos:{
          backgroundColor: 'black',
          width:200,
        height:150,
        marginRight:10,

      }
});