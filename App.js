import { StatusBar } from 'expo-status-bar';
import { Component } from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';

class App extends Component{


  constructor(props) {
    super(props);
    this.state = {
      numero: 0,
      textCron: 'START'
    };

    this.timer = null;

    this.vai = this.vai.bind(this);
    this.limpar = this.limpar.bind(this);
  }

  vai(){

    if (this.timer != null) {
      this.setState({textCron: 'START'});
      clearInterval(this.timer);
      this.timer = null;
    } else {
      this.setState({textCron: 'STOP'});
      this.timer = setInterval( () => {
        this.setState({numero: this.state.numero + 0.1})
      }, 100)
    }
  }

  limpar() {
    clearInterval(this.timer);
    this.timer = null;
    this.setState({textCron: "START"});
    this.setState({numero: 0.0});
  }

 

  render(){
    return (
      <View style={styles.container}>
        <Image 
          source={require('./src/images/cronometro.png')}
          style={styles.cronometro}
        />

        <Text style={styles.timer}> {this.state.numero.toFixed(1)} </Text>

        <View style={styles.btnArea}>
          <TouchableOpacity style={styles.btn} onPress={this.vai}>
            <Text style={styles.btnTexto} >{this.state.textCron}</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.btn} onPress={this.limpar}>
            <Text style={styles.btnTexto}>LIMPAR</Text>
          </TouchableOpacity>
        </View>
        
      </View>
    );
  }
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#00aeef',

  },
  cronometro: {
    width: 250,
    height: 250,
    resizeMode: 'contain'
  },
  timer: {
    fontWeight: 700,
    fontSize: 50,
    color: '#FFF',
    marginTop: -135,
  },
  btnArea: {
    display: 'flex',
    flexDirection: 'row',
    marginTop: 90,
  },  
  btnTexto: {
    margin: 10,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 20,
    paddingHorizontal: 32,
    paddingVertical: 8,
    backgroundColor: '#FFF',
    color: '#00aeef',
    fontWeight: 700
  },

});

export default App;
