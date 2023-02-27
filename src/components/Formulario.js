/* eslint-disable react-native/no-inline-styles */
import React, { useState } from 'react';
import {
  View,
  TextInput,
  StyleSheet,
  TouchableWithoutFeedback,
  Text,
  Animated,
  Alert,
} from 'react-native';
import { Picker } from '@react-native-picker/picker';

const Formulario = ({busqueda, setBusqueda, guardarConsultar}) => {

  const { pais, ciudad } = busqueda;

  const [ animacionBoton ] = useState(new Animated.Value(1));

  const consultarClima = () => {
    if (pais.trim() === '' || ciudad.trim() === ''){
      mostrarAlerta();
      return;
    }

    guardarConsultar(true);
  };

  const mostrarAlerta = () => {
    Alert.alert(
      'Error',
      'Agrega una ciudad y país para la Búsqueda'
      [{ text: 'Entendido' }]
    );
  };

  const animacionEntrada = () => {
    Animated.spring(animacionBoton, {
      toValue: 0.9,
    }).start();
  };

  const animacionSalida = () => {
    Animated.spring(animacionBoton, {
      toValue: 1,
      friction: 2,
      tension: 30,
    }).start();
  };

  const estiloAnimacion = {
    transform: [{ scale: animacionBoton }],
  };

  return (
    <>
      <View style={styles.formulario}>
        <View>
          <TextInput
            value={ciudad}
            style={styles.input}
            onChangeText={ciudadSeleccionada => setBusqueda({...busqueda, ciudadSeleccionada})}
            placeholder="Ciudad"
            placeholderTextColor="#666"
          />
        </View>
        <View>
          <Picker
            selectedValue={pais}
            style={{ height: 120, backgroundColor: '#fff' }}
            onValueChange={ paisSeleccionado => setBusqueda({...busqueda, paisSeleccionado})}
          >
            <Picker.Item label="-- Seleccione un país --" value="" />
            <Picker.Item label="Argentina" value="AR" />
            <Picker.Item label="Colombia" value="CO" />
            <Picker.Item label="Costa Rica" value="CR" />
            <Picker.Item label="España" value="ES" />
            <Picker.Item label="Estados Unidos" value="US" />
            <Picker.Item label="México" value="MX" />
            <Picker.Item label="Perú" value="PE" />
          </Picker>
        </View>
      </View>

      <TouchableWithoutFeedback
        onPressIn={() => animacionEntrada()}
        onPressOut={() => animacionSalida()}
        onPress={() => consultarClima()}
      >
        <Animated.View
          style={[styles.btnBuscar, estiloAnimacion]}
        >
          <Text style={styles.textoBuscar}>Buscar Clima</Text>
        </Animated.View>
      </TouchableWithoutFeedback>
    </>
   );
};

const styles = StyleSheet.create({
  formulario: {},
  input: {
    padding: 10,
    height: 50,
    backgroundColor: '#fff',
    fontSize: 20,
    marginBottom: 20,
    textAlign: 'center',
  },
  btnBuscar: {
    marginTop: 50,
    backgroundColor: '#000',
    padding: 10,
    justifyContent: 'center',
  },
  textoBuscar: {
    color: '#fff',
    fontWeight: 'bold',
    textTransform: 'uppercase',
    textAlign: 'center',
    fontSize: 18,
  },
});

export default Formulario;
