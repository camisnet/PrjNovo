import React, {useState} from 'react';
import { StyleSheet, ImageBackground, Text, View, TextInput, TouchableOpacity} from 'react-native';
import Tempo from './components/Tempo';
import Api from './components/Api';


const image = { uri: "https://i.pinimg.com/originals/85/d6/b8/85d6b896ac59612102200dd3482009db.jpg" };

export default function App() {
  const [dados, setDados] = useState("");

  async function carregaDados(){
    const response = await Api.get(`weather?array_limit=1&fields=only_results,temp,city_name,description,forecast,max,min,date&key=3d5afcfa&city_name=sp`)
      setDados(response.data.forecast[0]);
  }
  
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
          <TouchableOpacity style={styles.botao} onPress={carregaDados}>
            <Text style={styles.txtBotao}>Buscar</Text>
          </TouchableOpacity>
        </View>

        <View>
          <Tempo data = {dados}/>
        </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 2,
    backgroundColor: '#fff',
   
  },
  titulo: {
    fontSize:30,
    textAlign:'center',
    top: 50
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
    top:40,
  },
  botao:{
    width:'50%',
    top: 50,
    marginLeft: '25%',
    fontSize: 30,
    textAlign:'center',
    height: 50,
    backgroundColor: 'purple',
    borderRadius: 50
  },
  txtBotao:{
    fontSize:30,
    textAlign:'center',
    color: '#fff'
  },
  
});
