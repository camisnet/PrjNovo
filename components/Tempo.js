import React from 'react';
import { Text, StyleSheet } from 'react-native';

export default function Tempo(props){

    return(
        <>
            <Text style={styles.texto}> Temperatura Min.: {props.data.min}</Text>
            <Text style={styles.texto}> Temperatura Max.:{props.data.max}</Text>
            <Text style={styles.texto}> Descrição:{props.data.description}</Text>
        </>
    )

}
const styles = StyleSheet.create({
    texto: {
      fontSize: 20,
      marginTop:10,
      top: 50,
      width: '60%',
      padding: 15,
      borderRadius: 15, 
      left: 83,
      backgroundColor: 'white',
      opacity: 0.7
    },
});