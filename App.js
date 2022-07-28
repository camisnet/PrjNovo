import React from 'react';
import { StyleSheet, ImageBackground, Text, View, TextInput, TouchableOpacity} from 'react-native';

const image = { uri: "https://i.pinimg.com/originals/85/d6/b8/85d6b896ac59612102200dd3482009db.jpg" };

export default function App() {
  return (
    <View style={styles.container}>
      <ImageBackground  style={{
            position: "absolute",
            height: '100%',
            width: '100%'
          }}source={image}>
    </ImageBackground>
      <View>
        <Text style={styles.titulo}>Previsão do Tempo</Text>
        </View>

        <View>
        <Text style={styles.label}>Cidade:</Text>
        <TextInput
        placeholder='Digite sua cidade'
        style={styles.input}
        />
        </View>
        <View>
          <TouchableOpacity style={styles.botao}>
            <Text style={styles.txtBotao}>Buscar</Text>
          </TouchableOpacity>
        </View>

        <View>

        </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 2,
    backgroundColor: '#fff',
    top: 50,
  },
  titulo: {
    fontSize:30,
    textAlign:'center'
  },
  input:{
    width:'80%',
    marginLeft:'10%',
    borderColor: 'purple',
    borderBottomWidth:2,
    marginTop: 20,
    fontSize: 20,
    top: 20,
  },
  
  label:{
    fontSize:20, 
    top:35,
  },
  botao:{
    width:'50%',
    top: 50,
    marginLeft: '25%',
    fontSize: 30,
    textAlign:'center',
    height: 50,
    backgroundColor: '#E6E6FA',
    borderRadius: 50
  },
  txtBotao:{
    fontSize:35,
    textAlign:'center',
    color: '#fff'
  },
});
